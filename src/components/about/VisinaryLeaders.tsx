'use client'

import { motion } from 'framer-motion'
import { Award, Users, Target, Globe } from 'lucide-react'

export default function VisinaryLeaders() {
  const leaders = [
    {
      name: "Mr. Krishna Kumar Agrawal",
      position: "Chairman & Founder",
      image: "/images/leadership/krishna-kumar.jpg",
      description: "Founder member & milestone of our organization, committed to total service satisfaction by identifying service-oriented needs, translating them into Quality service. This commitment is the corner stone of our Quality service, and we strive to achieve it by putting into place a Quality service.",
      vision: "He plans to achieve this goal through our strength - the Employees; and seek their continuous involvement in achieving the organization objectives. We all are here because of their hard work.",
      experience: "25+ Years",
      specialization: "Agricultural Logistics"
    },
    {
      name: "Dr. Manoj Kumar Agrawal",
      position: "Managing Director & Founder",
      image: "/images/leadership/manoj-kumar.jpg",
      description: "The managing director & founder member of the company. He has sound experience in the Pharmaceutical, Agriculture & Paints industries CFA operation. He is the prime mover for various strategic alliances & growth plans of the company.",
      vision: "His main motto is to create C&F Company which is \"A Global C&F\" company with great commitment to a healthier business.",
      experience: "20+ Years",
      specialization: "Multi-Industry Operations"
    }
  ]

  const achievements = [
    {
      icon: Award,
      title: "Industry Recognition",
      value: "15+",
      description: "Awards for excellence in logistics"
    },
    {
      icon: Users,
      title: "Team Strength",
      value: "100+",
      description: "Dedicated professionals"
    },
    {
      icon: Target,
      title: "Client Satisfaction",
      value: "98%",
      description: "Customer retention rate"
    },
    {
      icon: Globe,
      title: "Pan India Presence",
      value: "10+",
      description: "Cities served across India"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50/30 to-amber-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Users className="h-5 w-5 mr-2" />
            Leadership Excellence
          </motion.div>
          
          <motion.h2 
            className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Meet Our{" "}
            <span className="bg-gradient-to-r from-orange-600 via-red-500 to-amber-600 bg-clip-text text-transparent">
              Visionary Leaders
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Our leadership team brings decades of experience in agricultural logistics, 
            pharmaceutical supply chain, and strategic business development, guiding Krishna Care 
            towards excellence with visionary leadership.
          </motion.p>
          
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mt-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Leaders Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div 
                className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 border border-orange-100/50 relative"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Animated Background Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    background: [
                      'radial-gradient(circle at 0% 0%, rgba(239, 119, 34, 0.05) 0%, transparent 50%)',
                      'radial-gradient(circle at 100% 100%, rgba(251, 146, 60, 0.05) 0%, transparent 50%)',
                      'radial-gradient(circle at 0% 0%, rgba(239, 119, 34, 0.05) 0%, transparent 50%)',
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                {/* Leader Image */}
                <div className="relative h-80 bg-gradient-to-br from-orange-100 via-amber-100 to-orange-200">
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-center p-8">
                      <motion.div 
                        className="w-32 h-32 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold shadow-2xl"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        {leader.name.split(' ').map(n => n[0]).join('')}
                      </motion.div>
                      <motion.div 
                        className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <p className="text-gray-700 font-medium text-sm">Professional Photo</p>
                        <p className="text-xs text-gray-500">{leader.image}</p>
                      </motion.div>
                    </div>
                  </motion.div>
                  
                  {/* Experience Badge */}
                  <motion.div 
                    className="absolute top-4 right-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      {leader.experience}
                    </span>
                  </motion.div>
                </div>

                {/* Leader Content */}
                <div className="p-8 relative z-10">
                  <motion.div 
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {leader.name}
                    </h3>
                    <p className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent font-semibold text-lg mb-2">
                      {leader.position}
                    </p>
                    <p className="text-gray-500 text-sm font-medium">
                      Specialization: {leader.specialization}
                    </p>
                  </motion.div>

                  <div className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
                          <Users className="h-3 w-3 text-white" />
                        </div>
                        <h4 className="font-bold text-gray-900">About</h4>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed pl-8">
                        {leader.description}
                      </p>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                          <Target className="h-3 w-3 text-white" />
                        </div>
                        <h4 className="font-bold text-gray-900">Vision</h4>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed pl-8">
                        {leader.vision}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <motion.div 
            className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated Background Pattern */}
            <motion.div
              className="absolute inset-0 opacity-10"
              animate={{
                background: [
                  'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.2) 0%, transparent 50%)',
                  'radial-gradient(circle at 80% 80%, rgba(255,255,255,0.2) 0%, transparent 50%)',
                  'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.2) 0%, transparent 50%)',
                ]
              }}
              transition={{ duration: 6, repeat: Infinity }}
            />

            <div className="relative z-10">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl lg:text-5xl font-bold mb-4">
                  Leadership Achievements
                </h3>
                <p className="text-orange-100 text-lg max-w-2xl mx-auto leading-relaxed">
                  Our leadership has consistently delivered exceptional results across multiple industries, 
                  driving innovation and excellence in healthcare solutions
                </p>
              </motion.div>

              <div className="grid md:grid-cols-4 gap-8">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center group"
                  >
                    <motion.div 
                      className="bg-white/20 backdrop-blur-sm p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <achievement.icon className="h-8 w-8" />
                    </motion.div>
                    
                    <motion.h4 
                      className="text-3xl lg:text-4xl font-bold mb-2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ 
                        delay: 0.6 + index * 0.1, 
                        type: "spring", 
                        stiffness: 200 
                      }}
                      viewport={{ once: true }}
                    >
                      {achievement.value}
                    </motion.h4>
                    
                    <h5 className="text-lg font-semibold mb-1">{achievement.title}</h5>
                    <p className="text-orange-100 text-sm">{achievement.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}