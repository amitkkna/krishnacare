'use client'

import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'
import { ArrowRight, CheckCircle, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showOverlay, setShowOverlay] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springConfig = { stiffness: 100, damping: 30 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  // Mouse tracking for interactive elements
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    mouseX.set(clientX)
    mouseY.set(clientY)
  }

  const slides = [
    {
      title: "Krishna Care",
      subtitle: "Leading Agricultural Solutions",
      description: "Your Trusted Partner for 25+ Years in Agricultural Excellence",
      backgroundImage: "url('/images/kcimages/image1 (1).png')",
      overlayColor: "from-orange-900/70 to-green-900/60",
      bgColor: "from-emerald-600/20 to-cyan-600/20",
      animatedText: "Agricultural Excellence",
      subText: "Delivering Quality Since 1998",
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
      description: "Technology-Driven Operations with Advanced Warehouse Solutions",
      backgroundImage: "url('/images/kcimages/image1 (2).png')",
      overlayColor: "from-blue-900/80 to-purple-900/60",
      bgColor: "from-blue-600/20 to-indigo-600/20",
      animatedText: "Smart Logistics",
      subText: "Technology Meets Agriculture",
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
      description: "Comprehensive Distribution Network Across Major Agricultural Zones",
      backgroundImage: "url('/images/kcimages/image1 (3).png')",
      overlayColor: "from-orange-900/80 to-red-900/60",
      bgColor: "from-orange-600/20 to-pink-600/20",
      animatedText: "Global Reach",
      subText: "Local Expertise, National Presence",
      stats: [
        { label: "Cities Covered", value: "10+" },
        { label: "Pharma Clients", value: "50+" },
        { label: "Agri Partners", value: "100+" },
        { label: "Success Rate", value: "98%" }
      ]
    },
    {
      title: "Quality Assurance",
      subtitle: "Premium Standards",
      description: "ISO Certified Processes with World-Class Quality Management Systems",
      backgroundImage: "url('/images/kcimages/image1 (4).png')",
      overlayColor: "from-emerald-900/80 to-teal-900/60",
      bgColor: "from-emerald-600/20 to-teal-600/20",
      animatedText: "Quality First",
      subText: "Excellence in Every Service",
      stats: [
        { label: "ISO Certified", value: "Yes" },
        { label: "Quality Score", value: "99%" },
        { label: "Client Satisfaction", value: "95%" },
        { label: "Repeat Business", value: "85%" }
      ]
    },
    {
      title: "Innovation Hub",
      subtitle: "Future of Agriculture",
      description: "Pioneering Digital Solutions for Modern Agricultural Supply Chain",
      backgroundImage: "url('/images/kcimages/image1 (5).png')",
      overlayColor: "from-indigo-900/80 to-violet-900/60",
      bgColor: "from-violet-600/20 to-purple-600/20",
      animatedText: "Digital Future",
      subText: "Innovation Drives Growth",
      stats: [
        { label: "Digital Solutions", value: "10+" },
        { label: "Tech Integrations", value: "25+" },
        { label: "Automation Level", value: "80%" },
        { label: "Efficiency Gain", value: "40%" }
      ]
    }
  ]

  // Particle system component
  const FloatingParticles = () => {
    const particles = Array.from({ length: 20 }, (_, i) => i)
    
    return (
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle}
            className="absolute w-2 h-2 bg-orange-300/30 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [-100, 0, -100],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.4, Math.random() * 0.8 + 0.4, 0.4],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
    )
  }

  useEffect(() => {
    // Reset overlay when slide changes
    setShowOverlay(false)
    
    // Show overlay after 3 seconds
    const overlayTimer = setTimeout(() => {
      setShowOverlay(true)
    }, 3000)

    // Change slide every 11 seconds (3 seconds pure image + 8 seconds with overlay)
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 11000)

    return () => {
      clearTimeout(overlayTimer)
      clearInterval(slideTimer)
    }
  }, [currentSlide, slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Floating Particles */}
      <FloatingParticles />
      
      {/* Animated Background Color Layer */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          background: [
            `linear-gradient(135deg, ${slides[currentSlide].bgColor.replace('from-', '').replace(' to-', ', ')})`,
            `linear-gradient(225deg, ${slides[currentSlide].bgColor.replace('from-', '').replace(' to-', ', ')})`,
            `linear-gradient(315deg, ${slides[currentSlide].bgColor.replace('from-', '').replace(' to-', ', ')})`,
            `linear-gradient(45deg, ${slides[currentSlide].bgColor.replace('from-', '').replace(' to-', ', ')})`,
            `linear-gradient(135deg, ${slides[currentSlide].bgColor.replace('from-', '').replace(' to-', ', ')})`
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Background Images with Fade Transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 z-10"
          style={{
            backgroundImage: slides[currentSlide].backgroundImage,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Animated Color Overlay with Fade - Only after 3 seconds */}
          <AnimatePresence>
            {showOverlay && (
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].overlayColor}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.0 }}
              />
            )}
          </AnimatePresence>
          
          {/* Additional Animated Color Layer - Only after 3 seconds */}
          <AnimatePresence>
            {showOverlay && (
              <motion.div
                className="absolute inset-0"
                initial={{ 
                  background: "linear-gradient(45deg, rgba(0,0,0,0.3) 0%, transparent 50%, rgba(0,0,0,0.2) 100%)",
                  opacity: 0 
                }}
                animate={{ 
                  background: [
                    "linear-gradient(45deg, rgba(0,0,0,0.3) 0%, transparent 50%, rgba(0,0,0,0.2) 100%)",
                    "linear-gradient(135deg, rgba(0,0,0,0.2) 0%, transparent 50%, rgba(0,0,0,0.3) 100%)",
                    "linear-gradient(225deg, rgba(0,0,0,0.3) 0%, transparent 50%, rgba(0,0,0,0.2) 100%)",
                    "linear-gradient(315deg, rgba(0,0,0,0.2) 0%, transparent 50%, rgba(0,0,0,0.3) 100%)",
                    "linear-gradient(45deg, rgba(0,0,0,0.3) 0%, transparent 50%, rgba(0,0,0,0.2) 100%)"
                  ],
                  opacity: 1 
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            )}
          </AnimatePresence>

          {/* Pulsing Light Effect - Only after 3 seconds */}
          <AnimatePresence>
            {showOverlay && (
              <motion.div
                className="absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-transparent"
                initial={{ opacity: 0, scale: 1 }}
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                  scale: [1, 1.2, 1]
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            )}
          </AnimatePresence>

          {/* Color Fade Transition Effect - Only after 3 seconds */}
          <AnimatePresence>
            {showOverlay && (
              <motion.div
                key={`color-${currentSlide}`}
                className={`absolute inset-0 bg-gradient-to-t ${slides[currentSlide].bgColor}`}
                initial={{ opacity: 0, mixBlendMode: "multiply" as const }}
                animate={{ 
                  opacity: [0, 0.4, 0.2, 0.3, 0.1],
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
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

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content - Only show after 3 seconds */}
          <AnimatePresence>
            {showOverlay && (
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.8 }}
                className="text-white space-y-8"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="space-y-6"
                >
                  {/* Animated Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="inline-flex items-center bg-orange-500/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium border border-orange-400/30 hover:bg-orange-500/30 transition-all duration-300"
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    {slides[currentSlide].subText}
                  </motion.div>
                
                {/* Main Animated Title */}
                <motion.h1 
                  className="text-5xl lg:text-7xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  <motion.span
                    initial={{ opacity: 0, rotateX: 90 }}
                    animate={{ opacity: 1, rotateX: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="inline-block"
                  >
                    {slides[currentSlide].title}
                  </motion.span>
                </motion.h1>
                
                {/* Animated Text */}
                <motion.div 
                  className="text-3xl lg:text-4xl font-semibold mb-4 text-orange-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0, duration: 0.5 }}
                >
                  <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                    {slides[currentSlide].animatedText}
                  </span>
                </motion.div>
                
                {/* Animated Subtitle with Typewriter Effect */}
                <motion.h2 
                  className="text-xl lg:text-2xl text-orange-200 font-medium overflow-hidden"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  transition={{ delay: 0.7, duration: 1.2 }}
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.1 }}
                    className="inline-block"
                  >
                    {slides[currentSlide].subtitle}
                  </motion.span>
                </motion.h2>

                {/* Large Animated Text Overlay */}
                <motion.div 
                  className="relative my-8"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  <motion.div
                    className="text-6xl lg:text-8xl font-black text-white/10 absolute -top-4 -left-2 pointer-events-none select-none"
                    animate={{ 
                      y: [0, -10, 0],
                      opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {slides[currentSlide].animatedText}
                  </motion.div>
                </motion.div>
                
                {/* Description with Fade In */}
                <motion.p 
                  className="text-lg lg:text-xl text-gray-200 leading-relaxed max-w-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                >
                  {slides[currentSlide].description}
                </motion.p>
              </motion.div>

              {/* Enhanced Buttons with Advanced Animations */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button 
                  className="bg-gradient-to-r from-orange-500 to-green-600 hover:from-orange-600 hover:to-green-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center group shadow-xl hover:shadow-2xl"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.span
                    className="mr-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Explore Our Services
                  </motion.span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </motion.button>
                
                <motion.button 
                  className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white/10 backdrop-blur-sm relative overflow-hidden group"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(255, 255, 255, 0.2)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                    animate={{ x: [-100, 300] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                  <span className="relative z-10">View Our Portfolio</span>
                </motion.button>
              </motion.div>
            </motion.div>
            )}
          </AnimatePresence>

          {/* Enhanced Stats Grid with Advanced Animations - Only show after 3 seconds */}
          <AnimatePresence>
            {showOverlay && (
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-2 gap-6"
              >
                {slides[currentSlide].stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30, rotateY: 45 }}
                    animate={{ opacity: 1, y: 0, rotateY: 0 }}
                    transition={{ 
                      delay: 0.4 + index * 0.15, 
                      duration: 0.8,
                      type: "spring",
                      stiffness: 100
                    }}
                    className="bg-white/10 backdrop-blur-lg p-6 rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-300 group relative overflow-hidden"
                    whileHover={{ 
                      scale: 1.08,
                      rotateY: 5,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                    }}
                  >
                    {/* Animated Background Gradient */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      animate={{
                        background: [
                          "linear-gradient(45deg, rgba(249, 115, 22, 0.2), rgba(34, 197, 94, 0.2))",
                          "linear-gradient(225deg, rgba(34, 197, 94, 0.2), rgba(249, 115, 22, 0.2))",
                          "linear-gradient(45deg, rgba(249, 115, 22, 0.2), rgba(34, 197, 94, 0.2))"
                        ]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                    
                    <div className="flex flex-col items-center text-center text-white relative z-10">
                      <motion.div 
                        className="bg-orange-500/20 p-3 rounded-full mb-4 group-hover:bg-orange-500/30 transition-colors duration-300"
                        animate={{ 
                          rotate: [0, 360],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                          scale: { duration: 2, repeat: Infinity }
                        }}
                      >
                        <TrendingUp className="h-8 w-8 text-orange-300" />
                      </motion.div>
                      
                      <motion.h4 
                        className="text-3xl lg:text-4xl font-bold mb-2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ 
                          delay: 0.6 + index * 0.1, 
                          type: "spring", 
                          stiffness: 200 
                        }}
                      >
                        <motion.span
                          animate={{ 
                            textShadow: [
                              "0 0 0px rgba(249, 115, 22, 0)",
                              "0 0 10px rgba(249, 115, 22, 0.5)",
                              "0 0 0px rgba(249, 115, 22, 0)"
                            ]
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          {stat.value}
                        </motion.span>
                      </motion.h4>
                      
                      <motion.p 
                        className="text-sm text-gray-200 font-medium"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                      >
                        {stat.label}
                      </motion.p>
                    </div>
                    
                    {/* Floating Particles Effect */}
                    <motion.div
                      className="absolute top-2 right-2 w-2 h-2 bg-orange-300/50 rounded-full"
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 2 + index * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default HeroSlider
