
'use client'
import React from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link'

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
        
        <div className="bg-white shadow rounded-lg p-6 space-y-6">
          <div className="flex flex-col items-center space-y-4">
            <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"
              className="flex items-center space-x-3 text-pink-600 hover:text-pink-700 transition-colors">
              <FaInstagram className="text-3xl" />
              <span className="text-lg">Follow us on Instagram</span>
            </Link>

            <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"
              className="flex items-center space-x-3 text-blue-600 hover:text-blue-700 transition-colors">
              <FaFacebook className="text-3xl" />
              <span className="text-lg">Connect on Facebook</span>
            </Link>

            <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"
              className="flex items-center space-x-3 text-green-600 hover:text-green-700 transition-colors">
              <FaWhatsapp className="text-3xl" />
              <span className="text-lg">Chat on WhatsApp</span>
            </Link>
          </div>

          <div className="mt-8 text-center text-gray-600">
            <p className="mb-2">Feel free to reach out to us through any of these platforms</p>
            <p>We typically respond within 24 hours</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
