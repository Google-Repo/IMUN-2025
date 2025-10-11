import React from 'react'

export default function Homeextras() {
  return (
    <div>
      <section className="bg-gray-50  md:py-16 px-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-stretch mb-10 lg:mb-none md:mb-none gap-8 max-w-6xl mx-auto">


          <div className="bg-white shadow-xl rounded-2xl p-8 w-full md:w-1/2 flex flex-col justify-center transition-all duration-300 hover:shadow-2xl">
            <h2 className="text-3xl !font-[roboto] font-extrabold text-gray-900 mb-3">📍 Location</h2>
            <p className="text-gray-600 text-base mb-6">
              Get directions to our event center
            </p>

            <div className="border-t border-gray-200  pt-4">
              <h3 className="text-xl font-semibold !font-[roboto] text-gray-800 mb-1">Address</h3>
              <p className="text-gray-700 leading-relaxed">
                Indore-Ujjain Road, Gram Baroli, Indore <br />
                Madhya Pradesh, India
              </p>
            </div>

            <div className="border-t border-gray-200 pt-4 mt-4">
              <h3 className="text-xl font-semibold text-gray-800 !font-[roboto] mb-1">Phone</h3>
              <div className="space-y-1 text-gray-700">
                <p>+91 99931 98924</p>
                <p>+91 74000 38224</p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 mt-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-1 !font-[roboto]">Email</h3>
              <p className="text-gray-700">svvvimun9.0@gmail.com</p>
            </div>
          </div>


          <div className="w-full md:w-1/2 flex justify-center items-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.3998136856867!2d75.84705207568042!3d22.824692979312985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963039c587a8091%3A0x206d00d7a5e4afb3!2sShri%20Vaishnav%20Vidyapeeth%20Vishwavidyalaya%20(SVVV)!5e0!3m2!1sen!2sin!4v1755713879375!5m2!1sen!2sin"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-2xl shadow-xl max-w-[600px]"
            ></iframe>
          </div>

        </div>
      </section>
    </div>
  )
}
