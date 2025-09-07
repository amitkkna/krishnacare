'use client'

import { motion } from 'framer-motion'
import { Award, Users, Target, Globe } from 'lucide-react'

const Leadership = () => {
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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Users className="h-4 w-4 mr-2" />
            Leadership Excellence
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Meet Our <span className="text-green-600">Visionary Leaders</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our leadership team brings decades of experience in agricultural logistics, 
            pharmaceutical supply chain, and strategic business development.
          </p>
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
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Leader Image */}
              <div className="relative h-80 bg-gradient-to-br from-green-100 to-blue-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                      <p className="text-gray-700 font-medium text-sm">Professional Photo</p>
                      <p className="text-xs text-gray-500">{leader.image}</p>
                    </div>
                  </div>
                </div>
                
                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {leader.experience}
                  </span>
                </div>
              </div>

              {/* Leader Content */}
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-green-600 font-semibold text-lg mb-2">
                    {leader.position}
                  </p>
                  <p className="text-gray-500 text-sm">
                    Specialization: {leader.specialization}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">About</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {leader.description}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Vision</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {leader.vision}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-8 lg:p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Leadership Achievements
            </h3>
            <p className="text-green-100 text-lg max-w-2xl mx-auto">
              Our leadership has consistently delivered exceptional results across multiple industries
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <achievement.icon className="h-8 w-8" />
                </div>
                <h4 className="text-3xl font-bold mb-2">{achievement.value}</h4>
                <h5 className="text-lg font-semibold mb-1">{achievement.title}</h5>
                <p className="text-green-100 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Leadership
