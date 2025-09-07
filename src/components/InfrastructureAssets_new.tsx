'use client'

import { motion } from 'framer-motion'
import { Building, Truck, Users, Award, MapPin, Phone, Wifi, Camera } from 'lucide-react'

const InfrastructureAssets = () => {
  const warehouses = [
    {
      location: "Gondwara Raipur (Head Office)",
      area: "36,000 sq ft",
      type: "Modern Computerized Complex",
      features: [
        "Fully air-conditioned corporate office (6,000 sq ft)",
        "Conference room with A/V conferencing facilities", 
        "Modern communication: Phone, Fax, EPBX, Modem",
        "Dual online UPS system with no power cuts",
        "CCTV surveillance and security systems",
        "Advanced computer systems with high-speed printers"
      ],
      address: "Plot No. 12/4, 12/1, Phase no. 108, Near Lingraj Cold Storage, Behind Durga Petrol Pump, Ring Road No., Gondwara Raipur (C.G.)"
    },
    {
      location: "Gondwara Raipur (New Building)",
      area: "90,000 sq ft",
      type: "Multinational Hub Complex",
      features: [
        "6,000 sq ft fully air-conditioned corporate office",
        "Conference rooms and manager cabins",
        "2 online UPS systems for uninterrupted power",
        "Dual telephone lines and networking for all staff",
        "72,000 sq ft available space for expansion",
        "24 years remaining lease period"
      ]
    },
    {
      location: "Tatibandh Raipur",
      area: "24,000 sq ft",
      type: "Distribution Center",
      features: [
        "Strategic location for distribution",
        "Modern loading facilities",
        "Security systems installed",
        "Easy access to transport routes"
      ]
    },
    {
      location: "Tatibandh Raipur (Unit 2)",
      area: "19,000 sq ft", 
      type: "Storage Facility",
      features: [
        "Additional storage capacity",
        "Climate controlled environment",
        "24/7 security monitoring",
        "Efficient inventory management"
      ]
    },
    {
      location: "Shanker Nagar Raipur",
      area: "2,000 sq ft",
      type: "Corporate Office",
      features: [
        "Modern office facilities",
        "Central location access",
        "Client meeting rooms",
        "Administrative operations"
      ]
    }
  ]

  const teamMembers = [
    { name: "Krishna Kumar", role: "Operations Manager", department: "Warehouse Operations" },
    { name: "Rajesh Sharma", role: "Logistics Head", department: "Transportation" },
    { name: "Priya Verma", role: "Quality Controller", department: "Quality Assurance" },
    { name: "Amit Singh", role: "IT Manager", department: "Technology" },
    { name: "Sunita Devi", role: "Admin Executive", department: "Administration" },
    { name: "Ravi Kumar", role: "Security Chief", department: "Security & Safety" }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Infrastructure & Assets</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our state-of-the-art facilities and infrastructure support seamless logistics operations
          </p>
        </motion.div>

        {/* Infrastructure Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          <div className="bg-white p-6 rounded-xl shadow-lg text-center border border-gray-100">
            <Building className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">169K+</h3>
            <p className="text-gray-600">Sq Ft Total Space</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center border border-gray-100">
            <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">5+</h3>
            <p className="text-gray-600">Strategic Locations</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center border border-gray-100">
            <Truck className="h-12 w-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">17+</h3>
            <p className="text-gray-600">Vehicle Fleet</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center border border-gray-100">
            <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">100+</h3>
            <p className="text-gray-600">Team Members</p>
          </div>
        </motion.div>

        {/* Warehouse Facilities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Warehouse Facilities</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {warehouses.map((warehouse, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{warehouse.location}</h4>
                    <p className="text-blue-600 font-semibold">{warehouse.area}</p>
                    <p className="text-gray-600 text-sm">{warehouse.type}</p>
                    {warehouse.address && (
                      <p className="text-gray-500 text-xs mt-2">{warehouse.address}</p>
                    )}
                  </div>
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Building className="h-6 w-6 text-blue-600" />
                  </div>
                </div>

                <div className="space-y-2">
                  {warehouse.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-600 text-sm">{feature}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology & Equipment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technology & Equipment</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl">
              <Camera className="h-12 w-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-4">Security Systems</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• CCTV surveillance network</li>
                <li>• 24/7 monitoring systems</li>
                <li>• Access control systems</li>
                <li>• Fire safety equipment</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl">
              <Wifi className="h-12 w-12 text-green-600 mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-4">Communication</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• High-speed internet connectivity</li>
                <li>• EPBX telephone systems</li>
                <li>• Video conferencing facilities</li>
                <li>• Mobile communication network</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-xl">
              <Award className="h-12 w-12 text-orange-600 mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-4">Quality Standards</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• ISO certified processes</li>
                <li>• Quality control systems</li>
                <li>• Regular safety audits</li>
                <li>• Compliance monitoring</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Team Members */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Team</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h4>
                <p className="text-blue-600 font-semibold text-sm mb-1">{member.role}</p>
                <p className="text-gray-500 text-xs">{member.department}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default InfrastructureAssets
