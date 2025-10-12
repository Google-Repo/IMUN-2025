import React from 'react'
import Aippm from '../assets/AIPPM.png'
import Un from '../assets/UN WOMEN.png'
import Disec from '../assets/UN DISEC.png'
import Mahabharata from '../assets/MAHABHARATA.png'
import loksabha from '../assets/LOK SABHA.png'
import ip from '../assets/IP.png'
import bg from '../assets/committee page.jpg'
import harrypotter from '../assets/HARRY POTTER.png'
import BlurText from "../components/BlurText";

export default function Committee() {
  const committees = [
    {
      name: "UN Women",
      tagline: "Protecting and Advancing Women’s Rights in the 21st Century",
      desc: "Deliberate on global challenges to gender equality and develop frameworks to strengthen women’s rights and empowerment in the modern era.",
      logo: Un,
    },
    {
      name: "UN DISEC",
      tagline: "Strengthening Global Security through Regulation of Emerging Nuclear and Conventional Weapons",
      desc: "Address the evolving threats posed by advanced weaponry and discuss measures for disarmament, arms control, and international security cooperation.",
      logo: Disec,
    },
    {
      name: "AIPPM",
      tagline: "Safeguarding Electoral Rights in Contemporary India",
      desc: "Engage in dynamic political discourse on electoral reforms, transparency, and the preservation of democratic values in India’s governance system.",
      logo: Aippm,
    },
    {
      name: "Mahabharata Committee",
      tagline: "The Collapse of Hastinapur",
      desc: "Relive one of the greatest turning points in Indian mythology — where diplomacy, power, and fate collide to determine the destiny of an empire.",
      logo: Mahabharata,
    },
    {
      name: "Harry Potter Committee",
      tagline: "After the Battle: Rebuilding the Wizarding World",
      desc: "Step into a post-war wizarding society and navigate the challenges of reconstruction, governance, and reconciliation in the magical realm.",
      logo: harrypotter,
    },
    {
      name: "Lok Sabha",
      tagline: "Reforming Governance of Religious and Charitable Institutions",
      desc: "Debate the legal and administrative reforms required for effective management and accountability within India’s religious and charitable institutions.",
      logo: loksabha,
    },
    {
      name: "International Press",
      tagline: "Photography and Journalism",
      desc: "Capture the essence of diplomacy through the art of media. The International Press documents and narrates the stories that unfold within SVVVIMUN 2025.",
      logo: ip,
    },
  ];

  return (
    <>
      <div>
        <div className="relative w-full h-screen "  >
          <img
            src={bg}
            className="h-full w-full object-cover "
            alt="About SVVVIMUN"
          />
          <div className="absolute inset-0  w-fit"></div>
          <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
            <BlurText
              text="COMMITTEES"
              delay={200}
              animateBy="letters"
              direction="top"
              className='text-white  text-center !font-[times]  text-[2.8rem]  leading-none     lg:text-[10rem] md:text-[10rem]'
            />
          </div>
        </div>
      </div>
      <section
        className="py-16  relative w-full min-h-screen "

      >


        <div className="relative max-w-7xl mx-auto px-6 ">


          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 ">
            {committees.map((committee, index) => (
              <div
                key={index}
                className="backdrop-blur-md bg-[#FCF9EA]/50 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center p-6"
              >
                <img
                  src={committee.logo}
                  alt={committee.name}
                  className="w-24 h-24 object-contain mb-4"
                />
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {committee.name}
                </h3>
                <p className=" text-black-600 mb-3">{committee.tagline}</p>
                <p className="text-gray-700">{committee.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
