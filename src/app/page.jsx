import React from 'react'
import Link from 'next/link'
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

const Home = () => {
  return (
    <div className='relative h-screen bg-[rgba(17,17,17,0.44)]'>
       <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className='absolute w-full h-full object-cover -z-10'
      >
        <source src="project.mp4" type="video/mp4" />
      </video>
      <h1 className='text-9xl font-bold font-serif relative top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center px-6 py-3 text-gray-200 [-webkit-text-stroke:2px_black] [text-stroke:2px_black]'>The College Hub</h1>
      <p className='text-4xl font-serif relative top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center px-6 py-2 text-white'>
        A platplatform for students to learn, connect, and grow together.
      </p>
      <Link className='bg-emerald-500 rounded-md text-3xl font-serif relative top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center px-6 py-2 text-black'
       href='/explore' >Explore</Link>
      
    </div>
    
  )
}

export default Home