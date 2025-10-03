import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seeding...')

  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 12)

  const admin = await prisma.user.upsert({
    where: { email: 'admin@krishnacare.com' },
    update: {},
    create: {
      email: 'admin@krishnacare.com',
      password: hashedPassword,
      name: 'Krishna Care Admin',
      role: 'ADMIN'
    }
  })
  console.log('✅ Admin user created:', admin.email)

  // Create sample gallery images
  const galleryImages = [
    {
      title: 'Modern Warehousing Facility',
      description: 'State-of-the-art storage facilities with climate control for optimal fertilizer preservation',
      imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
      category: 'Infrastructure',
      altText: 'Modern warehouse facility with loading docks'
    },
    {
      title: 'Agricultural Field Operations',
      description: 'Precision spraying operations ensuring optimal crop nutrition and protection',
      imageUrl: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=600&fit=crop',
      category: 'Agriculture',
      altText: 'Tractor spraying crops in agricultural field'
    },
    {
      title: 'Transportation Fleet',
      description: 'Modern transportation fleet ensuring safe and timely delivery across India',
      imageUrl: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=600&fit=crop',
      category: 'Logistics',
      altText: 'Fleet of delivery trucks'
    },
    {
      title: 'Quality Control Laboratory',
      description: 'Advanced laboratory facilities for quality testing and compliance assurance',
      imageUrl: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=600&fit=crop',
      category: 'Quality',
      altText: 'Scientists working in modern laboratory'
    },
    {
      title: 'Port Operations',
      description: 'Efficient port handling and customs clearance operations',
      imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
      category: 'Operations',
      altText: 'Cargo containers at shipping port'
    },
    {
      title: 'Farmer Community Partnership',
      description: 'Building strong relationships with farmers across agricultural communities',
      imageUrl: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800&h=600&fit=crop',
      category: 'Community',
      altText: 'Farmers working together in field'
    }
  ]

  for (const image of galleryImages) {
    const existing = await prisma.galleryImage.findFirst({
      where: { title: image.title }
    })

    if (!existing) {
      await prisma.galleryImage.create({
        data: image
      })
    }
  }
  console.log('✅ Gallery images created')

  // Create sample blog posts
  const blogPosts = [
    {
      title: 'The Future of Agricultural Logistics in India',
      slug: 'future-agricultural-logistics-india',
      content: `
        <h2>Transforming Agriculture Through Better Logistics</h2>
        <p>The agricultural sector in India is undergoing a significant transformation, with logistics playing a crucial role in ensuring food security and farmer prosperity. As the backbone of the agricultural supply chain, efficient logistics systems are essential for connecting farmers to markets and ensuring timely delivery of inputs and outputs.</p>

        <h3>Key Challenges in Current Agricultural Logistics</h3>
        <p>Traditional agricultural logistics in India face several challenges including inadequate infrastructure, lack of cold storage facilities, fragmented supply chains, and limited access to technology. These challenges result in significant post-harvest losses and reduced farmer incomes.</p>

        <h3>Technological Solutions Driving Change</h3>
        <p>Modern technology solutions such as GPS tracking, IoT-enabled monitoring, and digital platforms are revolutionizing agricultural logistics. These technologies enable real-time tracking of shipments, predictive maintenance of storage facilities, and better coordination between stakeholders.</p>

        <h3>Krishna Care's Role in Transformation</h3>
        <p>At Krishna Care, we are committed to leveraging cutting-edge technology and best practices to transform agricultural logistics. Our comprehensive solutions include modern warehousing, efficient transportation networks, and digital platforms that connect all stakeholders in the agricultural value chain.</p>
      `,
      excerpt: 'Exploring how modern logistics solutions are transforming India\'s agricultural sector and the role of technology in building efficient supply chains.',
      imageUrl: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1200&h=800&fit=crop',
      author: 'Krishna Care Team',
      category: 'Industry Insights',
      tags: 'agriculture, logistics, technology, supply chain',
      published: true
    },
    {
      title: 'Best Practices in Fertilizer Storage and Handling',
      slug: 'fertilizer-storage-handling-best-practices',
      content: `
        <h2>Ensuring Quality Through Proper Storage</h2>
        <p>Proper storage and handling of fertilizers is crucial for maintaining their effectiveness and ensuring safety. This comprehensive guide outlines the best practices for fertilizer storage that every stakeholder in the agricultural supply chain should follow.</p>

        <h3>Environmental Considerations</h3>
        <p>Temperature, humidity, and ventilation are critical factors in fertilizer storage. Maintaining optimal environmental conditions prevents degradation and ensures the fertilizer retains its nutritional value when it reaches the farmer.</p>

        <h3>Safety Protocols</h3>
        <p>Safety is paramount in fertilizer handling. This includes proper labeling, segregation of different fertilizer types, regular safety inspections, and training for all personnel involved in the storage and handling process.</p>

        <h3>Inventory Management</h3>
        <p>Efficient inventory management ensures first-in-first-out (FIFO) rotation, prevents overstocking, and maintains accurate records for traceability and compliance purposes.</p>
      `,
      excerpt: 'A comprehensive guide to fertilizer storage and handling best practices, covering safety protocols, environmental considerations, and inventory management.',
      imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=800&fit=crop',
      author: 'Technical Team',
      category: 'Best Practices',
      tags: 'fertilizer, storage, safety, handling',
      published: true
    },
    {
      title: 'Sustainable Supply Chain Management in Agriculture',
      slug: 'sustainable-supply-chain-agriculture',
      content: `
        <h2>Building Sustainable Agricultural Supply Chains</h2>
        <p>Sustainability in agricultural supply chains is not just an environmental imperative but also a business necessity. This article explores how sustainable practices can create value for all stakeholders while protecting our environment.</p>

        <h3>Environmental Impact Reduction</h3>
        <p>Implementing sustainable practices helps reduce carbon footprint, minimize waste, and conserve natural resources. This includes optimizing transportation routes, using eco-friendly packaging, and implementing energy-efficient storage solutions.</p>

        <h3>Economic Benefits</h3>
        <p>Sustainable supply chain practices often result in cost savings through improved efficiency, reduced waste, and better resource utilization. They also help companies comply with regulatory requirements and meet consumer expectations.</p>

        <h3>Social Responsibility</h3>
        <p>Sustainable supply chains support farmer livelihoods, promote fair trade practices, and contribute to rural development. They ensure that the benefits of agricultural development are shared equitably among all stakeholders.</p>
      `,
      excerpt: 'Understanding the importance of sustainability in agricultural supply chains and how it creates value for farmers, businesses, and the environment.',
      imageUrl: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=1200&h=800&fit=crop',
      author: 'Sustainability Team',
      category: 'Sustainability',
      tags: 'sustainability, supply chain, environment, social responsibility',
      published: true
    }
  ]

  for (const post of blogPosts) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: {},
      create: post
    })
  }
  console.log('✅ Blog posts created')

  console.log('🎉 Database seeding completed successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })