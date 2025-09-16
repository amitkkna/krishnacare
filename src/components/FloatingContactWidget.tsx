'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Phone, X, Send } from 'lucide-react'
import { useState } from 'react'

const FloatingContactWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  const toggleWidget = () => {
    setIsOpen(!isOpen)
  }

  const sendWhatsAppMessage = () => {
    const phoneNumber = '+919876543210' // Krishna Care's WhatsApp number
    const defaultMessage = message || 'Hi Krishna Care! I would like to know more about your C&F services.'
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`
    window.open(whatsappURL, '_blank')
    setIsOpen(false)
    setMessage('')
  }

  const callDirectly = () => {
    window.location.href = 'tel:+919876543210'
  }

  return (
    <>
      {/* Main Floating Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, rotate: 180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 2, duration: 0.8, type: "spring", stiffness: 200 }}
      >
        <motion.button
          onClick={toggleWidget}
          className="relative bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/30 transition-all duration-300 group"
          whileHover={{ 
            scale: 1.1,
            rotate: isOpen ? 180 : 360,
            boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)"
          }}
          whileTap={{ scale: 0.9 }}
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(34, 197, 94, 0.4)",
              "0 0 0 20px rgba(34, 197, 94, 0)",
              "0 0 0 0 rgba(34, 197, 94, 0)"
            ]
          }}
          transition={{
            boxShadow: {
              duration: 2,
              repeat: Infinity,
              ease: "easeOut"
            }
          }}
        >
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
          </motion.div>
          
          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
          
          {/* Notification badge */}
          <motion.div
            className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 3, type: "spring", stiffness: 300 }}
          >
            !
          </motion.div>
        </motion.button>

        {/* Tooltip */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              className="absolute bottom-full right-0 mb-2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg"
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.8 }}
              transition={{ delay: 4, duration: 0.3 }}
            >
              Need Help? Chat with us!
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Expanded Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-40 w-80 bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-orange-200/50 overflow-hidden"
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
          >
            {/* Header */}
            <motion.div
              className="bg-gradient-to-r from-orange-500 to-amber-500 text-white p-4 relative overflow-hidden"
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
              <div className="relative z-10 flex items-center">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold">Krishna Care Support</h3>
                  <p className="text-xs text-orange-100">Typically replies instantly</p>
                </div>
              </div>
            </motion.div>

            {/* Chat Area */}
            <motion.div
              className="p-4 space-y-3 max-h-48 overflow-y-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {/* Welcome Message */}
              <motion.div
                className="flex items-start space-x-2"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  KC
                </div>
                <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                  <p className="text-sm text-gray-800">
                    Welcome to Krishna Care! 👋 How can we help you with our C&F services today?
                  </p>
                </div>
              </motion.div>

              {/* Quick Action Buttons */}
              <motion.div
                className="space-y-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                <button
                  onClick={() => setMessage('I would like to know about your pharmaceutical logistics services.')}
                  className="w-full text-left bg-orange-50 hover:bg-orange-100 border border-orange-200 rounded-lg p-2 text-sm text-gray-700 transition-all duration-200"
                >
                  🏥 Pharmaceutical Logistics
                </button>
                <button
                  onClick={() => setMessage('Can you provide information about pesticides C&F services?')}
                  className="w-full text-left bg-green-50 hover:bg-green-100 border border-green-200 rounded-lg p-2 text-sm text-gray-700 transition-all duration-200"
                >
                  🌱 Pesticides & Fertilizers
                </button>
                <button
                  onClick={() => setMessage('I need warehousing and distribution services.')}
                  className="w-full text-left bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg p-2 text-sm text-gray-700 transition-all duration-200"
                >
                  📦 Warehousing Services
                </button>
              </motion.div>
            </motion.div>

            {/* Message Input */}
            <motion.div
              className="p-4 border-t border-gray-200"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  onKeyPress={(e) => e.key === 'Enter' && sendWhatsAppMessage()}
                />
                <button
                  onClick={sendWhatsAppMessage}
                  className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg transition-all duration-200 group"
                >
                  <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>

            {/* Footer */}
            <motion.div
              className="bg-gray-50 p-3 flex items-center justify-between text-xs text-gray-600"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.4 }}
            >
              <span>Powered by WhatsApp</span>
              <button
                onClick={callDirectly}
                className="flex items-center space-x-1 text-orange-600 hover:text-orange-700 font-medium"
              >
                <Phone className="h-3 w-3" />
                <span>Call Now</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-amber-500 transform-gpu z-50"
        style={{
          scaleX: typeof window !== 'undefined' ? window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) : 0,
          transformOrigin: '0%'
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.1 }}
      />
    </>
  )
}

export default FloatingContactWidget