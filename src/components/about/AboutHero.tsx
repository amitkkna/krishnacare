'use client'

import { motion } from 'framer-motion'
import { Award, Users, Heart, TrendingUp } from 'lucide-react'

export default function AboutHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background with Light Orange Theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-300 via-amber-200 to-orange-400">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(255, 154, 0, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(255, 193, 7, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 50%, rgba(255, 138, 101, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(255, 154, 0, 0.3) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-800 mb-6"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            About{" "}
            <motion.span 
              className="bg-gradient-to-r from-orange-600 via-amber-500 to-orange-700 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Krishna Care
            </motion.span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Pioneering C & F excellence across India with unwavering commitment to quality,
            innovation, and compassionate care that transforms lives and builds better communities.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { icon: Users, value: "500+", label: "Healthcare Partners", color: "from-orange-400 to-amber-400" },
            { icon: Award, value: "15+", label: "Years Excellence", color: "from-amber-400 to-yellow-400" },
            { icon: Heart, value: "1M+", label: "Lives Impacted", color: "from-rose-400 to-pink-400" },
            { icon: TrendingUp, value: "98%", label: "Client Satisfaction", color: "from-orange-500 to-red-400" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/90 backdrop-blur-lg p-6 rounded-3xl border border-orange-200/50 hover:bg-white transition-all duration-300 group shadow-lg hover:shadow-xl"
              initial={{ opacity: 0, y: 30, rotateY: 45 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ 
                delay: 1 + index * 0.15, 
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
              }}
            >
              <motion.div
                className={`bg-gradient-to-r ${stat.color} p-3 rounded-full mb-4 mx-auto w-fit group-hover:scale-110 transition-transform duration-300`}
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity }
                }}
              >
                <stat.icon className="h-8 w-8 text-white" />
              </motion.div>
              
              <motion.h3 
                className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  delay: 1.2 + index * 0.1, 
                  type: "spring", 
                  stiffness: 200 
                }}
              >
                {stat.value}
              </motion.h3>
              
              <motion.p 
                className="text-sm text-gray-600 font-medium"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-20 w-20 h-20 bg-orange-300/20 rounded-full"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-16 h-16 bg-amber-300/20 rounded-full"
          animate={{
            y: [0, 20, 0],
            rotate: [360, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  )
}