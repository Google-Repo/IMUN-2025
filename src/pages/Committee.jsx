import React from "react";

export default function Secretariat() {
  const generals = [
    {
      name: "Smriti Mukherjee",
      role: "Secretary General",
      img: "https://res.cloudinary.com/dp9irxc0x/image/upload/v1760550548/SMRITI2_xjfurq.jpg",
    },
    {
      name: "Harsh Deshpande",
      role: "Director General",
      img: "https://res.cloudinary.com/dp9irxc0x/image/upload/v1760550551/Harsh_DP_tod5eh.jpg",
    },
    {
      name: "Avant Mishra",
      role: "Convener",
      img: "https://res.cloudinary.com/dp9irxc0x/image/upload/v1760550547/Avant_Sir_o4uuo6.jpg",
    },
    {
      name: "Jayveer Singh Rathore",
      role: "Treasurer",
      img: "https://res.cloudinary.com/dp9irxc0x/image/upload/v1760550598/WhatsApp_Image_2025-10-15_at_23.17.11_xk12ms.jpg",
    },
  ];

  const chiefs = [
    {
      name: "Aditya Gupta",
      role: "Deputy Director General",
      img: "https://res.cloudinary.com/dp9irxc0x/image/upload/v1760550551/Airbrush-Image-Enhancer-1760031134727_dvxvgi.jpg",
    },
    {
      name: "Anvisha Trivedi",
      role: "Deputy Secretary General",
      img: "https://res.cloudinary.com/dp9irxc0x/image/upload/v1760550550/Anvisha_iwescg.jpg",
    },
    {
      name: "Manan Bhardwaj",
      role: "Director of Operations",
      img: "https://res.cloudinary.com/dp9irxc0x/image/upload/v1760550333/Manan_wlof6e.jpg",
    },
    {
      name: "Mansi Sharma",
      role: "Director of Creative Strategy",
      img: "https://res.cloudinary.com/dp9irxc0x/image/upload/v1760550342/Mansi_vwedl7.jpg",
    },
    {
      name: "Kashish Gera",
      role: "Director of Content Development",
      img: "https://res.cloudinary.com/dp9irxc0x/image/upload/v1760550353/Kash_mt9foo.jpg",
    },
    {
      name: "Harsh Pratap Singh Thakur",
      role: "Director of Logistics",
      img: "https://res.cloudinary.com/dp9irxc0x/image/upload/v1760550359/Harsh_Partab_zw596a.jpg",
    },
    {
      name: "Ayush Singh",
      role: "Director of Delegate Affairs",
      img: "https://res.cloudinary.com/dp9irxc0x/image/upload/v1760550365/Aayush_cmjhjt.jpg",
    },
  ];

  const faculty = [
    {
      name: "Dr.Yogesh C. Goswami",
      role: "Vice Chancellor",
      img: "https://res.cloudinary.com/dp9irxc0x/image/upload/v1760550214/VC_u7sdqb.jpg",
    },
    {
      name: "Dr.Anurag Joshi",
      role: "Faculty Co-Coordinator",
      img: "https://res.cloudinary.com/dp9irxc0x/image/upload/v1760550262/Ss_arxryz.jpg",
    },
    {
      name: "Dr.Saurabh Jain",
      role: "Faculty Coordinator",
      img: "https://res.cloudinary.com/dp9irxc0x/image/upload/v1760550257/AJ_rfxruv.jpg",
    },
  ];

  const MemberCard = ({ member, borderColor = "border-black" }) => (
    <div className="text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <img
        src={member.img}
        alt={member.name}
        className={`w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 object-cover object-center rounded-full border-4 ${borderColor} mx-auto mb-4`}
      />
      <h3 className="text-lg sm:text-xl md:text-2xl font-medium">{member.name}</h3>
      <p className="text-gray-600 text-sm sm:text-base">{member.role}</p>
    </div>
  );

  return (
    <div className="w-full font-sans">
      {/* Faculty Section */}
      <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 px-4 sm:px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-2 uppercase tracking-wide">
            The Faculty
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-red-600 mx-auto mb-10 rounded-full"></div>

          {/* Main Faculty */}
          <div className="flex flex-col items-center mb-12 sm:mb-16">
            <img
              src={faculty[0].img}
              alt={faculty[0].name}
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-60 md:h-60 object-cover rounded-full border-4 border-white shadow-xl mb-4 transition-transform duration-300 hover:scale-105 hover:shadow-gray-600/40"
            />
            <h3 className="text-xl sm:text-2xl font-medium">{faculty[0].name}</h3>
            <p className="text-gray-400 text-sm sm:text-base">{faculty[0].role}</p>
          </div>

          {/* Other Faculty */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12 justify-items-center">
            {faculty.slice(1).map((member, index) => (
              <MemberCard key={index} member={member} borderColor="border-white" />
            ))}
          </div>
        </div>
      </section>

      {/* Generals Section */}
      <section className="bg-white text-black py-16 px-4 sm:px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-2 uppercase tracking-wide">
            The Generals
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-red-600 mx-auto mb-10 sm:mb-12 rounded-full"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12 justify-items-center">
            {generals.map((member, index) => (
              <MemberCard key={index} member={member} borderColor="border-black" />
            ))}
          </div>
        </div>
      </section>

      {/* Chiefs Section */}
      <section className="bg-gray-50 text-black py-16 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-2 uppercase tracking-wide">
            The Chiefs
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-red-600 mx-auto mb-10 sm:mb-12 rounded-full"></div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-6 sm:gap-8 justify-items-center">
            {chiefs.map((member, index) => (
              <div
                key={index}
                className="text-center flex flex-col items-center transition-transform duration-300 hover:scale-105"
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center rounded-full border-4 border-black shadow-md overflow-hidden bg-white">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover object-center rounded-full"
                    style={{ aspectRatio: "1 / 1" }}
                  />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold mt-3">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
