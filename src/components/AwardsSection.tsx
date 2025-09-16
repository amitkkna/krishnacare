'use client'

import { motion } from 'framer-motion'
import { Award, Shield, TrendingUp, Users, CheckCircle, Calendar, Building2, Globe } from 'lucide-react'

const AwardsSection = () => {
  const achievements = [
    {
      icon: Award,
      title: "Excellence in Logistics 2023",
      organization: "India Logistics Awards",
      year: "2023",
      description: "Recognized for outstanding performance in agricultural supply chain management",
      color: "from-yellow-400 to-amber-500"
    },
    {
      icon: Shield,
      title: "ISO 9001:2015 Certified",
      organization: "International Organization for Standardization",
      year: "2022",
      description: "Quality management systems certification for consistent service delivery",
      color: "from-blue-400 to-indigo-500"
    },
    {
      icon: TrendingUp,
      title: "Best C&F Agent - Chhattisgarh",
      organization: "State Logistics Council",
      year: "2023",
      description: "Top performer in clearing & forwarding services across the state",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: Building2,
      title: "Warehousing Excellence Award",
      organization: "Indian Warehousing Association",
      year: "2022",
      description: "Outstanding infrastructure and storage facility management",
      color: "from-purple-400 to-violet-500"
    }
  ]

  const certifications = [
    {
      name: "ISO 9001:2015",
      type: "Quality Management",
      validUntil: "2025",
      issuer: "ISO"
    },
    {
      name: "FSSAI Licensed",
      type: "Food Safety Standards",
      validUntil: "2024",
      issuer: "FSSAI"
    },
    {
      name: "Drug License",
      type: "Pharmaceutical Handling",
      validUntil: "2025",
      issuer: "State FDA"
    },
    {
      name: "GST Registration",
      type: "Tax Compliance",
      validUntil: "Active",
      issuer: "Government of India"
    }
  ]

  const milestones = [
    { year: "1995", event: "Krishna Care Founded", icon: Building2 },
    { year: "2000", event: "First Pharma Partnership", icon: Shield },
    { year: "2005", event: "Multi-State Operations", icon: Globe },
    { year: "2010", event: "ISO Certification", icon: Award },
    { year: "2015", event: "100+ Client Milestone", icon: Users },
    { year: "2020", event: "Digital Transformation", icon: TrendingUp },
    { year: "2023", event: "25 Years of Excellence", icon: CheckCircle }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-l from-green-500 to-emerald-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-30"></div>
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
            className="inline-flex items-center bg-gradient-to-r from-orange-500/20 to-amber-500/20 backdrop-blur-lg text-orange-300 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg border border-orange-500/30"
            whileHover={{ scale: 1.05 }}
          >
            <Award className="h-5 w-5 mr-2" />
            AWARDS & RECOGNITION
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Celebrating{" "}
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            25+ years of dedication recognized by industry leaders and regulatory bodies
          </p>
        </motion.div>

        {/* Awards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 h-full"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div
                  className={`bg-gradient-to-r ${achievement.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  animate={{ 
                    boxShadow: [
                      `0 4px 20px rgba(249, 115, 22, 0.3)`,
                      `0 8px 30px rgba(249, 115, 22, 0.4)`,
                      `0 4px 20px rgba(249, 115, 22, 0.3)`
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <achievement.icon className="h-8 w-8 text-white" />
                </motion.div>
                
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors">
                    {achievement.title}
                  </h3>
                  <span className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {achievement.year}
                  </span>
                </div>
                
                <p className="text-orange-300 font-medium mb-3">
                  {achievement.organization}
                </p>
                
                <p className="text-gray-300 leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Certifications & Licenses
            </span>
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center group"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                >
                  <Shield className="h-6 w-6 text-white" />
                </motion.div>
                
                <h4 className="font-bold text-white mb-2">{cert.name}</h4>
                <p className="text-blue-300 text-sm mb-2">{cert.type}</p>
                <p className="text-gray-400 text-xs">Valid until: {cert.validUntil}</p>
                <p className="text-orange-300 text-xs font-medium mt-1">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Journey of Excellence
            </span>
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-orange-500 via-amber-500 to-green-500 h-full rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <motion.div
                      className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-2xl font-bold text-orange-400">{milestone.year}</span>
                        <milestone.icon className="h-6 w-6 text-emerald-400" />
                      </div>
                      <h4 className="text-lg font-semibold text-white">{milestone.event}</h4>
                    </motion.div>
                  </div>
                  
                  {/* Timeline Node */}
                  <motion.div
                    className="relative z-10 w-4 h-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full border-4 border-gray-900"
                    whileInView={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full animate-ping opacity-30"></div>
                  </motion.div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AwardsSection