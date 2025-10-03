import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || (session.user.role !== 'ADMIN' && session.user.role !== 'EDITOR')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const [totalImages, totalPosts, totalContacts] = await Promise.all([
      prisma.galleryImage.count({ where: { isActive: true } }),
      prisma.blogPost.count({ where: { published: true } }),
      prisma.contact.count({ where: { status: 'PENDING' } })
    ])

    const recentViews = await prisma.blogPost.aggregate({
      _sum: { viewCount: true }
    })

    return NextResponse.json({
      totalImages,
      totalPosts,
      totalContacts,
      recentViews: recentViews._sum.viewCount || 0
    })
  } catch (error) {
    console.error('Stats fetch error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}