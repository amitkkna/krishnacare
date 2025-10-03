'use client'

import { motion } from 'framer-motion'
import { Building2, Users, Award, Sparkles } from 'lucide-react'

const SisterCompanies = () => {
  const companies = [
    {
      name: "Krishna Care",
      logo: "/images/sister-companies/krishna-care.jpg",
      description: "Leading C&F Agent with 25+ years of experience",
      specialty: "Agricultural & Pharmaceutical Logistics",
      gradient: "from-luxury-gold-500 to-luxury-gold-600"
    },
    {
      name: "Asha Enterprises",
      logo: "/images/sister-companies/asha-enterprises.jpg",
      description: "Diversified business operations",
      specialty: "Multi-sector Solutions",
      gradient: "from-luxury-purple-500 to-luxury-purple-600"
    },
    {
      name: "GMD",
      logo: "/images/sister-companies/gmd.jpg",
      description: "Premium business services",
      specialty: "Corporate Solutions",
      gradient: "from-luxury-teal-500 to-luxury-teal-600"
    },
    {
      name: "MRL",
      logo: "/images/sister-companies/mrl.jpg",
      description: "Specialized industrial services",
      specialty: "Industrial Operations",
      gradient: "from-luxury-rose-500 to-luxury-rose-600"
    },
    {
      name: "Akshat Fuels",
      logo: "/images/sister-companies/akshat-fuels.jpg",
      description: "Fuel and energy solutions",
      specialty: "Petrols Pumps & Energy",
      gradient: "from-accent-emerald-500 to-accent-emerald-600"
    },
    {
      name: "Agrawal Coal Sales Corporation",
      logo: "/images/sister-companies/coal-business.jpg",
      description: "Coal trading and distribution",
      specialty: "Coals Business",
      gradient: "from-secondary-500 to-secondary-600"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-r from-luxury-gold-200/30 to-luxury-purple-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-l from-luxury-teal-200/30 to-luxury-rose-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center glass-strong text-luxury-gold-700 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-glow-gold"
            whileHover={{ scale: 1.05 }}
          >
            <Building2 className="h-5 w-5 mr-2" />
            OUR GROUP COMPANIES
          </motion.div>

          <h2 className="text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight">
            Our <span className="text-gradient-royal">Sister Companies</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A diversified group of companies working together to provide comprehensive
            business solutions across multiple industries and sectors.
          </p>
        </motion.div>

        {/* Companies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${company.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500 blur-xl`}></div>

              <div className="relative card-luxury bg-white border border-gray-100 group-hover:border-white/50">
                {/* Company Logo Area */}
                <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center rounded-t-3xl overflow-hidden">
                  <div className="text-center p-6 z-10">
                    <motion.div
                      className={`w-20 h-20 bg-gradient-to-br ${company.gradient} rounded-2xl mx-auto mb-3 flex items-center justify-center text-white text-xl font-bold shadow-luxury group-hover:shadow-glow-gold transition-all duration-300`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      {company.name.split(' ').map(word => word[0]).join('').slice(0, 3)}
                    </motion.div>
                    <div className="glass px-3 py-1 rounded-lg inline-block">
                      <p className="text-gray-700 font-semibold text-xs">Company Logo</p>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${company.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                </div>

                {/* Company Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gradient-royal transition-all duration-300">
                    {company.name}
                  </h3>
                  <p className={`text-transparent bg-gradient-to-r ${company.gradient} bg-clip-text font-semibold text-sm mb-3`}>
                    {company.specialty}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {company.description}
                  </p>
                </div>
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
          className="glass-strong rounded-3xl p-8 lg:p-12 shadow-luxury-lg border border-white/20"
        >
          <div className="text-center mb-12">
            <motion.div
              className="inline-flex items-center glass text-luxury-purple-700 px-6 py-3 rounded-full text-sm font-semibold mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="h-4 w-4 mr-2" />
              GROUP STRENGTH
            </motion.div>

            <h3 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
              Collective <span className="text-gradient-gold">Group Strength</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Together, our sister companies form a powerful network of expertise,
              resources, and capabilities across diverse business sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="text-center group"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="bg-gradient-to-br from-luxury-gold-500 to-luxury-gold-600 p-5 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-luxury group-hover:shadow-glow-gold transition-all duration-300"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Building2 className="h-10 w-10 text-white" />
              </motion.div>
              <h4 className="text-3xl font-bold text-gray-900 mb-2">6+</h4>
              <p className="text-gray-600 font-medium">Sister Companies</p>
            </motion.div>

            <motion.div
              className="text-center group"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="bg-gradient-to-br from-luxury-purple-500 to-luxury-purple-600 p-5 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-luxury group-hover:shadow-glow-purple transition-all duration-300"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Users className="h-10 w-10 text-white" />
              </motion.div>
              <h4 className="text-3xl font-bold text-gray-900 mb-2">500+</h4>
              <p className="text-gray-600 font-medium">Combined Workforce</p>
            </motion.div>

            <motion.div
              className="text-center group"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="bg-gradient-to-br from-luxury-teal-500 to-luxury-teal-600 p-5 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-luxury group-hover:shadow-glow-teal transition-all duration-300"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Award className="h-10 w-10 text-white" />
              </motion.div>
              <h4 className="text-3xl font-bold text-gray-900 mb-2">25+</h4>
              <p className="text-gray-600 font-medium">Years of Excellence</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SisterCompanies