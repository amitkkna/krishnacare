'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Heart, Zap } from 'lucide-react'

export default function MissionVision() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-orange-50/30">
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
              Mission & Vision
            </span>
          </motion.h2>
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Mission & Vision Cards */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div 
              className="bg-gradient-to-br from-white via-orange-50/50 to-white p-8 rounded-3xl shadow-2xl border border-orange-100/50 relative overflow-hidden group hover:shadow-3xl transition-all duration-500"
              whileHover={{ y: -10 }}
            >
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  background: [
                    'radial-gradient(circle at 0% 0%, rgba(239, 119, 34, 0.05) 0%, transparent 50%)',
                    'radial-gradient(circle at 100% 100%, rgba(251, 146, 60, 0.05) 0%, transparent 50%)',
                    'radial-gradient(circle at 0% 0%, rgba(239, 119, 34, 0.05) 0%, transparent 50%)',
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <div className="relative z-10">
                <motion.div 
                  className="bg-gradient-to-r from-orange-500 to-red-500 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Target className="h-10 w-10 text-white" />
                </motion.div>
                
                <motion.h3 
                  className="text-3xl font-bold text-gray-800 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Our Mission
                </motion.h3>
                
                <motion.p 
                  className="text-lg text-gray-600 leading-relaxed mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  To provide exceptional clearing and forwarding services that enable seamless agricultural supply chains and contribute to India's food security.
                </motion.p>
                
                <motion.div 
                  className="space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  {[
                    "Efficient Agricultural Logistics",
                    "Reliable Supply Chain Solutions",
                    "Food Security Support",
                    "Farmer-Centric Services"
                  ].map((point, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full" />
                      <span className="text-gray-700 font-medium">{point}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div 
              className="bg-gradient-to-br from-white via-amber-50/50 to-white p-8 rounded-3xl shadow-2xl border border-amber-100/50 relative overflow-hidden group hover:shadow-3xl transition-all duration-500"
              whileHover={{ y: -10 }}
            >
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  background: [
                    'radial-gradient(circle at 100% 0%, rgba(251, 146, 60, 0.05) 0%, transparent 50%)',
                    'radial-gradient(circle at 0% 100%, rgba(239, 119, 34, 0.05) 0%, transparent 50%)',
                    'radial-gradient(circle at 100% 0%, rgba(251, 146, 60, 0.05) 0%, transparent 50%)',
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <div className="relative z-10">
                <motion.div 
                  className="bg-gradient-to-r from-amber-500 to-orange-500 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  animate={{ rotate: [360, 0] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Eye className="h-10 w-10 text-white" />
                </motion.div>
                
                <motion.h3 
                  className="text-3xl font-bold text-gray-800 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Our Vision
                </motion.h3>
                
                <motion.p 
                  className="text-lg text-gray-600 leading-relaxed mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  To be the most trusted and innovative logistics partner in India's agricultural sector, setting new standards of excellence.
                </motion.p>
                
                <motion.div 
                  className="space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  {[
                    "Leading Agricultural Innovation",
                    "National Supply Chain Excellence", 
                    "Trusted Logistics Partnership",
                    "Sustainable Agriculture Focus"
                  ].map((point, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" />
                      <span className="text-gray-700 font-medium">{point}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h3 
            className="text-3xl font-bold text-gray-800 mb-12"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our Core Values
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Compassionate Care",
                description: "Every interaction is guided by empathy and genuine care for patient well-being",
                color: "from-red-500 to-pink-500"
              },
              {
                icon: Zap,
                title: "Innovation Excellence",
                description: "Continuously advancing healthcare through cutting-edge technology and solutions",
                color: "from-orange-500 to-amber-500"
              },
              {
                icon: Target,
                title: "Quality Commitment",
                description: "Maintaining the highest standards of healthcare quality and patient safety",
                color: "from-amber-500 to-yellow-500"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.div 
                  className="bg-white p-8 rounded-3xl shadow-lg border border-orange-100/50 hover:shadow-2xl transition-all duration-300 h-full"
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <motion.div
                    className={`bg-gradient-to-r ${value.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  >
                    <value.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  
                  <h4 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}