import React from 'react'
import image from '../assets/image.png'

export default function Footer() {
  return (
    <footer className="bg-[#521C0D] text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
        
        {/* Logo */}
        <div className="flex justify-center md:justify-start">
          <img src={image} alt="Logo" className="h-24" />
        </div>

        {/* Links */}
        <ul className="flex flex-col font-[roboto] md:flex-row justify-center gap-4 md:gap-6 text-lg">
          <li className="hover:text-blue-300 cursor-pointer">Home</li>
          <li className="hover:text-blue-300 cursor-pointer">About</li>
          <li className="hover:text-blue-300 cursor-pointer">Committee</li>
          <li className="hover:text-blue-300 cursor-pointer">Participate</li>
          <li className="hover:text-blue-300 cursor-pointer">Contact</li>
        </ul>

        {/* Copyright */}
        <p className="text-sm text-gray-400 text-center md:text-right">
          © 2025 All rights reserved
        </p>
      </div>
    </footer>
  )
}
