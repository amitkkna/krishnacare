'use client'

import { useState, useEffect } from 'react'
import { X, Save, Eye } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  imageUrl: string | null
  author: string
  category: string
  tags: string
  published: boolean
  viewCount: number
  createdAt: string
  updatedAt: string
}

interface BlogModalProps {
  isOpen: boolean
  onClose: () => void
  post: BlogPost | null
  onSuccess: () => void
}

export default function BlogModal({ isOpen, onClose, post, onSuccess }: BlogModalProps) {
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    imageUrl: '',
    author: '',
    category: '',
    tags: '',
    published: false
  })
  const [loading, setLoading] = useState(false)
  const [preview, setPreview] = useState(false)

  useEffect(() => {
    if (post) {
      setFormData({
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        imageUrl: post.imageUrl || '',
        author: post.author,
        category: post.category,
        tags: post.tags,
        published: post.published
      })
    } else {
      setFormData({
        title: '',
        excerpt: '',
        content: '',
        imageUrl: '',
        author: 'Krishna Care Team',
        category: 'Agriculture',
        tags: '',
        published: false
      })
    }
    setPreview(false)
  }, [post, isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const url = post ? `/api/admin/blog/${post.id}` : '/api/admin/blog'
      const method = post ? 'PUT' : 'POST'

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        onSuccess()
      } else {
        const error = await response.json()
        alert(error.message || 'Failed to save blog post')
      }
    } catch (error) {
      console.error('Error saving blog post:', error)
      alert('Failed to save blog post')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const generateSlug = (title: string) => {
    return title.toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .trim()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose}></div>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-full max-w-4xl">
          <form onSubmit={handleSubmit}>
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-medium text-gray-900">
                  {post ? 'Edit Blog Post' : 'Create New Blog Post'}
                </h3>
                <div className="flex items-center space-x-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setPreview(!preview)}
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    {preview ? 'Edit' : 'Preview'}
                  </Button>
                  <button type="button" onClick={onClose} className="text-gray-400 hover:text-gray-600">
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </div>

              {preview ? (
                /* Preview Mode */
                <div className="prose max-w-none">
                  <div className="mb-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {formData.category}
                    </span>
                  </div>
                  <h1 className="text-3xl font-bold mb-4">{formData.title || 'Blog Post Title'}</h1>
                  <div className="text-gray-600 mb-6">
                    By {formData.author} • {formData.tags && `Tags: ${formData.tags}`}
                  </div>
                  {formData.imageUrl && (
                    <div className="relative w-full h-64 mb-6">
                      <Image
                        src={formData.imageUrl}
                        alt={formData.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  )}
                  <div className="text-lg text-gray-700 mb-6 font-medium">{formData.excerpt}</div>
                  <div className="whitespace-pre-wrap">{formData.content}</div>
                </div>
              ) : (
                /* Edit Mode */
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Left Column */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Title *
                      </label>
                      <Input
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Enter blog post title"
                        required
                      />
                      {formData.title && (
                        <p className="text-xs text-gray-500 mt-1">
                          Slug: {generateSlug(formData.title)}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Excerpt *
                      </label>
                      <textarea
                        name="excerpt"
                        value={formData.excerpt}
                        onChange={handleChange}
                        placeholder="Brief description of the blog post"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={3}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Featured Image URL
                      </label>
                      <Input
                        name="imageUrl"
                        value={formData.imageUrl}
                        onChange={handleChange}
                        placeholder="https://example.com/image.jpg"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Author *
                        </label>
                        <Input
                          name="author"
                          value={formData.author}
                          onChange={handleChange}
                          placeholder="Author name"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Category *
                        </label>
                        <select
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        >
                          <option value="">Select Category</option>
                          <option value="Agriculture">Agriculture</option>
                          <option value="Technology">Technology</option>
                          <option value="Industry News">Industry News</option>
                          <option value="Company Updates">Company Updates</option>
                          <option value="Sustainability">Sustainability</option>
                          <option value="Innovation">Innovation</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Tags
                      </label>
                      <Input
                        name="tags"
                        value={formData.tags}
                        onChange={handleChange}
                        placeholder="agriculture, technology, farming (comma separated)"
                      />
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="published"
                        checked={formData.published}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label className="ml-2 block text-sm text-gray-900">
                        Publish immediately
                      </label>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Content *
                    </label>
                    <textarea
                      name="content"
                      value={formData.content}
                      onChange={handleChange}
                      placeholder="Write your blog post content here..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows={20}
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      You can use HTML tags for formatting
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <Button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto sm:ml-3"
              >
                {loading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Saving...
                  </div>
                ) : (
                  <>
                    <Save className="h-4 w-4 mr-2" />
                    {post ? 'Update Post' : 'Create Post'}
                  </>
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="mt-3 w-full sm:mt-0 sm:w-auto"
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}