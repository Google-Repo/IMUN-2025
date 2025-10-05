import React from 'react'

export default function Aboutinstitue() {
  return (
    <div>
      <section className="bg-white py-20 px-6 md:px-24">
  <div className="max-w-6xl mx-auto text-center flex  flex-col items-center">
    <h2 className="text-4xl font-extrabold text-gray-800 mb-6 border-b-4   w-fit border-black-400 pb-2">
      Institutions That Have Participated in SVVVIMUN
    </h2>
    <p className="text-lg text-gray-800 mb-12 max-w-3xl mx-auto">
      Over the years, SVVVIMUN has proudly welcomed delegates from schools and universities across India, fostering a culture of diplomacy and collaboration.
    </p>

    <div className="grid   grid-cols-1 md:grid-cols-3 font-[roboto] md:gap-6 text-left text-gray-700 text-[1rem] leading-relaxed">
      <ul className="space-y-2">
        <li>• Maharaja Ranjit Singh College, Indore</li>
        <li>• Mahakal Institute of Technology, Ujjain</li>
        <li className='hidden md:block'>• Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore</li>
        <li>• SICA Senior Secondary School, Indore</li>
        <li>• Christu Jyoti School, Ujjain</li>
        <li>• Delhi Public School, Bhopal</li>
        <li>• GVN The Global School, Bhopal</li>
        <li>• A.B.N, Indore</li>
      </ul>

      <ul className="space-y-2">
        <li className='hidden md:block'>• International Institute of Professional Studies, Indore</li>
        <li>• Medicaps University, Indore</li>
        <li>• Columbia Convent School, Indore</li>
        <li>• St. Paul’s Convent School, Ujjain</li>
        <li>• Virgin Mary School, Ujjain</li>
        <li>• JEMTEC – School of Law, Greater Noida</li>
        <li>• Siddhartha Law College, Dehradun</li>
        <li>• Amity University, Noida</li>
      </ul>

      <ul className="space-y-2">
        <li>• New Oxford School, Ujjain</li>
        <li>• Indore Institute of Law, Indore</li>
        <li>• Government Engineering College, Ujjain</li>
        <li className='hidden md:block'>• The Shishukunj International School, Indore</li>
        <li>• Acropolis Institute, Indore</li>
        <li>• NMIMS, Dhule, Maharashtra</li>
      </ul>
    </div>
  </div>
</section>
    </div>
  )
}
