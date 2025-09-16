'use client'

import { motion } from 'framer-motion'
import { Truck, Package, Globe, Shield, Clock, Users, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const CFSolutions = () => {
  const solutions = [
    {
      icon: Package,
      title: "Export-Import Services",
      description: "Complete documentation, customs clearance, and cargo handling for international trade",
      features: ["Custom Documentation", "Port Handling", "Cargo Inspection"]
    },
    {
      icon: Truck,
      title: "Transportation & Logistics",
      description: "End-to-end logistics solutions from origin to destination with real-time tracking",
      features: ["Multi-modal Transport", "Last Mile Delivery", "GPS Tracking"]
    },
    {
      icon: Globe,
      title: "Supply Chain Management",
      description: "Integrated supply chain solutions for agricultural products across India",
      features: ["Inventory Management", "Distribution Network", "Cold Storage"]
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Comprehensive insurance and risk mitigation for your valuable cargo",
      features: ["Cargo Insurance", "Risk Assessment", "Claims Handling"]
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-gradient-to-r from-orange-200 to-amber-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-gradient-to-l from-green-200 to-orange-200 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <Truck className="h-5 w-5 mr-2" />
            OUR CORE SERVICES
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Comprehensive{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">
              C&F Solutions
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Since 1995, Krishna Care has been India's premier clearing & forwarding partner, 
            delivering end-to-end logistics solutions for agricultural products nationwide.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                className="bg-white p-8 rounded-3xl shadow-lg border border-orange-100/50 hover:shadow-2xl transition-all duration-500 h-full"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div
                  className="bg-gradient-to-r from-orange-500 to-amber-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  animate={{ 
                    boxShadow: [
                      "0 4px 20px rgba(249, 115, 22, 0.3)",
                      "0 8px 30px rgba(249, 115, 22, 0.4)",
                      "0 4px 20px rgba(249, 115, 22, 0.3)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <solution.icon className="h-8 w-8 text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                  {solution.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>
                
                <ul className="space-y-3 mb-6">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <motion.div
                  className="text-orange-600 font-semibold flex items-center group-hover:text-orange-700 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-12 text-white relative overflow-hidden mb-16"
        >
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              background: [
                'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.2) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 80%, rgba(255,255,255,0.2) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.2) 0%, transparent 50%)',
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          
          <div className="relative z-10">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="flex items-center justify-center mb-4">
                  <Clock className="h-12 w-12 text-orange-200 group-hover:text-white transition-colors" />
                </div>
                <div className="text-4xl font-bold mb-2">25+</div>
                <div className="text-orange-100">Years Experience</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="flex items-center justify-center mb-4">
                  <Users className="h-12 w-12 text-orange-200 group-hover:text-white transition-colors" />
                </div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-orange-100">Happy Clients</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="flex items-center justify-center mb-4">
                  <Package className="h-12 w-12 text-orange-200 group-hover:text-white transition-colors" />
                </div>
                <div className="text-4xl font-bold mb-2">10K+</div>
                <div className="text-orange-100">Shipments Handled</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="flex items-center justify-center mb-4">
                  <Globe className="h-12 w-12 text-orange-200 group-hover:text-white transition-colors" />
                </div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-orange-100">Cities Covered</div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Streamline Your Supply Chain?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Partner with Krishna Care for reliable, efficient, and cost-effective C&F solutions 
            tailored to your agricultural logistics needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services">
              <motion.button
                className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-orange-600 hover:to-amber-600 transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore All Services
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </Link>
            
            <Link href="/contact">
              <motion.button
                className="border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Quote
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CFSolutions