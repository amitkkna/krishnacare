'use client'

import { motion } from 'framer-motion'
import { Users, Award, Clock, Briefcase, Target, Eye, CheckCircle } from 'lucide-react'

const About = () => {
  const stats = [
    {
      icon: Clock,
      value: "25+",
      label: "Years of Experience",
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-50"
    },
    {
      icon: Users,
      value: "200+",
      label: "Happy Clients",
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Briefcase,
      value: "500+",
      label: "Projects Completed",
      color: "from-purple-400 to-violet-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: Award,
      value: "15+",
      label: "Industry Awards",
      color: "from-orange-400 to-red-500",
      bgColor: "bg-orange-50"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-green-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-l from-orange-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Premium Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center bg-gradient-to-r from-green-100 to-blue-100 text-green-700 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg backdrop-blur-sm border border-green-200/50"
          >
            <Briefcase className="h-5 w-5 mr-2" />
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              ABOUT KRISHNA CARE
            </span>
          </motion.div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Your Trusted Partner in{" "}
            <span className="bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
              Agricultural Logistics
            </span>
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Company Description */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/60 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-green-100/30 to-transparent rounded-full blur-2xl"></div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-lg text-gray-700 leading-relaxed mb-6 relative z-10"
              >
                Established in <span className="font-semibold text-green-600">1995</span>, Krishna Care has emerged as one of India's most reliable clearing and forwarding agents, specializing in the <span className="font-semibold text-blue-600">agricultural sector</span>. We serve as the critical link between manufacturers and markets, ensuring efficient movement of fertilizers and agricultural products across the country.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-lg text-gray-700 leading-relaxed relative z-10"
              >
                Our deep understanding of agricultural supply chains, combined with our extensive network and technological capabilities, enables us to deliver exceptional logistics solutions that drive growth for our partners and contribute to India's agricultural success.
              </motion.p>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 shadow-lg border border-green-100/50 relative overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-emerald-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.6, type: "spring", bounce: 0.5 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-6 relative z-10"
                >
                  <Target className="h-8 w-8 text-green-600" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed relative z-10">
                  To provide exceptional clearing and forwarding services that enable seamless agricultural supply chains and contribute to India's food security.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 shadow-lg border border-blue-100/50 relative overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.8, type: "spring", bounce: 0.5 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6 relative z-10"
                >
                  <Eye className="h-8 w-8 text-blue-600" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed relative z-10">
                  To be the most trusted and innovative logistics partner in India's agricultural sector, setting new standards of excellence.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Statistics */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  delay: 0.2 + index * 0.1, 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <div className={`h-full ${stat.bgColor}/50 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/60 text-center relative overflow-hidden group-hover:shadow-2xl transition-all duration-500`}>
                  {/* Premium Background Pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${stat.color} opacity-10 rounded-full blur-2xl`}></div>
                  </div>

                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      delay: 0.3 + index * 0.1, 
                      duration: 0.8,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 10,
                      transition: { duration: 0.3 }
                    }}
                    className={`inline-flex items-center justify-center w-16 h-16 ${stat.bgColor} rounded-2xl mb-6 shadow-lg mx-auto relative z-10`}
                  >
                    <stat.icon className={`h-8 w-8 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`} />
                  </motion.div>

                  {/* Counter Animation */}
                  <motion.h4 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      delay: 0.5 + index * 0.1, 
                      duration: 0.6,
                      type: "spring"
                    }}
                    className="text-4xl font-bold text-gray-900 mb-3 relative z-10"
                  >
                    {stat.value}
                  </motion.h4>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                    className="text-gray-600 font-medium text-sm leading-tight relative z-10"
                  >
                    {stat.label}
                  </motion.p>

                  {/* Premium Accent Line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.8 }}
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${stat.color} rounded-full`}
                  />

                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
