'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import ImageModal from './ImageModal'
import { Search, Grid, List } from 'lucide-react'

interface GalleryImage {
  id: string
  title: string
  description: string | null
  imageUrl: string
  category: string
  altText: string
  createdAt: string
}

const FullGallery = () => {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([])
  const [filteredImages, setFilteredImages] = useState<GalleryImage[]>([])
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [hasMore, setHasMore] = useState(false)
  const [totalCount, setTotalCount] = useState(0)
  const [categories, setCategories] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [layout, setLayout] = useState<'grid' | 'masonry'>('grid')

  useEffect(() => {
    fetchGalleryImages(1, true)
  }, [selectedCategory])

  useEffect(() => {
    // Filter images based on search term
    if (searchTerm) {
      const filtered = galleryImages.filter(image =>
        image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        image.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        image.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredImages(filtered)
    } else {
      setFilteredImages(galleryImages)
    }
  }, [searchTerm, galleryImages])

  const fetchGalleryImages = async (page: number = 1, reset: boolean = false) => {
    try {
      if (reset) {
        setLoading(true)
      } else {
        setLoadingMore(true)
      }

      const limit = 20
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

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index)
    setIsModalOpen(true)
  }

  const handleLoadMore = () => {
    fetchGalleryImages(currentPage + 1, false)
  }

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category)
    setCurrentPage(1)
    setSearchTerm('')
  }

  const displayImages = filteredImages

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(12)].map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="bg-gray-300 rounded-xl aspect-[4/3] mb-4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Krishna Care <span className="text-primary-600">Gallery</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive collection of images showcasing our world-class facilities,
            operations, and the agricultural communities we serve across India.
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          {/* Search and Layout Controls */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search images by title, description, or category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setLayout('grid')}
                className={`p-3 rounded-lg transition-colors ${
                  layout === 'grid'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setLayout('masonry')}
                className={`p-3 rounded-lg transition-colors ${
                  layout === 'masonry'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <button
              onClick={() => handleCategoryFilter('')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === ''
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600 border border-gray-200'
              }`}
            >
              All Categories ({totalCount})
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

          {/* Stats */}
          <div className="text-center text-gray-600">
            <p>
              {searchTerm ? (
                <>Showing {displayImages.length} results for "{searchTerm}"</>
              ) : (
                <>Showing {displayImages.length} of {totalCount} images{selectedCategory && ` in "${selectedCategory}"`}</>
              )}
            </p>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        {displayImages.length === 0 ? (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">No Images Found</h3>
              <p className="text-gray-500 mb-6">
                {searchTerm
                  ? `No images match your search term "${searchTerm}". Try a different search.`
                  : "No images available in this category. Check back soon for new content."
                }
              </p>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Clear Search
                </button>
              )}
            </div>
          </div>
        ) : (
          <>
            <div className={`grid gap-6 ${
              layout === 'grid'
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            }`}>
              {displayImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                  onClick={() => handleImageClick(index)}
                >
                  <div className={`relative overflow-hidden rounded-xl mb-4 ${
                    layout === 'masonry' ? 'aspect-auto' : 'aspect-[4/3]'
                  }`}>
                    <Image
                      src={image.imageUrl}
                      alt={image.altText || image.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                        {image.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h4 className="text-lg font-bold mb-1">{image.title}</h4>
                      {image.description && (
                        <p className="text-gray-200 text-sm line-clamp-2">{image.description}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Load More Button */}
            {hasMore && !searchTerm && (
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
                  Showing {displayImages.length} of {totalCount} images
                </p>
              </motion.div>
            )}
          </>
        )}

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

export default FullGallery