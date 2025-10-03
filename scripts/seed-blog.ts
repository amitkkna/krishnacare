import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function seedBlog() {
  console.log('Seeding blog posts...')

  const blogPosts = [
    {
      title: 'Sustainable Agriculture: The Future of Farming',
      slug: 'sustainable-agriculture-future-farming',
      excerpt: 'Discover how Krishna Care is leading the way in sustainable farming practices that protect our environment while ensuring food security for future generations.',
      content: `
# Sustainable Agriculture: The Future of Farming

At Krishna Care, we believe that the future of agriculture lies in sustainable practices that harmonize productivity with environmental stewardship. For over 25 years, we have been at the forefront of promoting sustainable farming techniques that not only increase crop yields but also protect our precious natural resources.

## What is Sustainable Agriculture?

Sustainable agriculture is a farming approach that aims to meet current food needs while preserving the environment and resources for future generations. It encompasses three main pillars:

1. **Environmental Health**: Protecting soil, water, and biodiversity
2. **Economic Profitability**: Ensuring farmers can make a living
3. **Social Equity**: Supporting farming communities

## Our Sustainable Practices

### Precision Agriculture Technology
We utilize advanced GPS-guided equipment and soil sensors to optimize fertilizer and water usage, reducing waste and environmental impact.

### Integrated Pest Management
Our IPM approach combines biological, cultural, and chemical methods to control pests with minimal environmental impact.

### Soil Health Management
We promote crop rotation, cover cropping, and organic matter enhancement to maintain soil fertility naturally.

## Benefits for Farmers

- **Reduced Input Costs**: Efficient use of fertilizers and pesticides
- **Improved Soil Health**: Long-term fertility and structure
- **Higher Market Value**: Premium prices for sustainably grown crops
- **Risk Management**: Diversified farming systems reduce vulnerability

## Looking Forward

The agricultural industry is at a turning point. With growing global population and climate change challenges, sustainable farming is not just an option—it's a necessity. Krishna Care continues to invest in research and development to bring innovative, sustainable solutions to farmers across India.

*Join us in building a sustainable future for agriculture. Contact Krishna Care today to learn how we can help transform your farming practices.*
      `,
      imageUrl: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=400&fit=crop',
      author: 'Dr. Rajesh Kumar',
      category: 'Agriculture',
      tags: 'sustainability, farming, environment, innovation',
      published: true
    },
    {
      title: 'Digital Transformation in Agricultural Supply Chain',
      slug: 'digital-transformation-agricultural-supply-chain',
      excerpt: 'How Krishna Care is revolutionizing agricultural logistics through cutting-edge technology and digital solutions that connect farmers to markets more efficiently.',
      content: `
# Digital Transformation in Agricultural Supply Chain

The agricultural supply chain is undergoing a digital revolution, and Krishna Care is leading this transformation in India. Our innovative approach combines technology with traditional farming wisdom to create more efficient, transparent, and profitable supply chains.

## The Challenge

Traditional agricultural supply chains face numerous challenges:
- Information gaps between farmers and markets
- Inefficient logistics and transportation
- Post-harvest losses due to poor handling
- Limited access to real-time market prices

## Our Digital Solutions

### Real-Time Market Intelligence
Our platform provides farmers with up-to-date market prices, demand forecasts, and quality requirements, enabling better decision-making.

### Blockchain-Based Traceability
We implement blockchain technology to ensure complete transparency from farm to consumer, building trust and adding value to agricultural products.

### IoT-Enabled Monitoring
Smart sensors monitor crop conditions, storage environments, and transportation parameters, ensuring quality preservation throughout the supply chain.

### Mobile-First Approach
Our user-friendly mobile apps allow farmers to access services, track shipments, and receive payments directly on their smartphones.

## Impact on Farmers

Since implementing our digital solutions:
- **30% reduction** in post-harvest losses
- **25% increase** in farmer income
- **50% faster** payment processing
- **Enhanced quality** control and compliance

## Future Innovations

We're continuously working on:
- AI-powered crop prediction models
- Drone-based monitoring systems
- Automated quality assessment tools
- Direct-to-consumer platforms

*Experience the future of agricultural supply chain with Krishna Care. Contact us to learn how digital transformation can benefit your farming operations.*
      `,
      imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop',
      author: 'Priya Sharma',
      category: 'Technology',
      tags: 'digital, technology, supply chain, innovation',
      published: true
    },
    {
      title: 'Krishna Care Expands Operations to Five New States',
      slug: 'krishna-care-expands-operations-five-new-states',
      excerpt: 'We are excited to announce our expansion into five new states, bringing our comprehensive agricultural solutions to more farmers across India.',
      content: `
# Krishna Care Expands Operations to Five New States

We are thrilled to announce a major milestone in Krishna Care's journey – the expansion of our operations to five new states across India. This strategic growth enables us to serve more farming communities and strengthen India's agricultural ecosystem.

## New Service Areas

Our expanded operations now cover:
- **Rajasthan**: Focusing on arid and semi-arid farming solutions
- **Odisha**: Supporting rice cultivation and coastal agriculture
- **Kerala**: Specializing in spice and plantation crops
- **Himachal Pradesh**: Mountain agriculture and fruit cultivation
- **Assam**: Tea cultivation and flood-resistant farming

## What This Means

### For Farmers
- Access to Krishna Care's proven agricultural solutions
- Local support teams with regional expertise
- Customized services for local crop requirements
- Competitive pricing and flexible payment terms

### For the Industry
- Strengthened agricultural supply chains
- Improved food security and quality standards
- Enhanced market connectivity for remote farming areas
- Sustainable agricultural development

## Our Commitment

With this expansion, Krishna Care reaffirms our commitment to:
- Supporting sustainable farming practices
- Empowering farming communities
- Driving agricultural innovation
- Building resilient food systems

## Local Partnerships

We believe in working closely with local communities, agricultural universities, and government agencies to ensure our solutions are tailored to regional needs and conditions.

## Looking Ahead

This expansion is just the beginning. We have plans to further extend our reach to additional states and explore international markets, always maintaining our core values of quality, sustainability, and farmer-centricity.

*Welcome to our new farming partners! Contact your local Krishna Care office to learn about our services and how we can support your agricultural success.*
      `,
      imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=400&fit=crop',
      author: 'Krishna Care Team',
      category: 'Company Updates',
      tags: 'expansion, growth, farmers, states',
      published: true
    }
  ]

  for (const post of blogPosts) {
    try {
      await prisma.blogPost.create({
        data: post
      })
      console.log(`Created blog post: ${post.title}`)
    } catch (error) {
      console.error(`Error creating blog post ${post.title}:`, error)
    }
  }

  console.log('Blog seeding completed!')
}

seedBlog()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })