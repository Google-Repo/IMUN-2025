import React from 'react'
import img2 from '../assets/black bg.jpg'
import BlurText from "./BlurText";


export default function Homehero() {
  return (
    <div>
      <div className="relative h-screen  w-full">
              <img
                src={img2}
                alt="Hero"
                className="h-full w-full object-cover"
              />
              <div className="absolute p-5 inset-0 flex  items-center justify-center backdrop-blur-xs bg-black/40 bg-opacity-60">
<BlurText
  text="SVVV IMUN"
  delay={200}
  animateBy="letters"
  direction="top"
  className='text-white  text-center !font-[times]  text-[3.1rem]  leading-none     lg:text-[16rem] md:text-[16rem]'
/>
                
              </div>
            </div>
    </div>
  )
}
