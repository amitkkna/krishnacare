'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, User, Eye, ArrowRight, Filter, Search } from 'lucide-react'
import Image from 'next/image'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  category: 'agriculture' | 'pharmaceutical' | 'logistics' | 'industry'
  image: string
  views: number
  featured: boolean
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Agricultural Supply Chain in India',
    excerpt: 'Exploring how technology and innovation are reshaping the agricultural logistics landscape.',
    content: 'Full content here...',
    author: 'Krishna Kumar Agrawal',
    date: '2024-12-15',
    category: 'agriculture',
    image: '/images/blog/agriculture-supply-chain.jpg',
    views: 1250,
    featured: true
  },
  {
    id: '2',
    title: 'Pharmaceutical Logistics: Ensuring Medicine Reaches Every Corner',
    excerpt: 'Understanding the critical role of C&F agents in pharmaceutical distribution.',
    content: 'Full content here...',
    author: 'Dr. Manoj Kumar Agrawal',
    date: '2024-12-10',
    category: 'pharmaceutical',
    image: '/images/blog/pharma-logistics.jpg',
    views: 890,
    featured: true
  },
  {
    id: '3',
    title: 'Fertilizer Distribution: From Port to Farm',
    excerpt: 'A comprehensive look at the fertilizer supply chain and our role in it.',
    content: 'Full content here...',
    author: 'Krishna Kumar Agrawal',
    date: '2024-12-05',
    category: 'agriculture',
    image: '/images/blog/fertilizer-distribution.jpg',
    views: 675,
    featured: false
  },
  {
    id: '4',
    title: 'Digital Transformation in Logistics',
    excerpt: 'How Krishna Care is leveraging technology for better efficiency.',
    content: 'Full content here...',
    author: 'Tech Team',
    date: '2024-11-28',
    category: 'logistics',
    image: '/images/blog/digital-transformation.jpg',
    views: 540,
    featured: false
  },
  {
    id: '5',
    title: 'Paint Industry Logistics: Color Your Success',
    excerpt: 'Specialized handling and distribution of paint and coating products.',
    content: 'Full content here...',
    author: 'Operations Team',
    date: '2024-11-20',
    category: 'industry',
    image: '/images/blog/paint-industry.jpg',
    views: 425,
    featured: false
  },
  {
    id: '6',
    title: 'Sustainable Logistics Practices',
    excerpt: 'Our commitment to environmental responsibility in supply chain management.',
    content: 'Full content here...',
    author: 'Dr. Manoj Kumar Agrawal',
    date: '2024-11-15',
    category: 'logistics',
    image: '/images/blog/sustainable-logistics.jpg',
    views: 380,
    featured: false
  }
]

const categories = [
  { id: 'all', label: 'All Posts', color: 'bg-gray-600' },
  { id: 'agriculture', label: 'Agriculture', color: 'bg-green-600' },
  { id: 'pharmaceutical', label: 'Pharmaceutical', color: 'bg-blue-600' },
  { id: 'logistics', label: 'Logistics', color: 'bg-orange-600' },
  { id: 'industry', label: 'Industry', color: 'bg-purple-600' }
]

export default function BlogGallery() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPosts = filteredPosts.filter(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.id === category)
    return cat?.color || 'bg-gray-600'
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Latest Updates & Insights
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Stay informed with the latest trends, insights, and updates from the world of logistics and supply chain management
          </motion.p>
        </div>

        {/* Filters and Search */}
        <div className="mb-8 flex flex-col lg:flex-row gap-4 justify-between items-center">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? `${category.color} text-white shadow-lg`
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Filter className="w-4 h-4 inline mr-2" />
                {category.label}
              </motion.button>
            ))}
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Featured Articles</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getCategoryColor(post.category)}`}>
                        {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3 hover:text-green-600 transition-colors cursor-pointer">
                      {post.title}
                    </h4>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                      </div>
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {post.views}
                      </span>
                    </div>
                    <button 
                      onClick={() => setSelectedPost(post)}
                      className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getCategoryColor(post.category)}`}>
                    {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h4 className="text-lg font-bold text-gray-900 mb-2 hover:text-green-600 transition-colors cursor-pointer line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-gray-600 mb-3 text-sm line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {post.views}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                  <button 
                    onClick={() => setSelectedPost(post)}
                    className="text-green-600 hover:text-green-700 text-sm font-medium transition-colors"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Blog Post Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium text-white ${getCategoryColor(selectedPost.category)}`}>
                    {selectedPost.category.charAt(0).toUpperCase() + selectedPost.category.slice(1)}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-4 right-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-opacity-30 transition-colors"
                >
                  ×
                </button>
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedPost.title}</h2>
                <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {selectedPost.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(selectedPost.date).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    {selectedPost.views} views
                  </span>
                </div>
                <div className="prose max-w-none">
                  <p className="text-lg text-gray-700 leading-relaxed">{selectedPost.excerpt}</p>
                  <p className="text-gray-600 mt-4">
                    {selectedPost.content} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
