import React from "react";
import Aippm from "../assets/AIPPM.png";
import Un from "../assets/UN WOMEN.png";
import Disec from "../assets/UN DISEC.png";
import Mahabharata from "../assets/MAHABHARATA.png";
import loksabha from "../assets/LOK SABHA.png";
import ip from "../assets/IP.png";
import bg from "../assets/committee page.jpg";
import harrypotter from "../assets/HARRY POTTER.png";
import BlurText from "../components/BlurText";

export default function Committee() {
  const committees = [
    {
      name: "UN Women",
      tagline: "Protecting and Advancing Women’s Rights in the 21st Century",
      desc: "Deliberate on global challenges to gender equality and develop frameworks to strengthen women’s rights and empowerment in the modern era.",
      logo: Un,
      driveLink:
        "https://drive.google.com/file/d/1jqgPXECmkOVMp7q5zlZGVscbMxnLkIaI/view?usp=sharing",
    },
    {
      name: "UN DISEC",
      tagline:
        "Strengthening Global Security through Regulation of Emerging Nuclear and Conventional Weapons",
      desc: "Address the evolving threats posed by advanced weaponry and discuss measures for disarmament, arms control, and international security cooperation.",
      logo: Disec,
      driveLink:
        "https://drive.google.com/file/d/122w9RzgqLP8kh7Gcay871T-6jXElcG43/view?usp=drive_link",
    },
    {
      name: "AIPPM",
      tagline: "Safeguarding Electoral Rights in Contemporary India",
      desc: "Engage in dynamic political discourse on electoral reforms, transparency, and the preservation of democratic values in India’s governance system.",
      logo: Aippm,
      driveLink:
        "https://drive.google.com/file/d/1mJgldDCrdYPIIn0jl9ZfYq9Vr63qbCsz/view?usp=drive_link",
    },
    {
      name: "Mahabharata Committee",
      tagline: "The Collapse of Hastinapur",
      desc: "Relive one of the greatest turning points in Indian mythology — where diplomacy, power, and fate collide to determine the destiny of an empire.",
      logo: Mahabharata,
      driveLink:
        "https://drive.google.com/file/d/1abKjkBs_WbGAVhqXmB4-OhWeLmggdp6F/view?usp=drive_link",
    },
    {
      name: "Harry Potter Committee",
      tagline: "After the Battle: Rebuilding the Wizarding World",
      desc: "Step into a post-war wizarding society and navigate the challenges of reconstruction, governance, and reconciliation in the magical realm.",
      logo: harrypotter,
      driveLink:
        "https://drive.google.com/file/d/1vXXqmAGrxglutMl21ijxq9CUyLjjrOEj/view?usp=drive_link",
    },
    {
      name: "Lok Sabha",
      tagline: "Reforming Governance of Religious and Charitable Institutions",
      desc: "Debate the legal and administrative reforms required for effective management and accountability within India’s religious and charitable institutions.",
      logo: loksabha,
      driveLink:
        "https://drive.google.com/file/d/1nVtrow-tuPYtfWkExC6UMKGi6ex15LCP/view?usp=drive_link",
    },
    {
      name: "International Press",
      tagline: "Photography and Journalism",
      desc: "Capture the essence of diplomacy through the art of media. The International Press documents and narrates the stories that unfold within SVVVIMUN 2025.",
      logo: ip,
      driveLink:
        "https://drive.google.com/file/d/1HEX9zJuFRG0R56kNmjmn0v36BH2Xe8X6/view?usp=drive_link",
    },
  ];

  return (
    <>
      <div>
        <div className="relative w-full h-screen ">
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
              className="text-white  text-center !font-[times]  text-[2.8rem]  leading-none     lg:text-[10rem] md:text-[10rem]"
            />
          </div>
        </div>
      </div>
      <section className="py-16  relative w-full min-h-screen ">
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
                <a
                  href={committee.driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 px-6 py-2 bg-[#E3D7A4] text-gray-900 rounded-full font-semibold shadow hover:bg-[#DDD094] transition-all"
                >
                  Study Guide
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
