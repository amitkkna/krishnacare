'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Lightbulb, Shield, Target } from 'lucide-react'

export default function CompanyStory() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-orange-50/30 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-orange-600 via-red-500 to-amber-600 bg-clip-text text-transparent">
              Our Story
            </span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Story Timeline */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h3 
                className="text-3xl font-bold text-gray-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Your Trusted Partner in Agricultural Logistics
              </motion.h3>
              
              <motion.p 
                className="text-lg text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Established in 1995, Krishna Care has emerged as one of India's most reliable clearing and forwarding agents, specializing in the agricultural sector. We serve as the critical link between manufacturers and markets, ensuring efficient movement of fertilizers and agricultural products across the country.
              </motion.p>
              
              <motion.p 
                className="text-lg text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Our deep understanding of agricultural supply chains, combined with our extensive network and technological capabilities, enables us to deliver exceptional logistics solutions that drive growth for our partners and contribute to India's agricultural success.
              </motion.p>
            </div>

            <motion.div 
              className="flex items-center gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More About Us
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Timeline Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="space-y-8">
              {[
                {
                  year: "2008",
                  title: "Foundation",
                  description: "Krishna Care was established with a mission to transform healthcare",
                  icon: Lightbulb,
                  gradient: "from-orange-500 to-red-500"
                },
                {
                  year: "2015",
                  title: "Expansion",
                  description: "Expanded operations across major Indian cities",
                  icon: Target,
                  gradient: "from-amber-500 to-orange-500"
                },
                {
                  year: "2020",
                  title: "Innovation",
                  description: "Launched digital healthcare solutions and telemedicine",
                  icon: Shield,
                  gradient: "from-red-500 to-pink-500"
                },
                {
                  year: "2024",
                  title: "Excellence",
                  description: "Achieved milestone of serving 1M+ patients nationwide",
                  icon: Target,
                  gradient: "from-orange-500 to-yellow-500"
                }
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-6 relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className={`bg-gradient-to-r ${milestone.gradient} p-4 rounded-2xl shadow-lg flex-shrink-0`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <milestone.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  
                  <div className="flex-1">
                    <motion.div 
                      className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-orange-500 hover:shadow-xl transition-shadow duration-300"
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                          {milestone.year}
                        </span>
                        <h4 className="text-xl font-bold text-gray-800">{milestone.title}</h4>
                      </div>
                      <p className="text-gray-600">{milestone.description}</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}