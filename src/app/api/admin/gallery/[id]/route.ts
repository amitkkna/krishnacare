import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || (session.user.role !== 'ADMIN' && session.user.role !== 'EDITOR')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { title, description, imageUrl, category, altText, isActive } = body

    const image = await prisma.galleryImage.update({
      where: { id: params.id },
      data: {
        title,
        description,
        imageUrl,
        category,
        altText,
        isActive
      }
    })

    return NextResponse.json(image)
  } catch (error) {
    console.error('Gallery update error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await prisma.galleryImage.delete({
      where: { id: params.id }
    })

    return NextResponse.json({ message: 'Image deleted successfully' })
  } catch (error) {
    console.error('Gallery delete error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}