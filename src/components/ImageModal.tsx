'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, Calendar, Eye } from 'lucide-react'

interface GalleryImage {
  id: string
  title: string
  description: string | null
  imageUrl: string
  category: string
  altText: string
  createdAt: string
}

interface FallbackImage {
  title: string
  description: string
  category: string
  imageUrl: string
  altText: string
  icon: string
}

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  images: (GalleryImage | FallbackImage)[]
  initialIndex: number
}

export default function ImageModal({ isOpen, onClose, images, initialIndex }: ImageModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  useEffect(() => {
    setCurrentIndex(initialIndex)
  }, [initialIndex])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      switch (e.key) {
        case 'Escape':
          onClose()
          break
        case 'ArrowLeft':
          goToPrevious()
          break
        case 'ArrowRight':
          goToNext()
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, goToPrevious, goToNext, onClose])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (!isOpen || images.length === 0) return null

  const currentImage = images[currentIndex]
  const isDynamicImage = 'id' in currentImage

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
            className="relative max-w-6xl max-h-[90vh] w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation Buttons */}
            {images.length > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            <div className="grid lg:grid-cols-2 h-full">
              {/* Image Section */}
              <div className="relative h-96 lg:h-auto bg-gray-100">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative h-full"
                  >
                    <Image
                      src={currentImage.imageUrl}
                      alt={currentImage.altText || currentImage.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Image Counter */}
                {images.length > 1 && (
                  <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                    {currentIndex + 1} / {images.length}
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {currentImage.category}
                    </span>
                  </div>

                  {/* Title */}
                  <motion.h2
                    key={`title-${currentIndex}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl font-bold text-gray-900 mb-4"
                  >
                    {currentImage.title}
                  </motion.h2>

                  {/* Description */}
                  <motion.p
                    key={`desc-${currentIndex}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-600 leading-relaxed mb-6"
                  >
                    {currentImage.description || "Krishna Care's commitment to excellence in agricultural logistics and supply chain management."}
                  </motion.p>

                  {/* Icon for fallback images */}
                  {'icon' in currentImage && (
                    <div className="text-4xl mb-4">
                      {currentImage.icon}
                    </div>
                  )}

                  {/* Metadata */}
                  <div className="space-y-3">
                    {isDynamicImage && (
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>Added on {formatDate((currentImage as GalleryImage).createdAt)}</span>
                      </div>
                    )}

                    <div className="flex items-center text-sm text-gray-500">
                      <Eye className="h-4 w-4 mr-2" />
                      <span>Krishna Care Operations</span>
                    </div>
                  </div>
                </div>

                {/* Thumbnail Navigation */}
                {images.length > 1 && (
                  <div className="mt-8">
                    <h4 className="text-sm font-medium text-gray-700 mb-3">Other Images</h4>
                    <div className="grid grid-cols-4 gap-2 max-h-20 overflow-y-auto">
                      {images.map((image, index) => (
                        <button
                          key={isDynamicImage ? (image as GalleryImage).id : index}
                          onClick={() => setCurrentIndex(index)}
                          className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-200 ${
                            index === currentIndex
                              ? 'ring-2 ring-green-500 ring-offset-2'
                              : 'hover:scale-105'
                          }`}
                        >
                          <Image
                            src={image.imageUrl}
                            alt={image.altText || image.title}
                            fill
                            className="object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}