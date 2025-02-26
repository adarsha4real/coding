'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const LoginPage = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your authentication logic here
    console.log('Login data:', formData)
    router.push('/') // Redirect to home page after login
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className='absolute w-full h-full object-cover '
      >
        <source src="project.mp4" type="video/mp4" />
      </video>
      <div className="max-w-md w-full space-y-8 p-8 backdrop-blur-xl rounded-lg shadow-md z-10">
        <div>
          <h2 className="font-roboto mt-6 text-center text-3xl font-extrabold text-emerald-400">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label 
              htmlFor="email" 
              className="block text-xl font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-emerald-500"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-xl font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-emerald-500"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
              Sign in
            </button>
          </div>
          
          <div className="text-center">
            <Link href="/signup" className="text-sm text-emerald-600 hover:text-emerald-500">
              Don't have an account? Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
