import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const limit = parseInt(searchParams.get('limit') || '20')
    const page = parseInt(searchParams.get('page') || '1')
    const skip = (page - 1) * limit

    const where = {
      isActive: true,
      ...(category && { category })
    }

    // Get total count for pagination
    const totalCount = await prisma.galleryImage.count({ where })

    // Get images with pagination
    const images = await prisma.galleryImage.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: limit,
      skip,
      select: {
        id: true,
        title: true,
        description: true,
        imageUrl: true,
        category: true,
        altText: true,
        createdAt: true
      }
    })

    // Get all unique categories for filtering
    const categories = await prisma.galleryImage.findMany({
      where: { isActive: true },
      select: { category: true },
      distinct: ['category']
    })

    const totalPages = Math.ceil(totalCount / limit)

    return NextResponse.json({
      images,
      pagination: {
        currentPage: page,
        totalPages,
        totalCount,
        hasMore: page < totalPages
      },
      categories: categories.map(c => c.category)
    })
  } catch (error) {
    console.error('Gallery fetch error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}