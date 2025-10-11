import React from 'react'
import contact from '../assets/contact.jpg'
import BlurText from "./BlurText";

export default function Contacthero() {
  return (
    <div>
      <section className="relative w-full h-screen ">
              <div className="absolute inset-0">
                <img
                  src={contact}
                  alt="Registration Watermark"
                  className="h-full w-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-black opacity-80" />
              </div>
              <div className="relative z-10 flex items-center justify-center h-full px-4 text-center">
                 <BlurText
  text="Contact Us"
  delay={200}
  animateBy="letters"
  direction="top"
  className='text-white  text-center !font-[times]  text-[4.1rem]  leading-none     lg:text-[10rem] md:text-[10rem]'
/>
              </div>
            </section>
      
    </div>
  )
}
