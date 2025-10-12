import React from 'react'

export default function Contactcontent() {
  return (
    <div>
      <section className="bg-gray-50 py-16 px-4 md:px-8">
                <div className="flex flex-col items-center gap-12 max-w-4xl mx-auto text-gray-800">


                    <div className="w-full text-left space-y-6">
                        <h2 className="text-3xl font-extrabold text-gray-900 underline underline-offset-4 decoration-gray-700 mb-4">
                            👥 Meet the Secretariat
                        </h2>


                        <div>
                            <p className="text-lg font-semibold text-gray-800">Smriti Mukherjee</p>
                            <p className="text-gray-600 italic mb-1">Secretary General</p>
                            <p className="text-gray-700">📧 smriti.mukherjee03@gmail.com</p>
                            <p className="text-gray-700">📞 +91 99931 98924</p>
                        </div>


                        <div>
                            <p className="text-lg font-semibold text-gray-800">Harsh Deshpande</p>
                            <p className="text-gray-600 italic mb-1">Director General</p>
                            <p className="text-gray-700">📧 contact.harsh1807@gmail.com</p>
                            <p className="text-gray-700">📞 +91 74000 38224</p>
                        </div>
                    </div>


                    <div className="w-full text-left space-y-10">


                        <div>
                            <h2 className="text-3xl font-extrabold underline underline-offset-4 decoration-gray-700 mb-2">📍 Our Location</h2>
                            <p className="text-lg text-gray-600">
                                Get in touch with us or visit our venue.
                            </p>
                        </div>


                        <div className="border-t border-gray-300 pt-4">
                            <h3 className="text-xl font-bold underline underline-offset-4 decoration-gray-700 mb-2">Address</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Indore-Ujjain Road, Gram Baroli, Indore <br />
                                Madhya Pradesh, India
                            </p>
                        </div>


                        <div className="border-t border-gray-300 pt-4">
                            <h3 className="text-xl font-bold underline underline-offset-4 decoration-gray-700 mb-2">Phone</h3>
                            <div className="space-y-1 text-gray-700">
                                <p>+91 99931 98924</p>
                                <p>+91 74000 38224</p>
                            </div>
                        </div>


                        <div className="border-t border-gray-300 pt-4">
                            <h3 className="text-xl font-bold underline underline-offset-4 decoration-gray-700 mb-2">Email</h3>
                            <p className="text-gray-700">svvvimun9.0@gmail.com</p>
                        </div>
                    </div>


                    <div className="w-full flex justify-center items-center">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.3998136856867!2d75.84705207568042!3d22.824692979312985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963039c587a8091%3A0x206d00d7a5e4afb3!2sShri%20Vaishnav%20Vidyapeeth%20Vishwavidyalaya%20(SVVV)!5e0!3m2!1sen!2sin!4v1755713879375!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            className="rounded-2xl shadow-xl max-w-[800px] w-full"
                            title="SVVV Location Map"
                        ></iframe>
                    </div>

                </div>
            </section>
    </div>
  )
}
