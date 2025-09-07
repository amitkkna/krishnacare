'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Leading Clearing & Forwarding Excellence",
      subtitle: "Strengthening Agricultural Supply Chain for a Thriving Tomorrow",
      description: "Krishna Care - Your trusted partner in fertilizer logistics across India, ensuring seamless supply chain management from port to farmer.",
      backgroundImage: "url('/images/hero/agricultural-field-tractor.jpg')",
      stats: [
        { label: "Agricultural Products", value: "1000+" },
        { label: "Farmer Touch Points", value: "100000+" },
        { label: "Years of Service", value: "25+" },
        { label: "Happy Clients", value: "200+" }
      ]
    },
    {
      title: "Pharmaceutical & Agricultural Logistics",
      subtitle: "Comprehensive C&F Solutions Across Multiple Sectors",
      description: "From pharmaceutical to agricultural sectors, we provide end-to-end clearing and forwarding services with precision and reliability.",
      backgroundImage: "linear-gradient(135deg, #059669 0%, #1d4ed8 50%, #047857 100%)",
      stats: [
        { label: "Industries Served", value: "3+" },
        { label: "Major Clients", value: "50+" },
        { label: "Successful Projects", value: "500+" },
        { label: "Pan India Presence", value: "10+" }
      ]
    },
    {
      title: "Innovation in Supply Chain Management",
      subtitle: "Technology-Driven Logistics Solutions",
      description: "Leveraging cutting-edge technology to optimize supply chain efficiency, reduce costs, and ensure timely delivery across India.",
      backgroundImage: "linear-gradient(135deg, #16a34a 0%, #1e40af 50%, #059669 100%)",
      stats: [
        { label: "Digital Solutions", value: "5+" },
        { label: "Efficiency Increase", value: "40%" },
        { label: "Cost Reduction", value: "25%" },
        { label: "Client Satisfaction", value: "98%" }
      ]
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 overflow-hidden">
      {/* Hero Background Image with Gradient Fallback */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), 
            url('/images/hero/agricultural-field-tractor.jpg')
          `,
          // Fallback gradient when image fails to load
          background: `linear-gradient(135deg, #059669 0%, #1d4ed8 50%, #047857 100%)`
        }}
      />

      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-green-200 rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-white"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20"
              >
                <TrendingUp className="h-4 w-4 mr-2" />
                Leading Clearing & Forwarding in India
              </motion.div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                <span className="text-green-300">Streamlining</span>
                <br />
                Agricultural 
                <br />
                <span className="text-blue-300">Supply Chains</span>
              </h1>
              
              <p className="text-xl text-gray-100 leading-relaxed">
                Krishna Care is India's premier clearing and forwarding agent, specializing in fertilizer logistics and agricultural supply chain management. We ensure seamless movement of agricultural products across the nation.
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-3">
              {[
                'Expert handling of fertilizer logistics',
                '25+ years of industry experience',
                'Pan-India network coverage',
                'Trusted by leading agricultural companies'
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  className="flex items-center"
                >
                  <CheckCircle className="h-5 w-5 text-green-300 mr-3 flex-shrink-0" />
                  <span className="text-gray-100">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 font-semibold flex items-center justify-center group">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                Learn More
              </button>
            </motion.div>
          </motion.div>

          {/* Visual Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            {/* Agricultural Imagery Showcase */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="aspect-[4/3] bg-gradient-to-br from-white/20 to-transparent rounded-xl overflow-hidden relative">
                  {/* Agricultural Equipment Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('/images/hero/tractor-spraying-field.jpg')`,
                    }}
                  >
                    {/* Fallback content */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-600/50 to-blue-600/50 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="bg-white/20 backdrop-blur-sm p-6 rounded-full mx-auto mb-4 w-24 h-24 flex items-center justify-center">
                          <span className="text-3xl">🚜</span>
                        </div>
                        <h4 className="text-xl font-bold mb-2">Modern Agriculture</h4>
                        <p className="text-white/80 text-sm">Professional agricultural imagery</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h4 className="text-lg font-bold mb-2">Precision Agriculture</h4>
                      <p className="text-sm text-white/90">Advanced farming techniques for better yields</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Statistics Cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">99.9%</p>
                    <p className="text-sm text-gray-600">On-time Delivery</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">24/7</p>
                    <p className="text-sm text-gray-600">Support Available</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
