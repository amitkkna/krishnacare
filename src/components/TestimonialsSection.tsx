'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ArrowLeft, ArrowRight, User, Building } from 'lucide-react'
import { useState, useEffect } from 'react'

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      company: "Unjha Pharmaceuticals Ltd.",
      position: "Supply Chain Manager",
      rating: 5,
      testimonial: "Krishna Care has been our trusted logistics partner for over 8 years. Their expertise in pharmaceutical C&F services is unmatched. The team ensures timely deliveries and maintains product integrity throughout the supply chain.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&q=80",
      companyLogo: "https://via.placeholder.com/100x40/f97316/ffffff?text=UNJHA"
    },
    {
      id: 2,
      name: "Priya Sharma",
      company: "Bayer CropScience Limited",
      position: "Regional Operations Head",
      rating: 5,
      testimonial: "Exceptional service quality and professional approach. Krishna Care's pesticides division handles our products with utmost care and compliance. Their nationwide network has significantly improved our distribution efficiency.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612d3c4?w=150&h=150&fit=crop&crop=face&q=80",
      companyLogo: "https://via.placeholder.com/100x40/0891b2/ffffff?text=BAYER"
    },
    {
      id: 3,
      name: "Anil Patel",
      company: "Asian Paints Limited",
      position: "Logistics Director",
      rating: 5,
      testimonial: "Working with Krishna Care for our paints and distemper logistics has been a game-changer. Their state-of-the-art warehousing facilities and efficient transportation network ensure our products reach markets in perfect condition.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&q=80",
      companyLogo: "https://via.placeholder.com/100x40/ca8a04/ffffff?text=ASIAN+PAINTS"
    },
    {
      id: 4,
      name: "Dr. Meera Singh",
      company: "Bharat Serums and Vaccines Limited",
      position: "Head of Distribution",
      rating: 5,
      testimonial: "The cold chain management and temperature-controlled logistics provided by Krishna Care are exceptional. Their commitment to maintaining pharmaceutical standards throughout the supply chain gives us complete confidence.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face&q=80",
      companyLogo: "https://via.placeholder.com/100x40/059669/ffffff?text=BHARAT+SERUMS"
    },
    {
      id: 5,
      name: "Vikram Joshi",
      company: "UPL Limited",
      position: "Supply Chain Coordinator",
      rating: 5,
      testimonial: "Krishna Care's FMCG division has transformed our distribution strategy. Their technology-driven approach and real-time tracking capabilities provide complete visibility and control over our supply chain operations.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face&q=80",
      companyLogo: "https://via.placeholder.com/100x40/ea580c/ffffff?text=UPL"
    }
  ]

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
      }, 8000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-orange-50/30 to-amber-50/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-orange-200 to-amber-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-l from-green-200 to-orange-200 rounded-full blur-3xl"></div>
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
            CLIENT TESTIMONIALS
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            What Our{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trusted by industry leaders across pharmaceuticals, agriculture, and manufacturing sectors
          </p>
        </motion.div>

        {/* Main Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 300, rotateY: 90 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -300, rotateY: -90 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 lg:p-12 shadow-2xl border border-orange-100/50 relative overflow-hidden"
              style={{ perspective: '1000px' }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-500"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-l from-orange-300/30 to-transparent rounded-full blur-3xl"></div>
              </div>

              {/* Quote Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute top-8 right-8 opacity-20"
              >
                <Quote className="h-16 w-16 text-orange-500" />
              </motion.div>

              <div className="relative z-10">
                {/* Rating Stars */}
                <motion.div
                  className="flex items-center mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: 180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
                    >
                      <Star className="h-6 w-6 text-amber-400 fill-amber-400 mr-1" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Testimonial Text */}
                <motion.blockquote
                  className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 italic"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  "{testimonials[currentTestimonial].testimonial}"
                </motion.blockquote>

                {/* Client Info */}
                <div className="flex items-center justify-between">
                  <motion.div
                    className="flex items-center"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    <div className="relative">
                      <motion.img
                        src={testimonials[currentTestimonial].image}
                        alt={testimonials[currentTestimonial].name}
                        className="w-16 h-16 rounded-full object-cover ring-4 ring-orange-200"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-900 text-lg">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-orange-600 font-medium">
                        {testimonials[currentTestimonial].position}
                      </p>
                      <p className="text-gray-600 text-sm flex items-center mt-1">
                        <Building className="h-4 w-4 mr-1" />
                        {testimonials[currentTestimonial].company}
                      </p>
                    </div>
                  </motion.div>

                  <motion.img
                    src={testimonials[currentTestimonial].companyLogo}
                    alt={`${testimonials[currentTestimonial].company} logo`}
                    className="h-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-300"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 0.6, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    whileHover={{ opacity: 1, scale: 1.1 }}
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <motion.button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-lg rounded-full shadow-lg border border-orange-200/50 flex items-center justify-center text-orange-600 hover:bg-orange-50 transition-all duration-300 z-20"
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="h-5 w-5" />
          </motion.button>

          <motion.button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-lg rounded-full shadow-lg border border-orange-200/50 flex items-center justify-center text-orange-600 hover:bg-orange-50 transition-all duration-300 z-20"
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowRight className="h-5 w-5" />
          </motion.button>
        </motion.div>

        {/* Dots Navigation */}
        <motion.div
          className="flex justify-center mt-12 space-x-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial 
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 w-8' 
                  : 'bg-gray-300 hover:bg-orange-300'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>

        {/* Auto-play indicator */}
        <motion.div
          className="flex justify-center mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-sm text-gray-500 flex items-center">
            <motion.div
              className="w-2 h-2 bg-green-500 rounded-full mr-2"
              animate={{ scale: isAutoPlaying ? [1, 1.2, 1] : 1 }}
              transition={{ duration: 1, repeat: isAutoPlaying ? Infinity : 0 }}
            />
            {isAutoPlaying ? 'Auto-playing testimonials' : 'Auto-play paused'}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection