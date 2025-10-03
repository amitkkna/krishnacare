'use client'

import { motion } from 'framer-motion'
import { Truck, Package, Globe, Shield, BarChart3, Headphones, Sparkles } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: 'Transportation & Logistics',
      description: 'Comprehensive transportation solutions for fertilizers and agricultural products with real-time tracking and optimal route planning.',
      features: ['Fleet Management', 'Route Optimization', 'Real-time Tracking', 'Temperature Control'],
      gradient: 'from-luxury-gold-500 to-luxury-gold-600',
      bgGradient: 'from-luxury-gold-50 to-luxury-gold-100/50'
    },
    {
      icon: Package,
      title: 'Warehousing & Storage',
      description: 'State-of-the-art warehousing facilities with climate control and inventory management systems for safe storage of agricultural products.',
      features: ['Climate Control', 'Inventory Management', 'Quality Assurance', 'Bulk Storage'],
      gradient: 'from-luxury-purple-500 to-luxury-purple-600',
      bgGradient: 'from-luxury-purple-50 to-luxury-purple-100/50'
    },
    {
      icon: Globe,
      title: 'Customs Clearance',
      description: 'Expert customs clearance services for import/export of agricultural products with full compliance and documentation support.',
      features: ['Documentation', 'Compliance', 'Duty Optimization', 'Fast Processing'],
      gradient: 'from-luxury-teal-500 to-luxury-teal-600',
      bgGradient: 'from-luxury-teal-50 to-luxury-teal-100/50'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Comprehensive insurance and risk management solutions to protect your valuable agricultural cargo throughout the supply chain.',
      features: ['Cargo Insurance', 'Risk Assessment', 'Damage Prevention', 'Claims Support'],
      gradient: 'from-luxury-rose-500 to-luxury-rose-600',
      bgGradient: 'from-luxury-rose-50 to-luxury-rose-100/50'
    },
    {
      icon: BarChart3,
      title: 'Supply Chain Analytics',
      description: 'Advanced analytics and reporting to optimize your supply chain performance and reduce costs while improving efficiency.',
      features: ['Performance Analytics', 'Cost Optimization', 'Trend Analysis', 'Custom Reports'],
      gradient: 'from-accent-emerald-500 to-accent-emerald-600',
      bgGradient: 'from-accent-emerald-50 to-accent-emerald-100/50'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock customer support with dedicated account managers to ensure smooth operations and quick issue resolution.',
      features: ['24/7 Availability', 'Dedicated Managers', 'Quick Response', 'Multi-channel Support'],
      gradient: 'from-secondary-500 to-secondary-600',
      bgGradient: 'from-secondary-50 to-secondary-100/50'
    }
  ]

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-luxury-gold-200/30 to-luxury-purple-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-l from-luxury-teal-200/30 to-luxury-rose-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center glass-strong text-luxury-gold-700 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-glow-gold"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="h-5 w-5 mr-2 animate-pulse" />
            OUR PREMIUM SERVICES
          </motion.div>

          <h2 className="text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight">
            Comprehensive Warehousing & Logistics Solutions for
            <span className="text-gradient-royal block mt-2">Delivering Excellence</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From transportation to warehousing, customs clearance to supply chain analytics, we provide end-to-end logistics solutions tailored for the agricultural industry.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>

              <div className="relative card-luxury bg-white border border-gray-100 group-hover:border-white/50">
                <div className="flex items-start mb-6">
                  <div className="relative">
                    <motion.div
                      className={`bg-gradient-to-br ${service.gradient} p-4 rounded-2xl shadow-luxury group-hover:shadow-glow-gold transition-all duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <service.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <div className={`absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br ${service.gradient} rounded-full animate-ping opacity-50`}></div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gradient-royal transition-all duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                    <span className={`w-1 h-4 bg-gradient-to-b ${service.gradient} rounded-full mr-2`}></span>
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-600 group/item"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className={`w-2 h-2 bg-gradient-to-br ${service.gradient} rounded-full mr-3 group-hover/item:scale-125 transition-transform`}></div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <button className={`text-transparent bg-gradient-to-r ${service.gradient} bg-clip-text font-semibold hover:scale-105 transition-all text-sm flex items-center group-hover:gap-2 gap-1`}>
                    Learn More
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
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
          className="mt-32"
        >
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center glass text-luxury-purple-700 px-6 py-3 rounded-full text-sm font-semibold mb-8"
              whileHover={{ scale: 1.05 }}
            >
              OUR STREAMLINED APPROACH
            </motion.div>

            <h3 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
              Our <span className="text-gradient-gold">Process</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A streamlined, efficient process designed to deliver results while maintaining the highest standards of quality and safety.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'Understanding your specific logistics requirements and challenges.', color: 'from-luxury-gold-500 to-luxury-gold-600' },
              { step: '02', title: 'Planning', description: 'Developing customized logistics solutions tailored to your needs.', color: 'from-luxury-purple-500 to-luxury-purple-600' },
              { step: '03', title: 'Execution', description: 'Implementing the plan with precision and continuous monitoring.', color: 'from-luxury-teal-500 to-luxury-teal-600' },
              { step: '04', title: 'Optimization', description: 'Continuous improvement and optimization for better results.', color: 'from-luxury-rose-500 to-luxury-rose-600' },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="relative text-center group"
              >
                <motion.div
                  className={`bg-gradient-to-br ${process.color} text-white w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-luxury group-hover:shadow-glow-gold transition-all duration-300`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {process.step}
                </motion.div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gradient-royal transition-colors">
                  {process.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {process.description}
                </p>

                {/* Connector Line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent -translate-x-8 group-hover:from-luxury-gold-300 transition-colors"></div>
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