import React from 'react';
import { DirectionAwareHover } from './ui/direction-aware-hover';

const groups = [
  {
    heading: "Faculty",
    sectionBg: "#000000",
    sectionRadius: "18px",
    height:"h-96",
    width:"w-66",
    text: "#ffffff",
    info: [
      { name: "Abhi", department: "CSE", src: "https://images.unsplash.com/photo-1760126130338-4e6c9043ee2d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600", cardRadius: "32px", text: "#ffffff" },
      { name: "Rahul", department: "ECE", src: "https://images.unsplash.com/photo-1760126130338-4e6c9043ee2d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600", cardRadius: "16px", text: "#ffffff" },
      { name: "Kiran", department: "ME", src: "https://images.unsplash.com/photo-1760126130338-4e6c9043ee2d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600", cardRadius: "25px", text: "#ffffff" }
    ]
  },
  {
    heading: "Generals",
    sectionBg: "#ffffff",
    sectionRadius: "8px",
    height:"h-56",
    width:"w-46",
    text: "#333333",
    info: [
      { name: "Sneha", department: "ME", src: "https://images.unsplash.com/photo-1760126130338-4e6c9043ee2d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600", cardRadius: "10px", text: "#ffffff" },
      { name: "Amit", department: "EEE", src: "https://images.unsplash.com/photo-1760126130338-4e6c9043ee2d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600", cardRadius: "24px", text: "#ffffff" }
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
