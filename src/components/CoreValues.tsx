'use client'

import { motion } from 'framer-motion'
import { Shield, Heart, Award, Lightbulb } from 'lucide-react'

const CoreValues = () => {
  const values = [
    {
      icon: Shield,
      title: "Reliability",
      description: "Consistent, dependable service you can count on, every time.",
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-50",
      iconBg: "bg-green-100",
      delay: 0.1
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Transparent, honest business practices that build lasting trust.",
      color: "from-blue-400 to-indigo-500",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      delay: 0.2
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Continuous improvement and superior quality in all our services.",
      color: "from-green-400 to-teal-500",
      bgColor: "bg-green-50",
      iconBg: "bg-green-100",
      delay: 0.3
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Embracing technology and new methods to serve you better.",
      color: "from-purple-400 to-violet-500",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100",
      delay: 0.4
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-green-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-l from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-orange-100/20 to-yellow-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Elegant Header */}
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
            className="inline-flex items-center bg-gradient-to-r from-green-100 to-purple-100 text-gray-700 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg backdrop-blur-sm border border-green-200/50"
          >
            <Award className="h-5 w-5 mr-2 text-green-600" />
            <span className="bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent">
              Our Core Values
            </span>
          </motion.div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Our Core Values
            </span>
          </h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            These fundamental principles guide everything we do and define who we are as a{" "}
            <span className="font-semibold text-gray-800">company.</span>
          </motion.p>
        </motion.div>

        {/* Premium Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                delay: value.delay, 
                duration: 0.8, 
                ease: "easeOut",
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Premium Card */}
              <div className={`relative h-full p-8 rounded-3xl ${value.bgColor}/50 backdrop-blur-sm border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:border-white/80`}>
                {/* Elegant Background Pattern */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${value.color} opacity-10 rounded-full blur-2xl`}></div>
                  <div className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr ${value.color} opacity-10 rounded-full blur-xl`}></div>
                </div>

                {/* Premium Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    delay: value.delay + 0.2, 
                    duration: 0.8,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                  className={`inline-flex items-center justify-center w-20 h-20 ${value.iconBg} rounded-2xl mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 relative z-10`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300`}></div>
                  <value.icon className={`h-10 w-10 bg-gradient-to-br ${value.color} bg-clip-text text-transparent relative z-10`} />
                </motion.div>

                {/* Premium Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: value.delay + 0.3, duration: 0.6 }}
                  className="relative z-10"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {value.description}
                  </p>
                </motion.div>

                {/* Premium Accent Line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: value.delay + 0.5, duration: 0.8 }}
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${value.color} rounded-full`}
                />

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Premium Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-50 to-white p-12 shadow-2xl border border-gray-100/50 backdrop-blur-sm">
            {/* Elegant Background Pattern */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-br from-green-200 to-blue-200 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-gradient-to-tl from-purple-200 to-pink-200 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10">
              <motion.h3
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
              >
                Committed to{" "}
                <span className="bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent">
                  Excellence
                </span>
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="text-lg text-gray-600 max-w-3xl mx-auto"
              >
                At Krishna Care, these values aren't just words on a wall – they're the foundation of every decision we make and every service we provide.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CoreValues
