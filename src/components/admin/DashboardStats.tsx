'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Images, FileText, MessageSquare, Eye } from 'lucide-react'

interface Stats {
  totalImages: number
  totalPosts: number
  totalContacts: number
  recentViews: number
}

export default function DashboardStats() {
  const [stats, setStats] = useState<Stats>({
    totalImages: 0,
    totalPosts: 0,
    totalContacts: 0,
    recentViews: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/admin/stats')
      if (response.ok) {
        const data = await response.json()
        setStats(data)
      }
    } catch (error) {
      console.error('Failed to fetch stats:', error)
    } finally {
      setLoading(false)
    }
  }

  const statCards = [
    {
      title: 'Gallery Images',
      value: stats.totalImages,
      icon: Images,
      description: 'Total images in gallery'
    },
    {
      title: 'Blog Posts',
      value: stats.totalPosts,
      icon: FileText,
      description: 'Published blog posts'
    },
    {
      title: 'Contact Messages',
      value: stats.totalContacts,
      icon: MessageSquare,
      description: 'Pending messages'
    },
    {
      title: 'Recent Views',
      value: stats.recentViews,
      icon: Eye,
      description: 'Views this month'
    }
  ]

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardHeader className="pb-2">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </CardHeader>
            <CardContent>
              <div className="h-8 bg-gray-200 rounded w-1/2 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-full"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {statCards.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}