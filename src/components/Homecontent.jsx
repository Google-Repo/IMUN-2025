import React from 'react'
import image from '../assets/image.png'

export default function Homecontent() {
  return (
    <div>
      <section className="bg-white py-10 sm:py-10 xl:py-16 md:py-16 lg:py-16  px-6">
              <div className="relative w-full">
      
                <div className="flex justify-center items-center">
                  <img
                    src={image}
                    alt="Hero"
                    className="h-52 w-auto invert opacity-17"
                  />
                </div>
      
      
                <div className="absolute top-2 md-top-10 lg:top-10 xl:top-10 left-0 w-full flex justify-center">
                  <div className="max-w-4xl mx-auto text-center px-4">
                    <p className="text-base !font-[roboto] lg:text-xl text-black font-semibold leading-relaxed bg-white/10 p-3 rounded-lg">
                      Step into the Realm of Diplomacy, Dialogue, and Decision-Making with SVVVIMUN 2025 —
                      a premier platform where aspiring leaders broaden their global outlook, refine the art of negotiation,
                      and collaborate to shape a more impactful and inclusive future.
                    </p>
                  </div>
                </div>
              </div>
      
              <div className="max-w-5xl mx-auto  mt-10 text-center">
      
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  About the Event
                </h2>
                <p className="text-lg md:text-xl font-semibold text-gray-700 mb-6">
                  Embark on a Journey of Global Diplomacy: Discover SVVVIMUN 2025
                </p>
      
      
                <p className="text-gray-600 leading-relaxed mb-4">
                  Welcome to a space where diplomacy transcends boundaries, where young minds rise as architects of change,
                  and where the world unites through dialogue and collaboration. The Shri Vaishnav Vidyapeeth Vishwavidyalaya
                  International Model United Nations (SVVVIMUN) is a transformative three-day conference of intellect,
                  debate, and leadership.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Hosted in the vibrant city of Indore, within the prestigious campus of Shri Vaishnav Vidyapeeth
                  Vishwavidyalaya, SVVVIMUN invites participants to step into the shoes of diplomats and decision-makers
                  representing diverse nations and perspectives.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Here, you will sharpen your negotiation skills, broaden your global outlook, and engage in meaningful
                  discourse on pressing international issues. More than just a conference, SVVVIMUN is a platform to inspire,
                  empower, and prepare future leaders to become catalysts for global change.
                </p>
                <p className="text-gray-700 font-semibold leading-relaxed">
                  The future of diplomacy begins here with you at — SVVVIMUN 2025.
                </p>
              </div>
            </section>
    </div>
  )
}
