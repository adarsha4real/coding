import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col">
      <main className="flex-grow">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-6">
          The College Hub
        </h1>
        
        <div className="max-w-2xl mx-auto text-center mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            The College Hub is your one-stop destination for all college-related resources. We provide students with comprehensive study materials, notes, and guidance to help them excel in their academic journey. Our platform is designed to make learning accessible and efficient for everyone.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 mb-8">
          <Link 
            href="https://wa.me/+919876543210" 
            target="_blank"
            className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
          >
            Contact on WhatsApp
          </Link>

          <p className="text-lg font-medium">
            Call us: <a href="tel:+919876543210" className="text-blue-600 hover:underline">+91 98765 43210</a>
          </p>
        </div>
      </main>

      <footer className="text-center text-gray-600 py-4 border-t">
        <p>A minor year project by me</p>
      </footer>
    </div>
  )
}

export default page
