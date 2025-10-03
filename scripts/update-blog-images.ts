import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function updateBlogImages() {
  console.log('Updating blog post images...')

  const updates = [
    {
      slug: 'sustainable-agriculture-future-farming',
      imageUrl: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=400&fit=crop'
    },
    {
      slug: 'digital-transformation-agricultural-supply-chain',
      imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop'
    },
    {
      slug: 'krishna-care-expands-operations-five-new-states',
      imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=400&fit=crop'
    }
  ]

  for (const update of updates) {
    try {
      await prisma.blogPost.update({
        where: { slug: update.slug },
        data: { imageUrl: update.imageUrl }
      })
      console.log(`Updated image for: ${update.slug}`)
    } catch (error) {
      console.error(`Error updating ${update.slug}:`, error)
    }
  }

  console.log('Blog image updates completed!')
}

updateBlogImages()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })