'use client'

import { motion } from 'framer-motion'
import { Play, ArrowRight, Award, Shield, Globe } from 'lucide-react'

const BannerSection = () => {
  return (
    <section className="relative py-20 overflow-hidden" style={{
      backgroundImage: 'url(/images/banner/agricultural-field-aerial.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      // Fallback gradient when image is not available
      background: 'linear-gradient(135deg, #16a34a 0%, #1e40af 50%, #059669 100%)'
    }}>
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Additional Agricultural Pattern Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-400 rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-overlay filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20"
              >
                <Award className="h-4 w-4 mr-2" />
                Award-Winning Logistics Excellence
              </motion.div>
              
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Empowering India's 
                <br />
                <span className="text-green-300">Agricultural Future</span>
              </h2>
              
              <p className="text-xl text-gray-100 leading-relaxed">
                Through innovative logistics solutions and unwavering commitment to excellence, 
                Krishna Care is transforming how agricultural products move across India, 
                ensuring food security and farmer prosperity.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 font-semibold flex items-center justify-center group">
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Watch Our Story
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold flex items-center justify-center group">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image Placeholder */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="aspect-[4/3] bg-gradient-to-br from-white/20 to-transparent rounded-xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="bg-white/20 backdrop-blur-sm p-6 rounded-full mx-auto mb-4 w-24 h-24 flex items-center justify-center">
                      <Globe className="h-12 w-12" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Global Operations</h4>
                    <p className="text-white/80 text-sm">Professional image placeholder</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary-100 p-2 rounded-lg">
                    <Shield className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-900">100%</p>
                    <p className="text-sm text-gray-600">Secure</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Award className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-900">ISO</p>
                    <p className="text-sm text-gray-600">Certified</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Statistics Row */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '28', label: 'States Covered', suffix: '' },
              { number: '1000', label: 'Tons Handled Daily', suffix: '+' },
              { number: '50', label: 'Warehouse Locations', suffix: '+' },
              { number: '99.9', label: 'Customer Satisfaction', suffix: '%' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center text-white"
              >
                <div className="text-3xl lg:text-4xl font-bold text-green-300 mb-2">
                  {stat.number}
                  <span className="text-white">{stat.suffix}</span>
                </div>
                <p className="text-gray-200 text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BannerSection
