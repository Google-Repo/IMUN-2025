import React from 'react';
import { DirectionAwareHover } from './ui/direction-aware-hover';

const groups = [
  {
    heading: "Faculty",
    sectionBg: "#000000",
    sectionRadius: "18px",
    height: "h-96",
    width: "w-66",
    text: "#ffffff",
    info: [
      { name: "Dr. Yogesh C. Goswami", department: "Vice Chancellor", src: "", cardRadius: "32px", text: "#ffffff" },
      { name: "Dr. Saurabh Jain", department: "Faculty Coordinator", src: "", cardRadius: "32px", text: "#ffffff" },
      { name: "Dr. Anurag Joshi", department: "Faculty Co-Coordinator", src: "./AnuragJoshi.jpg", cardRadius: "32px", text: "#ffffff" }
    ]
  },
  {
    heading: "Generals",
    sectionBg: "#ffffff",
    sectionRadius: "8px",
    height: "h-6x6",
    width: "w-66",
    text: "#333333",
    info: [
      { name: "Smriti Mukherjee", department: "Secretary General", src: "", cardRadius: "24px", text: "#ffffff" },
      { name: "Harsh Deshpande", department: "Director General", src: "./Harsh.jpg", cardRadius: "24px", text: "#ffffff" },
      { name: "Avant Mishra", department: "Convener", src: "", cardRadius: "24px", text: "#ffffff" },
      { name: "Jayveer Singh Rathore", department: "Treasurer", src: "", cardRadius: "24px", text: "#ffffff" },
      { name: "Anvisha Trivedi", department: "Deputy Secretary General", src: "", cardRadius: "24px", text: "#ffffff" },
      { name: "Aditya Gupta", department: "Deputy Director General", src: "", cardRadius: "24px", text: "#ffffff" },
      { name: "Manan Bhardwaj", department: "Director of Operations", src: "", cardRadius: "24px", text: "#ffffff" },
      { name: "Harsh Pratap Singh Thakur", department: "Director of Logistics", src: "", cardRadius: "24px", text: "#ffffff" },
      { name: "Kashish Gera", department: "Director of Content Development", src: "", cardRadius: "24px", text: "#ffffff" },
      { name: "Mansi Sharma", department: "Director of Creative Strategy", src: "", cardRadius: "24px", text: "#ffffff" },
      { name: "Ayush Singh", department: "Director of Delegate Affairs", src: "", cardRadius: "24px", text: "#ffffff" }
    ]
  }
];

const Container = ({ data = groups }) => {
  return (
    <section className="w-full !font-[roboto]">
      <div className="w-full mx-auto py-8 px-4">
        {data.map((group, gi) => {
          const people = group.info ?? [];
          return (
            <div
              key={gi}
              className="mb-12 rounded-xl px-6 py-8"
              style={{ backgroundColor: group.sectionBg, borderRadius: group.sectionRadius }}
            >
              <h2
                className="text-center text-2xl md:text-3xl font-bold mb-8"
                style={{ color: group.text }}
              >
                {group.heading}
              </h2>
              <div className="w-full flex gap-10 flex-wrap justify-center">
                {people.map((person, i) => (
                  <DirectionAwareHover
                    key={i}
                    imageUrl={person.src || undefined}
                    className="w-full max-w-xs rounded-xl overflow-hidden shadow-lg"
                    imageClassName="object-cover"
                    childrenClassName="text-sm"
                    height={group.height}
                    width={group.width}
                  >
                    <div className="px-4 py-2">
                      <h3 className="text-base font-semibold" style={{ color: person.text }}>
                        {person.name}
                      </h3>
                      <p className="text-sm" style={{ color: person.text }}>
                        {person.department}
                      </p>
                    </div>
                  </DirectionAwareHover>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Container;
