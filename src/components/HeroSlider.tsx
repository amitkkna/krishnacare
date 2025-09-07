'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Agricultural Excellence",
      subtitle: "Leading C&F Services",
      description: "25+ Years of Proven Expertise",
      backgroundImage: "url('/images/hero/agricultural-field-tractor.jpg')",
      overlayColor: "from-green-900/70 to-blue-900/50",
      stats: [
        { label: "Years Experience", value: "25+" },
        { label: "Happy Clients", value: "200+" },
        { label: "Sq Ft Warehouse", value: "169K+" },
        { label: "Sister Companies", value: "6+" }
      ]
    },
    {
      title: "Modern Infrastructure",
      subtitle: "State-of-Art Facilities",
      description: "Technology-Driven Operations",
      backgroundImage: "url('/images/hero/warehouse-facility.jpg')",
      overlayColor: "from-blue-900/70 to-purple-900/50",
      stats: [
        { label: "Warehouses", value: "5+" },
        { label: "Vehicle Fleet", value: "17+" },
        { label: "Industries Served", value: "4+" },
        { label: "Team Members", value: "100+" }
      ]
    },
    {
      title: "Nationwide Network",
      subtitle: "Pan-India Presence",
      description: "Comprehensive Logistics Solutions",
      backgroundImage: "url('/images/hero/logistics-network.jpg')",
      overlayColor: "from-orange-900/70 to-red-900/50",
      stats: [
        { label: "Cities Covered", value: "10+" },
        { label: "Pharma Clients", value: "50+" },
        { label: "Agri Partners", value: "100+" },
        { label: "Success Rate", value: "98%" }
      ]
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 8000) // Increased from 5000ms to 8000ms for 3 seconds longer pause
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
          style={{
            backgroundImage: slides[currentSlide].backgroundImage,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Minimal overlay for text readability */}
          <div className={`absolute inset-0 bg-gradient-to-t ${slides[currentSlide].overlayColor || 'from-black/30 to-transparent'}`}></div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.6 }}
              className="text-white space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center bg-green-600/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-green-400/30">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Trusted Agricultural Partner
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  {slides[currentSlide].title}
                </h1>
                
                <h2 className="text-xl lg:text-2xl text-green-200 font-medium">
                  {slides[currentSlide].subtitle}
                </h2>
                
                <p className="text-lg lg:text-xl text-gray-200 leading-relaxed max-w-2xl">
                  {slides[currentSlide].description}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center group">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10 backdrop-blur-sm">
                  View Our Clients
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Stats Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              {slides[currentSlide].stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex flex-col items-center text-center text-white">
                    <div className="bg-green-500/20 p-3 rounded-full mb-4">
                      <TrendingUp className="h-8 w-8 text-green-300" />
                    </div>
                    <h4 className="text-3xl lg:text-4xl font-bold mb-2">{stat.value}</h4>
                    <p className="text-sm text-gray-200 font-medium">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default HeroSlider
