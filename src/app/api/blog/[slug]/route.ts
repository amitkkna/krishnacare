import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const post = await prisma.blogPost.findUnique({
      where: {
        slug: params.slug,
        published: true
      }
    })

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 })
    }

    // Increment view count
    await prisma.blogPost.update({
      where: { id: post.id },
      data: { viewCount: { increment: 1 } }
    })

    return NextResponse.json(post)
  } catch (error) {
    console.error('Blog post fetch error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}