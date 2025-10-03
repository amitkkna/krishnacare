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

    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const category = searchParams.get('category')

    const skip = (page - 1) * limit

    const where = category ? { category, isActive: true } : { isActive: true }

    const [images, total] = await Promise.all([
      prisma.galleryImage.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit
      }),
      prisma.galleryImage.count({ where })
    ])

    return NextResponse.json({
      images,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    })
  } catch (error) {
    console.error('Gallery fetch error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || (session.user.role !== 'ADMIN' && session.user.role !== 'EDITOR')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { title, description, imageUrl, category, altText } = body

    const image = await prisma.galleryImage.create({
      data: {
        title,
        description,
        imageUrl,
        category,
        altText,
        isActive: true
      }
    })

    return NextResponse.json(image, { status: 201 })
  } catch (error) {
    console.error('Gallery create error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}