'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Plus, Edit, Trash2, Search } from 'lucide-react'
import Image from 'next/image'
import GalleryModal from './GalleryModal'

interface GalleryImage {
  id: string
  title: string
  description: string | null
  imageUrl: string
  category: string
  altText: string
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export default function GalleryManager() {
  const [images, setImages] = useState<GalleryImage[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingImage, setEditingImage] = useState<GalleryImage | null>(null)

  useEffect(() => {
    fetchImages()
  }, [])

  const fetchImages = async () => {
    try {
      const response = await fetch('/api/admin/gallery')
      if (response.ok) {
        const data = await response.json()
        setImages(data.images)
      }
    } catch (error) {
      console.error('Failed to fetch images:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleAddImage = () => {
    setEditingImage(null)
    setIsModalOpen(true)
  }

  const handleEditImage = (image: GalleryImage) => {
    setEditingImage(image)
    setIsModalOpen(true)
  }

  const handleDeleteImage = async (id: string) => {
    if (!confirm('Are you sure you want to delete this image?')) return

    try {
      const response = await fetch(`/api/admin/gallery/${id}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        setImages(images.filter(img => img.id !== id))
      }
    } catch (error) {
      console.error('Failed to delete image:', error)
    }
  }

  const handleModalSuccess = () => {
    setIsModalOpen(false)
    setEditingImage(null)
    fetchImages()
  }

  const filteredImages = images.filter(image => {
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.description?.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = !selectedCategory || image.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const categories = Array.from(new Set(images.map(img => img.category)))

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <div className="h-48 bg-gray-200 rounded-t-lg"></div>
            <CardContent className="p-4">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-full"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search images..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <Button onClick={handleAddImage}>
          <Plus className="h-4 w-4 mr-2" />
          Add Image
        </Button>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((image) => (
          <Card key={image.id} className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src={image.imageUrl}
                alt={image.altText}
                fill
                className="object-cover"
              />
              {!image.isActive && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <span className="text-white font-semibold">Inactive</span>
                </div>
              )}
            </div>
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{image.category}</p>
                  {image.description && (
                    <p className="text-sm text-gray-500 line-clamp-2">{image.description}</p>
                  )}
                </div>
                <div className="flex space-x-2 ml-4">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleEditImage(image)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDeleteImage(image.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredImages.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No images found.</p>
        </div>
      )}

      {/* Modal */}
      <GalleryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        image={editingImage}
        onSuccess={handleModalSuccess}
      />
    </div>
  )
}