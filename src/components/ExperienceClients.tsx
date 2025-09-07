'use client'

import { motion } from 'framer-motion'
import { Award, Clock, Shield, CheckCircle, Users, Building } from 'lucide-react'

const ExperienceClients = () => {
  const experienceClients = [
    "Alembic Pharma",
    "Elder Pharmaceuticals Ltd",
    "Morwell Pharmacia Pvt Ltd",
    "Vimax Crop Science Limited",
    "Corona Remedies Pvt Ltd",
    "Lincoln Pharma",
    "Uniphos Seeds & Bio Genetics (P) Ltd",
    "Advanta Seeds",
    "Berger Paints India Ltd",
    "Shreya Life Sciences (P) Ltd",
    "Innov Lite (India) Pvt Ltd",
    "ISAGRO (ASIA) CHEMICAL LTD MUMBAI",
    "JIVAGRO LTD",
    "VINAYAK INDUSTRIES LTD",
    "SUMITOMO",
    "GANPATI AGRO"
  ]

  const achievements = [
    {
      icon: Clock,
      title: "25 Years",
      subtitle: "Operational Experience",
      description: "Quarter-century of expertise in C&F & distribution work"
    },
    {
      icon: Shield,
      title: "100% Compliant",
      subtitle: "Tax Payer Status",
      description: "Complete regulatory compliance with all tax obligations"
    },
    {
      icon: Building,
      title: "Multi-License",
      subtitle: "Authorization",
      description: "Pharma, FMCG, Food, and Agriculture licenses for smooth operations"
    },
    {
      icon: Award,
      title: "Certified",
      subtitle: "Operations",
      description: "Shop establishment license, NOC from fire department"
    }
  ]

  const recognitionPrograms = [
    {
      title: "Employee Recognition",
      description: "Best employee awards based on performance evaluation"
    },
    {
      title: "Team Building",
      description: "Regular team gatherings, games, and celebration activities"
    },
    {
      title: "Festival Celebrations", 
      description: "Company-wide festival and birthday celebrations"
    },
    {
      title: "Certificate Honors",
      description: "Performance-based certificate awards for outstanding employees"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Award className="h-4 w-4 mr-2" />
            Our Experience & Recognition
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            25 Years of <span className="text-purple-600">Proven Excellence</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our organization has 25 years of operational experience in C&F & distribution work, 
            with all necessary licenses and a track record of 100% tax compliance.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <achievement.icon className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{achievement.title}</h3>
              <h4 className="text-lg font-semibold text-purple-600 mb-3">{achievement.subtitle}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Clients Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 lg:p-12 text-white">
            <div className="text-center mb-8">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Our Experience Portfolio
              </h3>
              <p className="text-purple-100 text-lg max-w-3xl mx-auto">
                Companies we have successfully partnered with during our operational journey, 
                demonstrating our expertise across pharmaceutical, agricultural, and industrial sectors.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {experienceClients.map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-3 flex-shrink-0" />
                    <span className="text-white font-medium text-sm">{client}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <Users className="h-5 w-5 mr-2" />
                <span className="font-bold text-lg">{experienceClients.length}+ Companies</span>
                <span className="mx-2">•</span>
                <span>Operational Experience</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Recognition & Awards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Awards & Recognition Program
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our management actively promotes employee engagement through recognition, 
              celebrations, and performance-based awards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recognitionPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-orange-100 p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-6 w-6 text-orange-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{program.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{program.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-gray-50 rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Experience Our Excellence?
              </h4>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Join our distinguished client portfolio and benefit from 25 years of proven expertise 
                in clearing and forwarding services across multiple industries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold">
                  Partner with Us
                </button>
                <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
                  View Portfolio
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ExperienceClients
