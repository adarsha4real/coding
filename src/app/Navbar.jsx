import React from 'react'
import Link from 'next/link'
import { RiGraduationCapFill } from "react-icons/ri";


const Navbar = () => {
  return (
    <nav className='flex text-6xl justify-between items-center bg-black text-white font-roboto py-4 px-10 -z-10'>
        <Link href="/"><RiGraduationCapFill /></Link>
        <ul className='flex justify-between items-center space-x-9 font-roboto text-2xl py-4 '>
            <li><Link href='/dashboard'>Explore</Link></li>
            <li><Link href='/syallabus'>Syallabus</Link></li>
            <li><Link href='/contact'>Contact</Link></li>
            <li><Link href='/aboutus'>About Us</Link></li>
            
        </ul>
    </nav>
  )
}

export default Navbar