'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Mail } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-luxury-gold-600 via-luxury-purple-600 to-luxury-teal-600 text-white py-3 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm relative z-10">
          <div className="flex items-center space-x-6">
            <div className="flex items-center hover:scale-105 transition-transform duration-300 cursor-pointer group">
              <Phone className="h-4 w-4 mr-2 group-hover:animate-bounce" />
              <span className="font-medium">+91 98765 43210</span>
            </div>
            <div className="flex items-center hover:scale-105 transition-transform duration-300 cursor-pointer group">
              <Mail className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
              <span className="font-medium">info@krishnacare.in</span>
            </div>
          </div>
          <div className="text-xs font-semibold tracking-wide hidden md:block">
            ✨ Trusted Clearing & Forwarding Partner Since 1995
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="glass-strong sticky top-0 z-50 border-b border-white/10 shadow-luxury-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center group no-underline">
                <div className="bg-gradient-to-br from-luxury-gold-500 via-luxury-purple-500 to-luxury-teal-500 text-white p-3 rounded-2xl mr-3 shadow-glow-gold group-hover:shadow-glow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity shimmer-effect"></div>
                  <span className="text-2xl font-bold relative z-10">KC</span>
                </div>
                <div>
                  <h1 className="text-2xl font-display font-bold text-gradient-royal">Krishna Care</h1>
                  <p className="text-sm text-gray-600 font-medium">Clearing & Forwarding Excellence</p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-luxury-gold-600 px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-xl hover:bg-white/50 hover:shadow-inner-glow relative group no-underline"
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold-500/10 to-luxury-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex">
              <Link
                href="/contact"
                className="btn-luxury no-underline group relative"
              >
                <span className="relative z-10 flex items-center">
                  Get Quote
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-luxury-gold-600 transition-colors p-2 rounded-lg hover:bg-white/50"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden glass border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-base font-semibold text-gray-700 hover:text-luxury-gold-600 hover:bg-white/30 rounded-xl transition-all duration-300 no-underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-2 py-2">
                <Link
                  href="/contact"
                  className="block w-full text-center bg-gradient-to-r from-luxury-gold-500 to-luxury-purple-600 text-white px-6 py-3 rounded-2xl hover:shadow-glow-gold transition-all duration-300 font-semibold no-underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

export default Header