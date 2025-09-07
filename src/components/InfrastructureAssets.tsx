'use client'

import { motion } from 'framer-motion'
import { Building, Truck, Zap, Shield, Database, Network, MapPin, Award, CheckCircle, ArrowUpRight } from 'lucide-react'

const InfrastructureAssets = () => {
  const warehouses = [
    {
      location: "Gondwara Raipur",
      area: "36,000",
      unit: "sq ft",
      type: "Head Office",
      highlight: "Modern Computerized Complex",
      features: [
        "Fully air-conditioned corporate office",
        "Advanced A/V conferencing facilities", 
        "Integrated communication systems",
        "Dual UPS with zero downtime",
        "24/7 CCTV surveillance",
        "High-speed computing infrastructure"
      ],
      icon: Building,
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      location: "Gondwara Raipur",
      area: "90,000",
      unit: "sq ft",
      type: "New Complex",
      highlight: "Multinational Hub Facility",
      features: [
        "Multi-bay warehouse configuration",
        "Automated material handling",
        "Climate-controlled storage",
        "Direct rail connectivity",
        "In-house quality laboratories",
        "Fleet parking for 50+ vehicles"
      ],
      icon: Database,
      gradient: "from-indigo-600 to-purple-600"
    },
    {
      location: "Akola",
      area: "30,000",
      unit: "sq ft",
      type: "Branch Office",
      highlight: "Regional Distribution Hub",
      features: [
        "Strategic cotton belt positioning",
        "Smart inventory management",
        "Direct farmer connectivity",
        "Quality assurance facilities",
        "Transportation coordination"
      ],
      icon: Network,
      gradient: "from-purple-600 to-pink-600"
    }
  ]

  const logistics = [
    {
      category: "Fleet Operations",
      count: "15+",
      unit: "Vehicles",
      description: "Own Transportation Network",
      details: [
        "Heavy-duty bulk transport trucks",
        "Specialized agricultural carriers",
        "Temperature-controlled vehicles",
        "GPS fleet management system"
      ],
      icon: Truck,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50"
    },
    {
      category: "Partner Network",
      count: "200+",
      unit: "Associates", 
      description: "Strategic Alliance Partners",
      details: [
        "Pan-India transport coverage",
        "Regional distribution hubs",
        "Last-mile delivery specialists",
        "Emergency backup systems"
      ],
      icon: Network,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    }
  ]

  const technology = [
    {
      system: "Enterprise Resource Planning",
      category: "ERP System",
      features: [
        "Real-time inventory tracking",
        "Automated order processing",
        "Supply chain optimization",
        "Financial integration"
      ],
      icon: Database,
      color: "text-violet-600"
    },
    {
      system: "Quality Management System",
      category: "QMS Platform",
      features: [
        "ISO certified processes",
        "Digital quality tracking",
        "Compliance monitoring",
        "Customer feedback integration"
      ],
      icon: Shield,
      color: "text-rose-600"
    },
    {
      system: "Communication Infrastructure",
      category: "Communication Hub",
      features: [
        "24x7 customer support",
        "Multi-channel communication",
        "Real-time status updates",
        "Digital documentation"
      ],
      icon: Zap,
      color: "text-amber-600"
    }
  ]

  return (
    <div className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-6">
            <Building className="w-4 h-4 mr-2" />
            World-Class Infrastructure
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Infrastructure & <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Assets</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            State-of-the-art facilities and cutting-edge technology infrastructure enabling seamless operations across India
          </p>
        </motion.div>

        {/* Warehouse Infrastructure */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Premium Facilities
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Modern infrastructure designed for efficiency, reliability, and scalability
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {warehouses.map((warehouse, index) => {
              const IconComponent = warehouse.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500" />
                  <div className="relative p-8 h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${warehouse.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-gray-900">{warehouse.area}</div>
                        <div className="text-sm text-gray-500 font-medium">{warehouse.unit}</div>
                      </div>
                    </div>

                    {/* Location & Type */}
                    <div className="mb-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-1">{warehouse.location}</h4>
                      <p className="text-blue-600 font-semibold text-sm">{warehouse.type}</p>
                      <p className="text-gray-600 text-sm mt-1">{warehouse.highlight}</p>
                    </div>

                    {/* Features */}
                    <div className="space-y-3">
                      {warehouse.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: (index * 0.1) + (idx * 0.1) }}
                          className="flex items-center text-sm text-gray-700"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </motion.div>
                      ))}
                    </div>

                    {/* Hover Arrow */}
                    <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Logistics Network */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Logistics Excellence
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive transportation and distribution network ensuring timely delivery
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {logistics.map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50/50 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500" />
                  <div className="relative p-10">
                    {/* Header */}
                    <div className="flex items-center mb-8">
                      <div className={`w-16 h-16 ${item.bgColor} rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`w-8 h-8 ${item.color}`} />
                      </div>
                      <div>
                        <div className="flex items-baseline space-x-2 mb-1">
                          <span className="text-4xl font-bold text-gray-900">{item.count}</span>
                          <span className="text-lg text-gray-500 font-medium">{item.unit}</span>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900">{item.category}</h4>
                        <p className={`text-sm font-medium ${item.color}`}>{item.description}</p>
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div className="grid grid-cols-1 gap-4">
                      {item.details.map((detail, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: (index * 0.2) + (idx * 0.1) }}
                          className="flex items-center p-4 bg-white/80 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 mr-4 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{detail}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Technology Systems */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Technology Systems
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Advanced digital infrastructure powering our operations and customer experience
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {technology.map((tech, index) => {
              const IconComponent = tech.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-white rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500" />
                  <div className="relative p-8 text-center">
                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                      <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className={`w-10 h-10 ${tech.color}`} />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{tech.system}</h4>
                    <p className={`text-sm font-semibold ${tech.color} mb-6`}>{tech.category}</p>
                    
                    {/* Features */}
                    <div className="space-y-3 text-left">
                      {tech.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: (index * 0.1) + (idx * 0.1) }}
                          className="flex items-center text-sm text-gray-700"
                        >
                          <div className={`w-2 h-2 ${tech.color.replace('text-', 'bg-')} rounded-full mr-3 flex-shrink-0`} />
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-3xl p-12 text-white">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
              <div className="absolute top-0 left-0 w-full h-full bg-repeat opacity-30" 
                   style={{
                     backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`
                   }}
              />
            </div>
            
            <div className="relative">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8"
              >
                <Award className="w-10 h-10 text-white" />
              </motion.div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Experience Excellence
              </h3>
              <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                Discover how our world-class infrastructure and cutting-edge technology solutions can elevate your business operations to new heights.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  Schedule Infrastructure Tour
                  <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm"
                >
                  Download Capabilities Brochure
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default InfrastructureAssets
