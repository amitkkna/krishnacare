'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'
import Link from 'next/link'

const About = () => {

  return (
    <section className="py-24 bg-gradient-to-b from-white via-orange-50/30 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-orange-200/20 to-amber-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-l from-green-200/20 to-orange-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <Star className="h-5 w-5 mr-2" />
            KRISHNA CARE OVERVIEW
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Delivering Excellence in{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">
              Agricultural Logistics
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Since 1995, we have been India's trusted partner in agricultural supply chains, 
            connecting manufacturers with markets through reliable clearing and forwarding services.
          </p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <div className="text-center group">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-orange-100/50 hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-r from-orange-400 to-amber-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">25+</h3>
              <p className="text-gray-600 font-medium">Years of Experience</p>
            </div>
          </div>
          
          <div className="text-center group">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-orange-100/50 hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-r from-green-400 to-emerald-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">200+</h3>
              <p className="text-gray-600 font-medium">Happy Clients</p>
            </div>
          </div>
          
          <div className="text-center group">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-orange-100/50 hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-r from-amber-400 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">500+</h3>
              <p className="text-gray-600 font-medium">Projects Completed</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            className="bg-gradient-to-r from-orange-500 to-amber-500 p-12 rounded-3xl text-white relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="absolute inset-0 opacity-20"
              animate={{
                background: [
                  'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.2) 0%, transparent 50%)',
                  'radial-gradient(circle at 80% 80%, rgba(255,255,255,0.2) 0%, transparent 50%)',
                  'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.2) 0%, transparent 50%)',
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Want to Learn More About Us?</h3>
              <p className="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
                Discover our complete story, mission, vision, and meet our leadership team 
                that has been driving agricultural logistics excellence for over 25 years.
              </p>
              
              <Link href="/about">
                <motion.button
                  className="bg-white text-orange-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-orange-50 transition-all duration-300 flex items-center gap-3 mx-auto group shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Our Story
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
