'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isClient, setIsClient] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const slides = [
    {
      title: "Krishna Care",
      subtitle: "Leading Warehousing & Logistics Solutions",
      description: "Your Trusted Partner for 25+ Years in Agricultural Excellence",
      type: "video",
      backgroundVideo: "/videos/warehouse-hero.mp4",
      ctaText: "Explore Services",
      ctaLink: "/services",
      textDelay: 1.5
    },
    {
      title: "Modern Infrastructure",
      subtitle: "State-of-Art Facilities",
      description: "Technology-Driven Operations with Advanced Warehouse Solutions",
      type: "video",
      backgroundVideo: "/videos/wareout-hero.mp4",
      ctaText: "View Infrastructure",
      ctaLink: "/services",
      textDelay: 1.5
    },
    {
      title: "Nationwide Network",
      subtitle: "Pan-India Presence",
      description: "Comprehensive Distribution Network Across Major Agricultural Zones",
      type: "image",
      backgroundImage: "url('/images/kcimages/image1 (3).png')",
      ctaText: "Our Network",
      ctaLink: "/about"
    },
    {
      title: "Quality Assurance",
      subtitle: "Premium Standards",
      description: "ISO Certified Processes with World-Class Quality Management Systems",
      type: "image",
      backgroundImage: "url('/images/kcimages/image1 (4).png')",
      ctaText: "Learn More",
      ctaLink: "/about"
    },
    {
      title: "Innovation Hub",
      subtitle: "Future of Agriculture",
      description: "Pioneering Digital Solutions for Modern Agricultural Supply Chain",
      type: "image",
      backgroundImage: "url('/images/kcimages/image1 (5).png')",
      ctaText: "Discover Innovation",
      ctaLink: "/services"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [slides.length])

  useEffect(() => {
    // Play video when video slides are active (slide 0 or 1)
    if ((currentSlide === 0 || currentSlide === 1) && videoRef.current) {
      videoRef.current.play().catch(err => console.log('Video autoplay failed:', err))
    }
  }, [currentSlide])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video/Images with Transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          {slides[currentSlide].type === 'video' ? (
            <>
              {/* Video Background */}
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="/images/kcimages/image1 (1).png"
              >
                <source src={slides[currentSlide].backgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Dark Overlay for video */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </>
          ) : (
            <>
              {/* Image Background */}
              <div
                className="absolute inset-0 w-full h-full"
                style={{
                  backgroundImage: slides[currentSlide].backgroundImage,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              />

              {/* Dark Overlay for images */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white max-w-3xl"
            >
              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (slides[currentSlide].textDelay || 0) + 0.3, duration: 0.6 }}
                className="text-luxury-gold-400 text-lg md:text-xl font-semibold mb-4 tracking-wide uppercase"
              >
                {slides[currentSlide].subtitle}
              </motion.p>

              {/* Main Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (slides[currentSlide].textDelay || 0) + 0.5, duration: 0.8 }}
                className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight"
              >
                {slides[currentSlide].title}
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (slides[currentSlide].textDelay || 0) + 0.7, duration: 0.6 }}
                className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed"
              >
                {slides[currentSlide].description}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (slides[currentSlide].textDelay || 0) + 0.9, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href={slides[currentSlide].ctaLink}>
                  <motion.button
                    className="btn-luxury group flex items-center justify-center gap-2 text-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {slides[currentSlide].ctaText}
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>

                <Link href="/contact">
                  <motion.button
                    className="glass-strong border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Contact Us
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'bg-luxury-gold-500 w-12 h-3'
                : 'bg-white/50 hover:bg-white/75 w-3 h-3'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 right-10 z-20 hidden lg:flex flex-col items-center text-white"
      >
        <span className="text-sm mb-2 tracking-wide">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSlider