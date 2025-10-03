import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function seedContacts() {
  console.log('Seeding contact submissions...')

  const contacts = [
    {
      name: 'Rajesh Patel',
      email: 'rajesh.patel@example.com',
      phone: '+91 98765 43210',
      company: 'Patel Farms Ltd',
      subject: 'Fertilizer Distribution Partnership',
      message: 'I am interested in becoming a distribution partner for Krishna Care in Gujarat. We have been in the agricultural business for 15 years and have extensive network in Gujarat region. Please let me know the requirements and process.',
      status: 'PENDING' as const
    },
    {
      name: 'Priya Sharma',
      email: 'priya.sharma@agritech.com',
      phone: '+91 87654 32109',
      company: 'AgriTech Solutions',
      subject: 'Bulk Order Inquiry',
      message: 'We need to place a bulk order for organic fertilizers for our client farms in Punjab. Can you provide pricing for 500 tonnes of organic compost and NPK fertilizers? Timeline required is within 2 months.',
      status: 'READ' as const
    },
    {
      name: 'Amit Kumar',
      email: 'amit.kumar@krishnafarms.in',
      phone: '+91 76543 21098',
      company: 'Krishna Farms',
      subject: 'Warehouse Services',
      message: 'We are looking for warehouse and storage solutions for our agricultural products in Delhi NCR region. What are your warehouse capacities and pricing structure?',
      status: 'RESPONDED' as const
    },
    {
      name: 'Sita Devi',
      email: 'sitadevi@farmers.org',
      phone: null,
      company: 'Farmers Collective',
      subject: 'Training Programs',
      message: 'Do you provide training programs for farmers on modern agricultural practices and fertilizer usage? We represent a collective of 200+ farmers in Bihar.',
      status: 'PENDING' as const
    },
    {
      name: 'Vikram Singh',
      email: 'vikram@agriexports.com',
      phone: '+91 65432 10987',
      company: 'Agri Exports India',
      subject: 'Quality Certification',
      message: 'We need information about your quality certifications and compliance standards for export purposes. Can you share your ISO certifications and quality control processes?',
      status: 'CLOSED' as const
    }
  ]

  for (const contact of contacts) {
    try {
      await prisma.contact.create({
        data: contact
      })
      console.log(`Created contact: ${contact.name}`)
    } catch (error) {
      console.error(`Error creating contact ${contact.name}:`, error)
    }
  }

  console.log('Contact seeding completed!')
}

seedContacts()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })