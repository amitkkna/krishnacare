'use client'

import { motion } from 'framer-motion'
import { Building2, Users, Award } from 'lucide-react'

const SisterCompanies = () => {
  const companies = [
    {
      name: "Krishna Care",
      logo: "/images/sister-companies/krishna-care.jpg",
      description: "Leading C&F Agent with 25+ years of experience",
      specialty: "Agricultural & Pharmaceutical Logistics"
    },
    {
      name: "Asha Enterprises",
      logo: "/images/sister-companies/asha-enterprises.jpg", 
      description: "Diversified business operations",
      specialty: "Multi-sector Solutions"
    },
    {
      name: "GMD",
      logo: "/images/sister-companies/gmd.jpg",
      description: "Premium business services",
      specialty: "Corporate Solutions"
    },
    {
      name: "MRL",
      logo: "/images/sister-companies/mrl.jpg",
      description: "Specialized industrial services",
      specialty: "Industrial Operations"
    },
    {
      name: "Akshat Fuels",
      logo: "/images/sister-companies/akshat-fuels.jpg",
      description: "Fuel and energy solutions",
      specialty: "Petrols Pumps & Energy"
    },
    {
      name: "Agrawal Coal Sales Corporation",
      logo: "/images/sister-companies/coal-business.jpg",
      description: "Coal trading and distribution",
      specialty: "Coals Business"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Building2 className="h-4 w-4 mr-2" />
            Group Companies
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Sister Companies</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A diversified group of companies working together to provide comprehensive 
            business solutions across multiple industries and sectors.
          </p>
        </motion.div>

        {/* Companies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Company Logo Area */}
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-20 h-20 bg-blue-600 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-xl font-bold">
                    {company.name.split(' ').map(word => word[0]).join('').slice(0, 3)}
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2">
                    <p className="text-gray-700 font-medium text-xs">Company Logo</p>
                  </div>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Company Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {company.name}
                </h3>
                <p className="text-blue-600 font-semibold text-sm mb-3">
                  {company.specialty}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {company.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Group Strength */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Collective Group Strength
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Together, our sister companies form a powerful network of expertise, 
              resources, and capabilities across diverse business sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Building2 className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">6+</h4>
              <p className="text-gray-600">Sister Companies</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">500+</h4>
              <p className="text-gray-600">Combined Workforce</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">25+</h4>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SisterCompanies
