'use client'

import { motion } from 'framer-motion'

const Partners = () => {
  // Partner companies - based on the reference websites provided
  const partners = [
    {
      name: 'FMC Corporation',
      description: 'Leading agricultural sciences company',
      logo: 'FMC',
      category: 'Agricultural Sciences'
    },
    {
      name: 'Chambal Fertilizers',
      description: 'Major fertilizer manufacturer in India',
      logo: 'CFCL',
      category: 'Fertilizer Manufacturing'
    },
    {
      name: 'Rallis India',
      description: 'Crop protection and nutrition specialist',
      logo: 'RALLIS',
      category: 'Crop Protection'
    },
    {
      name: 'Coromandel International',
      description: 'Leading fertilizer and crop protection company',
      logo: 'CORO',
      category: 'Fertilizer & Crop Protection'
    },
    {
      name: 'Tata Chemicals',
      description: 'Major chemical and fertilizer producer',
      logo: 'TATA',
      category: 'Chemicals & Fertilizers'
    },
    {
      name: 'IFFCO',
      description: 'World&apos;s largest fertilizer cooperative',
      logo: 'IFFCO',
      category: 'Fertilizer Cooperative'
    },
    {
      name: 'Krishak Bharati',
      description: 'Leading agricultural input company',
      logo: 'KRIBHCO',
      category: 'Agricultural Inputs'
    },
    {
      name: 'UPL Limited',
      description: 'Global provider of sustainable agriculture solutions',
      logo: 'UPL',
      category: 'Agricultural Solutions'
    }
  ]

  const testimonials = [
    {
      quote: "Krishna Care has been instrumental in streamlining our fertilizer distribution across North India. Their reliability and expertise have made them an invaluable partner.",
      author: "Rajesh Kumar",
      position: "Supply Chain Director",
      company: "Leading Fertilizer Company"
    },
    {
      quote: "The team at Krishna Care understands the agricultural sector like no other. Their logistics solutions have significantly improved our operational efficiency.",
      author: "Priya Sharma",
      position: "Operations Manager", 
      company: "Agricultural Sciences Corp"
    },
    {
      quote: "With Krishna Care handling our clearing and forwarding, we've seen remarkable improvements in delivery times and cost optimization.",
      author: "Amit Patel",
      position: "Logistics Head",
      company: "Crop Protection Ltd"
    }
  ]

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-4">
            Our Partners
          </h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-6">
            Trusted by Leading 
            <span className="text-primary-600"> Agricultural Companies</span>
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We proudly serve some of India's most respected agricultural and fertilizer companies, helping them achieve their logistics goals with precision and reliability.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 mb-20">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-center">
                <div className="bg-gradient-to-br from-primary-100 to-secondary-100 w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                  <span className="text-lg font-bold text-primary-700">{partner.logo}</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{partner.name}</h4>
                <p className="text-sm text-gray-600 mb-2">{partner.description}</p>
                <span className="inline-block bg-primary-50 text-primary-700 text-xs px-2 py-1 rounded-full">
                  {partner.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">What Our Partners Say</h3>
            <p className="text-lg text-gray-600">
              Hear from the leaders who trust Krishna Care with their logistics needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-md"
              >
                <div className="mb-4">
                  <div className="flex text-primary-500 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">"{testimonial.quote}"</p>
                </div>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                  <p className="text-sm text-primary-600">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partnership Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Partnership Benefits</h3>
            <p className="text-lg text-gray-600">
              Why leading companies choose Krishna Care as their logistics partner.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Strategic Locations',
                description: 'Warehouses and offices strategically located across key agricultural hubs in India.',
                color: 'primary'
              },
              {
                title: 'Technology Integration',
                description: 'Seamless integration with your existing systems for real-time visibility and control.',
                color: 'secondary'
              },
              {
                title: 'Scalable Solutions',
                description: 'Flexible services that grow with your business needs and seasonal demands.',
                color: 'green'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className={`text-center p-8 rounded-xl bg-${benefit.color}-50 border border-${benefit.color}-100`}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${benefit.color}-600 flex items-center justify-center`}>
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Partners
