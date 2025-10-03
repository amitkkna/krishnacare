'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, User, ArrowLeft, Eye } from 'lucide-react'

interface BlogPost {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string
  imageUrl: string | null
  author: string
  category: string
  tags: string
  viewCount: number
  createdAt: string
  updatedAt: string
}

export default function BlogPostPage() {
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)
  const params = useParams()

  useEffect(() => {
    if (params.slug) {
      fetchPost(params.slug as string)
    }
  }, [params.slug])

  const fetchPost = async (slug: string) => {
    try {
      const response = await fetch(`/api/blog/${slug}`)
      if (response.ok) {
        const data = await response.json()
        setPost(data)
      } else if (response.status === 404) {
        setNotFound(true)
      }
    } catch (error) {
      console.error('Failed to fetch post:', error)
      setNotFound(true)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getTags = (tagsString: string) => {
    return tagsString ? tagsString.split(',').map(tag => tag.trim()) : []
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-1/4 mb-6"></div>
            <div className="h-12 bg-gray-300 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-8"></div>
            <div className="h-64 bg-gray-300 rounded mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-300 rounded"></div>
              <div className="h-4 bg-gray-300 rounded"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (notFound || !post) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Back to Blog */}
          <Link
            href="/blog"
            className="inline-flex items-center text-green-600 hover:text-green-700 mb-8 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Blog
          </Link>

          {/* Post Header */}
          <header className="mb-8">
            <div className="mb-4">
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            <div className="flex items-center space-x-6 text-gray-600 mb-6">
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{formatDate(post.createdAt)}</span>
              </div>
              <div className="flex items-center">
                <Eye className="h-5 w-5 mr-2" />
                <span>{post.viewCount} views</span>
              </div>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed">
              {post.excerpt}
            </p>
          </header>

          {/* Featured Image */}
          {post.imageUrl && (
            <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Post Content */}
          <article className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div
              className="prose prose-lg max-w-none prose-green"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          {/* Tags */}
          {post.tags && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {getTags(post.tags).map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="bg-green-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Partner with Krishna Care?
            </h3>
            <p className="text-gray-600 mb-6">
              Discover how our agricultural logistics solutions can transform your supply chain.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}