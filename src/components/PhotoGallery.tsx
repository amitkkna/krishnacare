'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import ImageModal from './ImageModal'

interface GalleryImage {
  id: string
  title: string
  description: string | null
  imageUrl: string
  category: string
  altText: string
  createdAt: string
}

const PhotoGallery = () => {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([])
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [hasMore, setHasMore] = useState(false)
  const [totalCount, setTotalCount] = useState(0)
  const [categories, setCategories] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [viewMode, setViewMode] = useState<'limited' | 'all'>('limited')

  // Fallback images if no dynamic content is available
  const fallbackImages = [
    {
      title: 'Modern Warehousing Facilities',
      description: 'State-of-the-art storage facilities with climate control for optimal fertilizer preservation',
      category: 'Infrastructure',
      imageUrl: '/images/gallery/warehouse-modern.jpg',
      altText: 'Modern warehouse facility',
      icon: '🏭'
    },
    {
      title: 'Agricultural Fields & Spraying',
      description: 'Aerial view of precision spraying operations ensuring optimal crop nutrition and protection',
      category: 'Agriculture',
      imageUrl: '/images/gallery/tractor-spraying.jpg',
      altText: 'Agricultural spraying operations',
      icon: '🚜'
    },
    {
      title: 'Transportation Fleet',
      description: 'Our modern transportation fleet ensuring safe and timely delivery across India',
      category: 'Logistics',
      imageUrl: '/images/gallery/logistics-fleet.jpg',
      altText: 'Transportation fleet',
      icon: '🚛'
    }
  ]

  useEffect(() => {
    fetchGalleryImages(1, true)
  }, [selectedCategory, viewMode])

  const fetchGalleryImages = async (page: number = 1, reset: boolean = false) => {
    try {
      if (reset) {
        setLoading(true)
      } else {
        setLoadingMore(true)
      }

      const limit = viewMode === 'limited' ? 6 : 12
      const categoryParam = selectedCategory ? `&category=${encodeURIComponent(selectedCategory)}` : ''
      const response = await fetch(`/api/gallery?limit=${limit}&page=${page}${categoryParam}`)

      if (response.ok) {
        const data = await response.json()

        if (reset) {
          setGalleryImages(data.images)
        } else {
          setGalleryImages(prev => [...prev, ...data.images])
        }

        setHasMore(data.pagination.hasMore)
        setTotalCount(data.pagination.totalCount)
        setCurrentPage(page)
        setCategories(data.categories || [])
      }
    } catch (error) {
      console.error('Failed to fetch gallery images:', error)
    } finally {
      setLoading(false)
      setLoadingMore(false)
    }
  }

  const displayImages = galleryImages.length > 0 ? galleryImages : fallbackImages

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index)
    setIsModalOpen(true)
  }

  const handleLoadMore = () => {
    fetchGalleryImages(currentPage + 1, false)
  }

  const handleViewAll = () => {
    setViewMode('all')
    fetchGalleryImages(1, true)
  }

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category)
    setCurrentPage(1)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-4">
            Our Operations in Action
          </h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-6">
            Visual Journey Through
            <span className="text-primary-600"> Krishna Care</span>
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Take a visual tour of our world-class facilities, operations, and the agricultural communities we serve across India.
          </p>
        </motion.div>

        {/* Category Filter and View Options */}
        {(galleryImages.length > 0 || categories.length > 0) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <button
                onClick={() => handleCategoryFilter('')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === ''
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600 border border-gray-200'
                }`}
              >
                All Categories
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryFilter(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Stats and View Toggle */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-4">
                <span>
                  Showing {galleryImages.length} of {totalCount} images
                  {selectedCategory && ` in "${selectedCategory}"`}
                </span>
              </div>

              <div className="flex gap-3">
                {viewMode === 'limited' && totalCount > 6 && (
                  <button
                    onClick={handleViewAll}
                    className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium"
                  >
                    View All Images ({totalCount})
                  </button>
                )}
                <a
                  href="/gallery"
                  className="bg-white text-primary-600 border border-primary-600 px-4 py-2 rounded-lg hover:bg-primary-50 transition-colors font-medium"
                >
                  Full Gallery Page
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {loading ? (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="bg-gray-300 rounded-xl aspect-[4/3] mb-4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
              {displayImages.map((image, index) => (
                <motion.div
                  key={galleryImages.length > 0 ? (image as GalleryImage).id : index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                  onClick={() => handleImageClick(index)}
                >
                  <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-4">
                    <Image
                      src={image.imageUrl}
                      alt={image.altText || image.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Gradient Overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                    {/* Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                      {/* Category Badge */}
                      <div>
                        <span className="bg-green-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                          {image.category}
                        </span>
                      </div>

                      {/* Bottom Content */}
                      <div>
                        {/* Icon */}
                        {('icon' in image) && (
                          <div className="text-3xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                            {image.icon}
                          </div>
                        )}

                        {/* Title */}
                        <h4 className="text-lg font-bold mb-1 group-hover:text-green-300 transition-colors duration-300">
                          {image.title}
                        </h4>

                        {/* Description */}
                        <p className="text-gray-200 text-xs leading-relaxed line-clamp-2">
                          {image.description}
                        </p>
                      </div>
                    </div>

                    {/* Hover Border Effect */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-green-400 rounded-xl transition-all duration-300"></div>
                  </div>

                  {/* Additional info below image */}
                  <div className="space-y-1">
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{image.category}</span>
                      <span className="mx-2">•</span>
                      <span>Krishna Care Operations</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Load More Button */}
            {hasMore && galleryImages.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mt-12"
              >
                <button
                  onClick={handleLoadMore}
                  disabled={loadingMore}
                  className={`bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-all duration-300 font-semibold flex items-center mx-auto ${
                    loadingMore ? 'opacity-75 cursor-not-allowed' : 'hover:scale-105'
                  }`}
                >
                  {loadingMore ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Loading More...
                    </>
                  ) : (
                    <>
                      Load More Images
                      <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </>
                  )}
                </button>
                <p className="text-gray-500 text-sm mt-3">
                  Showing {galleryImages.length} of {totalCount} images
                </p>
              </motion.div>
            )}
          </>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              Experience Krishna Care Excellence
            </h4>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Visit our facilities and see how we're revolutionizing agricultural logistics in India. 
              Schedule a tour of our operations and discover the Krishna Care difference.
            </p>
            <button className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold">
              Schedule a Facility Tour
            </button>
          </div>
        </motion.div>

        {/* Image Modal */}
        <ImageModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          images={displayImages}
          initialIndex={selectedImageIndex}
        />
      </div>
    </section>
  )
}

export default PhotoGallery
