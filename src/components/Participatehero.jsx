import React from 'react'
import regi from '../assets/registrtaion.jpg'
import BlurText from "./BlurText";

export default function Participatehero() {
  return (
    <div>
         <section className="relative w-full h-screen">
                      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                          <img
                              src={regi}
                              alt="Registration Watermark"
                              className="h-full w-full  object-cover opacity-40"
                          />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center backdrop-blur-xs bg-black/60     px-4 text-center">
                          <BlurText
  text="How to Participate"
  delay={200}
  animateBy="letters"
  direction="top"
  className='text-white  text-center !font-[times]  text-[2.8rem]  leading-none     lg:text-[10rem] md:text-[10rem]'
/>
                      </div>
                  </section>
    </div>
  )
}
