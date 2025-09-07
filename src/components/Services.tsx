'use client'

import { motion } from 'framer-motion'
import { Truck, Package, Globe, Shield, BarChart3, Headphones } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: 'Transportation & Logistics',
      description: 'Comprehensive transportation solutions for fertilizers and agricultural products with real-time tracking and optimal route planning.',
      features: ['Fleet Management', 'Route Optimization', 'Real-time Tracking', 'Temperature Control']
    },
    {
      icon: Package,
      title: 'Warehousing & Storage',
      description: 'State-of-the-art warehousing facilities with climate control and inventory management systems for safe storage of agricultural products.',
      features: ['Climate Control', 'Inventory Management', 'Quality Assurance', 'Bulk Storage']
    },
    {
      icon: Globe,
      title: 'Customs Clearance',
      description: 'Expert customs clearance services for import/export of agricultural products with full compliance and documentation support.',
      features: ['Documentation', 'Compliance', 'Duty Optimization', 'Fast Processing']
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Comprehensive insurance and risk management solutions to protect your valuable agricultural cargo throughout the supply chain.',
      features: ['Cargo Insurance', 'Risk Assessment', 'Damage Prevention', 'Claims Support']
    },
    {
      icon: BarChart3,
      title: 'Supply Chain Analytics',
      description: 'Advanced analytics and reporting to optimize your supply chain performance and reduce costs while improving efficiency.',
      features: ['Performance Analytics', 'Cost Optimization', 'Trend Analysis', 'Custom Reports']
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock customer support with dedicated account managers to ensure smooth operations and quick issue resolution.',
      features: ['24/7 Availability', 'Dedicated Managers', 'Quick Response', 'Multi-channel Support']
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-4">
            Our Services
          </h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-6">
            Comprehensive Logistics Solutions for 
            <span className="text-primary-600"> Agricultural Success</span>
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From transportation to warehousing, customs clearance to supply chain analytics, we provide end-to-end logistics solutions tailored for the agricultural industry.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group"
            >
              <div className="flex items-center mb-6">
                <div className="relative">
                  <div className="bg-primary-100 p-3 rounded-lg group-hover:bg-primary-200 transition-colors">
                    <service.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  {/* Service Image Placeholder */}
                  <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
                </div>
              </div>
              
              <h4 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="space-y-2">
                <h5 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h5>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <button className="text-primary-600 font-medium hover:text-primary-700 transition-colors text-sm group-hover:underline">
                  Learn More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A streamlined, efficient process designed to deliver results while maintaining the highest standards of quality and safety.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'Understanding your specific logistics requirements and challenges.' },
              { step: '02', title: 'Planning', description: 'Developing customized logistics solutions tailored to your needs.' },
              { step: '03', title: 'Execution', description: 'Implementing the plan with precision and continuous monitoring.' },
              { step: '04', title: 'Optimization', description: 'Continuous improvement and optimization for better results.' },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative text-center"
              >
                <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{process.title}</h4>
                <p className="text-gray-600 text-sm">{process.description}</p>
                
                {/* Connector Line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -translate-x-8"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
