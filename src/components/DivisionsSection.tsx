'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Pill, Sprout, Palette, Building, CheckCircle, ExternalLink } from 'lucide-react'

const DivisionsSection = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Inject custom scrollbar styles
  if (typeof document !== 'undefined') {
    const styleId = 'custom-scrollbar-styles'
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style')
      style.id = styleId
      style.textContent = `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #f97316, #ea580c);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #ea580c, #dc2626);
        }
      `
      document.head.appendChild(style)
    }
  }

  const divisions = [
    {
      name: "Pharma Division",
      icon: Pill,
      color: "bg-blue-500",
      description: "Comprehensive pharmaceutical logistics and clearing services across India",
      clients: [
        { name: "AURA NUTRACEUTICALS LTD. (A Group of Unjha Pharmaceuticals Ltd. Ahmadabad)", website: "https://www.unjha.com" },
        { name: "BHARAT SERUMS AND VACCINES LIMITED", website: "https://www.bharatserums.com" },
        { name: "SINAG HEALTHCARE PVT LTD, DELHI", website: "https://sinaghealthcare.com" },
        { name: "MORWELL PHARMACIA PVT LTD, DELHI", website: "https://morwellpharmacia.com" }
      ],
      features: [
        "Temperature-controlled logistics",
        "Regulatory compliance expertise",
        "End-to-end pharmaceutical supply chain",
        "Quality assurance protocols"
      ]
    },
    {
      name: "Pesticides Division",
      icon: Sprout,
      color: "bg-green-500",
      description: "Specialized clearing and forwarding for agricultural pesticides and fertilizers",
      clients: [
        { name: "TATA RALLIS INDIA LTD. MUMBAI", website: "https://www.rallis.com" },
        { name: "SUMITOMO CHEMICAL INDIA LTD. MUMBAI", website: "https://www.sumitomo-chem.co.in" },
        { name: "GODREJ AGROVET LIMITED MUMBAI", website: "https://www.godrejagrovet.com" },
        { name: "GHARDA CHEMICALS LTD. MUMBAI", website: "https://www.gharda.com" },
        { name: "SWAL CORPORATION LTD. MUMBAI", website: "https://www.swalcorp.com" },
        { name: "FMC INDIA PVT. LTD. MUMBAI", website: "https://www.fmc.com" },
        { name: "CHAMINOVA", website: "https://www.cheminova.com" },
        { name: "COROMANDEL INTERNATIONAL LTD.", website: "https://www.coromandel.biz" },
        { name: "AGROCEL INDUSTRIES PVT LTD. GUJARAT", website: "https://www.agrocel.com" },
        { name: "UNIVERSAL AGRO CHEMICAL INDUSTRIES, KOLKATA", website: "https://www.universalagrochemical.com" },
        { name: "CHAMBAL FERTILISERS AND CHEMICALS LTD NEW DELHI", website: "https://www.chambal.com" },
        { name: "AGRINOSE. INDIA (P) Ltd., NEW DELHI", website: "https://www.agrinose.com" },
        { name: "ATUL LTD.", website: "https://www.atul.co.in" },
        { name: "GUJARAT INSECTICIDES LIMITED", website: "https://www.gujins.com" },
        { name: "GANPATI AGRIZONE CARE", website: "https://www.ganpatiagrizone.com" },
        { name: "SAHIB FERTILIZER PVT LTD", website: "https://www.sahibfertilizer.com" },
        { name: "GMD TRADE & COMMERCE PVT LTD", website: "https://www.gmdtrade.com" },
        { name: "GEOLIFE AGROTECH", website: "https://www.geolifesciences.com" },
        { name: "CANBIOSYS", website: "https://www.canbiosys.com" },
        { name: "USK", website: "https://www.usk.in" },
        { name: "GROWERO TECHNOLOGIES", website: "https://www.growerotech.com" },
        { name: "NADIYA FERTILIZER", website: "https://www.nadiyafertilizer.com" }
      ],
      features: [
        "Agricultural supply chain expertise",
        "Fertilizer handling specialists",
        "Crop protection logistics",
        "Nationwide distribution network"
      ]
    },
    {
      name: "Paints & Distemper",
      icon: Palette,
      color: "bg-orange-500",
      description: "Efficient logistics solutions for paints and distemper industry",
      clients: [
        { name: "SHALIMAR PAINTS LTD", website: "https://www.shalimarpaints.com" },
        { name: "BRITISH PAINTS", website: "https://www.britishpaints.in" }
      ],
      features: [
        "Chemical handling expertise",
        "Specialized storage facilities",
        "Quality preservation protocols",
        "Industrial logistics solutions"
      ]
    },
    {
      name: "FMCG Division",
      icon: Building,
      color: "bg-purple-500",
      description: "Fast-moving consumer goods logistics and distribution",
      clients: [
        { name: "WIPRO LTD", website: "https://www.wipro.com" },
        { name: "TIRUPATI INDUSTRIES", website: "https://www.tirupatiindustries.com" }
      ],
      features: [
        "Rapid distribution network",
        "Consumer goods expertise",
        "Last-mile delivery solutions",
        "Inventory management"
      ]
    }
  ]

  // Auto-switch tabs every 3 seconds
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % divisions.length)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  // Pause auto-play when user interacts
  const handleTabClick = (index: number) => {
    setActiveTab(index)
    setIsAutoPlaying(false)
    
    // Resume auto-play after 5 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  // Handle client link clicks for analytics (optional)
  const handleClientClick = (clientName: string, website: string) => {
    // Optional: Add analytics tracking here
    console.log(`Client link clicked: ${clientName} -> ${website}`)
    // You can add Google Analytics or other tracking here
  }

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600 to-orange-500"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-orange-300 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-300 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Premium Section Header */}
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
            className="inline-flex items-center bg-gradient-to-r from-orange-100 to-blue-100 text-orange-700 px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg backdrop-blur-sm border border-orange-200"
          >
            <Building className="h-5 w-5 mr-2" />
            <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
              Our Business Divisions
            </span>
          </motion.div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Comprehensive{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              C&F Solutions
            </span>
          </h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            For smooth and efficient functioning, <strong className="text-gray-800">Krishna Care</strong> has specialized{" "}
            <span className="font-semibold text-orange-600">DIVISIONS</span> including our renowned{" "}
            "Pesticides Division" and "Pharma Division" - your trusted C&F Agent for entire Chhattisgarh.
          </motion.p>
        </motion.div>

        {/* Client Logos Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              TRUSTED BY LEADING COMPANIES
            </span>
          </div>
          
          <div className="relative overflow-hidden bg-white/50 backdrop-blur-sm rounded-2xl p-6">
            {/* Scrolling logos container */}
            <motion.div
              className="flex space-x-12 items-center"
              animate={{
                x: [0, -1920]
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ width: 'calc(200% + 48px)' }}
            >
              {/* First set of logos */}
              <div className="flex space-x-12 items-center flex-shrink-0">
                <div className="h-12 w-32 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">UNJHA PHARMA</span>
                </div>
                <div className="h-12 w-32 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">BHARAT SERUMS</span>
                </div>
                <div className="h-12 w-32 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">SINAG HEALTH</span>
                </div>
                <div className="h-12 w-32 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">MORWELL</span>
                </div>
                <div className="h-12 w-32 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">BAYER</span>
                </div>
                <div className="h-12 w-32 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">UPL LIMITED</span>
                </div>
                <div className="h-12 w-32 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">SYNGENTA</span>
                </div>
                <div className="h-12 w-32 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">ASIAN PAINTS</span>
                </div>
                <div className="h-12 w-32 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">BERGER</span>
                </div>
                <div className="h-12 w-32 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">NEROLAC</span>
                </div>
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex space-x-12 items-center flex-shrink-0">
                <div className="h-12 w-32 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">UNJHA PHARMA</span>
                </div>
                <div className="h-12 w-32 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">BHARAT SERUMS</span>
                </div>
                <div className="h-12 w-32 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">SINAG HEALTH</span>
                </div>
                <div className="h-12 w-32 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">MORWELL</span>
                </div>
                <div className="h-12 w-32 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">BAYER</span>
                </div>
                <div className="h-12 w-32 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">UPL LIMITED</span>
                </div>
                <div className="h-12 w-32 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">SYNGENTA</span>
                </div>
                <div className="h-12 w-32 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">ASIAN PAINTS</span>
                </div>
                <div className="h-12 w-32 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">BERGER</span>
                </div>
                <div className="h-12 w-32 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">NEROLAC</span>
                </div>
              </div>
            </motion.div>
            
            {/* Gradient overlays for smooth fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
          </div>
        </motion.div>

        {/* Premium Tabs Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative mb-16"
        >
          {/* Auto-play Progress Indicator */}
          {isAutoPlaying && (
            <motion.div
              className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-lg z-10"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          )}
          
          <div className="flex flex-wrap justify-center gap-3">
          {divisions.map((division, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ 
                scale: activeTab === index ? 1.02 : 1.05,
                y: -2
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleTabClick(index)}
              className={`group flex items-center px-8 py-4 rounded-2xl font-semibold transition-all duration-500 relative overflow-hidden ${
                activeTab === index
                  ? `${division.color} text-white shadow-2xl shadow-orange-500/25`
                  : 'bg-white/70 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-xl border border-gray-200'
              }`}
            >
              {/* Premium Background Effect for Active Tab */}
              {activeTab === index && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              
              <division.icon className={`h-6 w-6 mr-3 relative z-10 transition-transform duration-300 ${
                activeTab === index ? 'scale-110' : 'group-hover:scale-105'
              }`} />
              <span className="relative z-10 text-lg">{division.name}</span>
              
              {/* Premium Glow Effect */}
              {activeTab === index && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 opacity-50 blur-xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </motion.button>
          ))}
          </div>
        </motion.div>

        {/* Premium Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.95 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            {/* Premium Glass Card */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/20 relative overflow-hidden">
              {/* Elegant Background Pattern */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-orange-100/30 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-100/30 to-transparent rounded-full blur-3xl"></div>
              
              <div className="grid lg:grid-cols-2 gap-16 items-start relative z-10">
                {/* Premium Division Info */}
                <div className="space-y-10">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    <div className="flex items-center mb-6">
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: "spring", bounce: 0.5 }}
                        className={`${divisions[activeTab].color} p-4 rounded-2xl text-white mr-6 shadow-lg`}
                      >
                        {(() => {
                          const IconComponent = divisions[activeTab].icon
                          return <IconComponent className="h-10 w-10" />
                        })()}
                      </motion.div>
                      <div>
                        <h3 className="text-4xl font-bold text-gray-900 mb-2">
                          {divisions[activeTab].name}
                        </h3>
                        <div className={`w-20 h-1 ${divisions[activeTab].color} rounded-full`}></div>
                      </div>
                    </div>
                    <p className="text-xl text-gray-600 leading-relaxed font-medium">
                      {divisions[activeTab].description}
                    </p>
                  </motion.div>

                  {/* Premium Features */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <span className={`w-3 h-3 ${divisions[activeTab].color} rounded-full mr-3`}></span>
                      Premium Services
                    </h4>
                    <div className="grid grid-cols-1 gap-4">
                      {divisions[activeTab].features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                          className="flex items-center group"
                        >
                          <div className="bg-green-100 p-2 rounded-xl mr-4 group-hover:bg-green-200 transition-colors">
                            <CheckCircle className="h-6 w-6 text-green-600" />
                          </div>
                          <span className="text-gray-800 text-lg font-medium group-hover:text-gray-900 transition-colors">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Premium Clients List */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <div className="flex items-center justify-between mb-8">
                    <h4 className="text-2xl font-bold text-gray-900 flex items-center">
                      <span className={`w-3 h-3 ${divisions[activeTab].color} rounded-full mr-3`}></span>
                      Our Elite Clients
                    </h4>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.6, type: "spring" }}
                      className={`inline-flex items-center ${divisions[activeTab].color} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}
                    >
                      <Building className="h-4 w-4 mr-2" />
                      {divisions[activeTab].clients.length} Partners
                    </motion.div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-white to-gray-50/50 rounded-2xl p-6 shadow-xl border border-gray-100/50 backdrop-blur-sm">
                    <div className="max-h-96 overflow-y-auto custom-scrollbar">
                      <div className="space-y-3">
                        {divisions[activeTab].clients.map((client, index) => (
                          <motion.div
                            key={`${activeTab}-${index}`}
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: 0.6 + index * 0.05, duration: 0.5 }}
                            className="group relative flex items-center p-4 bg-white/80 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100/50 overflow-hidden hover:border-blue-200"
                          >
                            {/* Highlight Wave Effect */}
                            <motion.div
                              className={`absolute inset-0 bg-gradient-to-r ${divisions[activeTab].color.replace('bg-', 'from-')} to-transparent opacity-0`}
                              animate={{ 
                                opacity: [0, 0.1, 0],
                                x: [-100, 100]
                              }}
                              transition={{ 
                                delay: 1 + index * 0.1,
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 3
                              }}
                            />
                            
                            <motion.div 
                              className={`w-4 h-4 ${divisions[activeTab].color} rounded-full mr-4 flex-shrink-0 shadow-lg relative z-10`}
                              animate={{ 
                                scale: [1, 1.2, 1],
                                boxShadow: [
                                  '0 0 0 0 rgba(249, 115, 22, 0.4)',
                                  '0 0 0 10px rgba(249, 115, 22, 0)',
                                  '0 0 0 0 rgba(249, 115, 22, 0)'
                                ]
                              }}
                              transition={{ 
                                delay: 1.5 + index * 0.1,
                                duration: 1.5,
                                repeat: Infinity,
                                repeatDelay: 4
                              }}
                            />
                            
                            {/* Client Content */}
                            {typeof client === 'string' ? (
                              <span className="text-gray-800 font-semibold text-sm group-hover:text-gray-900 transition-colors relative z-10">
                                {client}
                              </span>
                            ) : (
                              <a
                                href={client.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 text-gray-800 font-semibold text-sm group-hover:text-blue-600 transition-all duration-300 relative z-10 hover:underline hover:shadow-sm"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  handleClientClick(client.name, client.website)
                                }}
                                title={`Visit ${client.name} website`}
                              >
                                <span className="relative">
                                  {client.name}
                                  {/* Subtle glow effect for links */}
                                  <span className="absolute inset-0 bg-blue-100/30 opacity-0 group-hover:opacity-100 transition-opacity rounded blur-sm -z-10"></span>
                                </span>
                              </a>
                            )}
                            
                            <motion.div
                              className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity relative z-10 flex items-center space-x-2"
                              initial={{ scale: 0 }}
                              whileHover={{ scale: 1 }}
                            >
                              {typeof client !== 'string' && (
                                <motion.div
                                  className="relative p-1 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors cursor-pointer"
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  title="Visit company website"
                                >
                                  <ExternalLink className="h-3 w-3 text-blue-600" />
                                  {/* Tooltip */}
                                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                                    Visit Website
                                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                                  </div>
                                </motion.div>
                              )}
                              <CheckCircle className="h-4 w-4 text-green-500" />
                            </motion.div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Premium Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="relative overflow-hidden rounded-3xl">
            {/* Premium Background with Animated Gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-500 to-orange-600 opacity-90"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
            
            {/* Floating Elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-4 left-4 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
            
            <div className="relative z-10 p-12 lg:p-16 text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="max-w-4xl mx-auto"
              >
                <h4 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                  Ready to Partner with{" "}
                  <span className="bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent">
                    Krishna Care?
                  </span>
                </h4>
                <p className="text-xl text-orange-100 mb-8 leading-relaxed max-w-3xl mx-auto">
                  Join our prestigious client portfolio and experience excellence in clearing and forwarding services. 
                  Let's build a partnership that drives your business forward.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-orange-600 px-8 py-4 rounded-2xl hover:bg-gray-50 transition-all duration-300 font-bold text-lg shadow-2xl group"
                  >
                    <span className="flex items-center">
                      Get Started Today
                      <motion.div
                        className="ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.div>
                    </span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white/30 text-white px-8 py-4 rounded-2xl hover:bg-white/10 transition-all duration-300 font-semibold text-lg backdrop-blur-sm"
                  >
                    Learn More
                  </motion.button>
                </div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="mt-8 flex justify-center items-center space-x-8 text-orange-200"
                >
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span className="text-sm font-medium">25+ Years Experience</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span className="text-sm font-medium">169,000+ Sq Ft Facilities</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span className="text-sm font-medium">Pan-Chhattisgarh Coverage</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DivisionsSection
