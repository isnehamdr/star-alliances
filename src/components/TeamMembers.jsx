import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const members = [
  { name: "John Carter",   role: "CEO & Founder",           img: "/images/person.png" },
  { name: "Sophie Moore",  role: "Chief Financial Officer",  img: "/images/person.png" },
  { name: "Matt Cannon",   role: "Chief Technology Officer", img: "/images/person.png" },
];

function Card({ member, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    
    // Add GSAP animation for card entrance
    gsap.fromTo(el,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: index * 0.1 + 0.2 }
    );
    
    // No hover effects - just cleanup
    return () => {
      // No event listeners to clean up
    };
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="bg-white rounded-2xl overflow-hidden opacity-0 p-8"
    >
      <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="px-4 py-4">
        <p className="font-semibold text-gray-900 text-md">{member.name}</p>
        <p className="text-gray-500 text-lg font-medium mt-1">{member.role}</p>
      </div>
    </div>
  );
}

export default function TeamMembers() {
  const titleRef = useRef(null);
  const descRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(titleRef.current, 
      { opacity: 0, x: -30 }, 
      { opacity: 1, x: 0, duration: 0.7, ease: "power3.out" }
    );
    gsap.fromTo(descRef.current, 
      { opacity: 0, x: 30 }, 
      { opacity: 1, x: 0, duration: 0.7, ease: "power3.out", delay: 0.15 }
    );
  }, []);

  return (
    <section className="px-6 py-16 sm:mx-6 mx-2">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-8 mb-12">
        <h2 ref={titleRef} className="font-bold text-4xl text-gray-900 leading-tight max-w-xs opacity-0">
          Meet the team<br />behind Wealthflow
        </h2>
        <p ref={descRef} className="text-gray-500 text-sm max-w-xs leading-relaxed opacity-0 pt-1">
          Lorem ipsum dolor sit amet consectetur bibendum fermentum eget adipiscing
          tellus ac eu condimentum eget ultricies lorem libero amet.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {members.map((m, i) => (
          <Card key={m.name} member={m} index={i} />
        ))}
      </div>
    </section>
  );
}