'use client'

import { motion } from 'framer-motion'

const PhotoGallery = () => {
  const galleryImages = [
    {
      title: 'Modern Warehousing Facilities',
      description: 'State-of-the-art storage facilities with climate control for optimal fertilizer preservation',
      category: 'Infrastructure',
      placeholder: 'warehouse-facility.jpg',
      bgImage: 'url(/images/gallery/warehouse-modern.jpg)',
      icon: '🏭'
    },
    {
      title: 'Agricultural Fields & Spraying',
      description: 'Aerial view of precision spraying operations ensuring optimal crop nutrition and protection',
      category: 'Agriculture',
      placeholder: 'tractor-spraying-fields.jpg',
      bgImage: 'url(/images/gallery/tractor-spraying.jpg)',
      icon: '🚜'
    },
    {
      title: 'Transportation Fleet',
      description: 'Our modern transportation fleet ensuring safe and timely delivery across India',
      category: 'Logistics',
      placeholder: 'transportation-fleet.jpg',
      bgImage: 'url(/images/gallery/logistics-fleet.jpg)',
      icon: '🚛'
    },
    {
      title: 'Quality Control Laboratory',
      description: 'Advanced laboratory facilities for quality testing and compliance assurance',
      category: 'Quality',
      placeholder: 'quality-control-lab.jpg',
      bgImage: 'url(/images/gallery/quality-lab.jpg)',
      icon: '🔬'
    },
    {
      title: 'Port & Customs Operations',
      description: 'Efficient port handling and customs clearance operations for seamless import/export',
      category: 'Operations',
      placeholder: 'port-operations.jpg',
      bgImage: 'url(/images/gallery/port-operations.jpg)',
      icon: '🚢'
    },
    {
      title: 'Farmer Community Partnerships',
      description: 'Building strong relationships with farmers across agricultural communities in India',
      category: 'Community',
      placeholder: 'farmer-partnership.jpg',
      bgImage: 'url(/images/gallery/farmer-community.jpg)',
      icon: '👥'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-4">
            Our Operations in Action
          </h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-6">
            Visual Journey Through
            <span className="text-primary-600"> Krishna Care</span>
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Take a visual tour of our world-class facilities, operations, and the agricultural communities we serve across India.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-4"
                   style={{
                     backgroundImage: image.bgImage,
                     backgroundSize: 'cover',
                     backgroundPosition: 'center'
                   }}>
                {/* Gradient Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                  {/* Category Badge */}
                  <div>
                    <span className="bg-green-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                      {image.category}
                    </span>
                  </div>
                  
                  {/* Bottom Content */}
                  <div>
                    {/* Icon */}
                    <div className="text-3xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                      {image.icon}
                    </div>
                    
                    {/* Title */}
                    <h4 className="text-lg font-bold mb-1 group-hover:text-green-300 transition-colors duration-300">
                      {image.title}
                    </h4>
                    
                    {/* Description */}
                    <p className="text-gray-200 text-xs leading-relaxed line-clamp-2">
                      {image.description}
                    </p>
                  </div>
                </div>
                
                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-green-400 rounded-xl transition-all duration-300"></div>
              </div>
              
              {/* Additional info below image (optional) */}
              <div className="space-y-1">
                <div className="flex items-center text-sm text-gray-500">
                  <span>{image.category}</span>
                  <span className="mx-2">•</span>
                  <span>Krishna Care Operations</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              Experience Krishna Care Excellence
            </h4>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Visit our facilities and see how we're revolutionizing agricultural logistics in India. 
              Schedule a tour of our operations and discover the Krishna Care difference.
            </p>
            <button className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold">
              Schedule a Facility Tour
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PhotoGallery
