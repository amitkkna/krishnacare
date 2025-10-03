'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Plus, Edit, Trash2, Search, Eye, Calendar, User } from 'lucide-react'
import BlogModal from './BlogModal'

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

export default function BlogManager() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [publishedFilter, setPublishedFilter] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    fetchPosts()
  }, [currentPage, selectedCategory, publishedFilter])

  const fetchPosts = async () => {
    try {
      const params = new URLSearchParams({
        page: currentPage.toString(),
        limit: '10'
      })

      if (selectedCategory) params.append('category', selectedCategory)
      if (publishedFilter) params.append('published', publishedFilter)

      const response = await fetch(`/api/admin/blog?${params}`)
      if (response.ok) {
        const data = await response.json()
        setPosts(data.posts)
        setTotalPages(data.pagination.pages)
      }
    } catch (error) {
      console.error('Failed to fetch posts:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleAddPost = () => {
    setEditingPost(null)
    setIsModalOpen(true)
  }

  const handleEditPost = (post: BlogPost) => {
    setEditingPost(post)
    setIsModalOpen(true)
  }

  const handleDeletePost = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog post?')) return

    try {
      const response = await fetch(`/api/admin/blog/${id}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        setPosts(posts.filter(post => post.id !== id))
      }
    } catch (error) {
      console.error('Failed to delete post:', error)
    }
  }

  const handleTogglePublished = async (post: BlogPost) => {
    try {
      const response = await fetch(`/api/admin/blog/${post.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...post,
          published: !post.published
        })
      })

      if (response.ok) {
        const updatedPost = await response.json()
        setPosts(posts.map(p => p.id === post.id ? updatedPost : p))
      }
    } catch (error) {
      console.error('Failed to update post:', error)
    }
  }

  const handleModalSuccess = () => {
    setIsModalOpen(false)
    setEditingPost(null)
    fetchPosts()
  }

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesSearch
  })

  const categories = Array.from(new Set(posts.map(post => post.category)))

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-6">
        {[...Array(5)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardContent className="p-6">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-2/3"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Blog Management</h1>
          <p className="text-gray-600">Create and manage blog posts</p>
        </div>
        <Button onClick={handleAddPost}>
          <Plus className="h-4 w-4 mr-2" />
          New Blog Post
        </Button>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search posts..."
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

        <select
          value={publishedFilter}
          onChange={(e) => setPublishedFilter(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Status</option>
          <option value="true">Published</option>
          <option value="false">Draft</option>
        </select>

        <div className="text-sm text-gray-600 flex items-center">
          Total: {posts.length} posts
        </div>
      </div>

      {/* Posts List */}
      <div className="space-y-4">
        {filteredPosts.map((post) => (
          <Card key={post.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{post.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      post.published
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {post.published ? 'Published' : 'Draft'}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-3 line-clamp-2">{post.excerpt}</p>

                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(post.createdAt)}
                    </div>
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {post.viewCount} views
                    </div>
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs">{post.category}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 ml-4">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleTogglePublished(post)}
                    className={post.published ? 'text-yellow-600' : 'text-green-600'}
                  >
                    {post.published ? 'Unpublish' : 'Publish'}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleEditPost(post)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDeletePost(post.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No blog posts found.</p>
          <Button onClick={handleAddPost} className="mt-4">
            <Plus className="h-4 w-4 mr-2" />
            Create Your First Post
          </Button>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center space-x-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                currentPage === index + 1
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}

      {/* Modal */}
      <BlogModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        post={editingPost}
        onSuccess={handleModalSuccess}
      />
    </div>
  )
}