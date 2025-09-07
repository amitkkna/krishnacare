'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Star, Shield, Clock, Users, Zap } from 'lucide-react'

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: 'Proven Reliability',
      description: 'Over 25 years of consistent service with zero major incidents. Our track record speaks for itself.',
      stats: '99.9% On-time Delivery'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals who understand the nuances of agricultural logistics and regulatory compliance.',
      stats: '50+ Specialists'
    },
    {
      icon: Zap,
      title: 'Technology-Driven',
      description: 'State-of-the-art tracking systems, automated processes, and real-time monitoring for complete transparency.',
      stats: 'Real-time Tracking'
    },
    {
      icon: Star,
      title: 'Customer-Centric',
      description: 'Dedicated account managers and 24/7 support ensure your needs are always our top priority.',
      stats: '24/7 Support'
    },
    {
      icon: Clock,
      title: 'Fast Processing',
      description: 'Streamlined processes and strategic partnerships enable faster clearance and reduced transit times.',
      stats: '50% Faster Processing'
    },
    {
      icon: CheckCircle,
      title: 'Comprehensive Coverage',
      description: 'Pan-India network with local expertise in every major agricultural market across the country.',
      stats: '28 States Covered'
    }
  ]

  const achievements = [
    { number: '25+', label: 'Years of Excellence', suffix: '' },
    { number: '200', label: 'Happy Clients', suffix: '+' },
    { number: '500', label: 'Projects Completed', suffix: '+' },
    { number: '99.9', label: 'On-time Delivery', suffix: '%' },
    { number: '28', label: 'States Covered', suffix: '' },
    { number: '24', label: 'Hours Support', suffix: '/7' },
  ]

  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-4">
            Why Choose Krishna Care
          </h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-6">
            The Clear Choice for 
            <span className="text-primary-600"> Agricultural Logistics</span>
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            When it comes to clearing and forwarding in the agricultural sector, Krishna Care stands apart. Here's why leading companies trust us with their most critical logistics needs.
          </p>
        </motion.div>

        {/* Main Reasons Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 p-3 rounded-lg group-hover:bg-primary-200 transition-colors flex-shrink-0">
                  <reason.icon className="h-6 w-6 text-primary-600" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{reason.title}</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">{reason.description}</p>
                  <div className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium inline-block">
                    {reason.stats}
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
          className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Achievements</h3>
            <p className="text-lg text-gray-600">
              Numbers that reflect our commitment to excellence and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">
                  {achievement.number}
                  <span className="text-secondary-600">{achievement.suffix}</span>
                </div>
                <p className="text-sm text-gray-600 font-medium">{achievement.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Competitive Advantages */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Competitive Edge</h3>
            <p className="text-lg text-gray-600">
              What sets Krishna Care apart in the competitive logistics landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              {[
                {
                  title: 'Deep Industry Knowledge',
                  description: 'Specialized understanding of fertilizer handling, storage requirements, and agricultural supply chain dynamics.'
                },
                {
                  title: 'Regulatory Expertise',
                  description: 'In-depth knowledge of agricultural import/export regulations, ensuring smooth clearance processes.'
                },
                {
                  title: 'Strategic Partnerships',
                  description: 'Strong relationships with ports, customs, and transportation providers for seamless operations.'
                },
                {
                  title: 'Customized Solutions',
                  description: 'Tailored logistics solutions designed specifically for each client\'s unique requirements.'
                }
              ].map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{advantage.title}</h4>
                    <p className="text-gray-600 text-sm">{advantage.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-primary-600 text-white p-6 rounded-full mx-auto mb-4 w-24 h-24 flex items-center justify-center">
                    <Star className="h-12 w-12" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Excellence Award</h4>
                  <p className="text-gray-600">Recognized as the leading C&F agent in agricultural logistics</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs font-medium text-gray-700">24/7 Active</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3">
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-primary-600" />
                  <span className="text-xs font-medium text-gray-700">Fully Insured</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs
