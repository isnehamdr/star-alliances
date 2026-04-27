// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const members = [
//   { name: "Anup Thapa", role: "Director of Operations", img: "/images/person.png" },
//   { name: "Abhinav Narsingh Rana", role: "Managing Director", img: "/images/person.png" },
//   { name: "Avik JB Singh", role: "Director of Operations", img: "/images/person.png" },
// ];

// function Card({ member, index, cardRef }) {
//   return (
//     <div
//       ref={cardRef}
//       className="bg-white rounded-2xl overflow-hidden p-8"
//       style={{ opacity: 0, transform: "translateY(40px)" }}
//     >
//       <div className="relative w-48 h-48 mx-auto overflow-hidden  rounded-full">
//         <img
//           src={member.img}
//           alt={member.name}
//           className="w-full h-full object-cover object-top"
//         />
//       </div>

//       <div className="px-4 py-4 text-center">
//         <p className="font-semibold text-gray-900 text-md">{member.name}</p>
//         <p className="text-gray-500 text-lg font-medium mt-1">{member.role}</p>
//       </div>
//     </div>
//   );
// }

// export default function TeamMembers() {
//   const sectionRef = useRef(null);
//   const titleRef = useRef(null);
//   const descRef = useRef(null);
//   const cardRefs = useRef([]);

//   useEffect(() => {
//     const ctx = gsap.context(() => {

//       const mm = gsap.matchMedia();

//       // =========================
//       // 💻 DESKTOP + TABLET
//       // =========================
//       mm.add("(min-width: 640px)", () => {

//         // Header animation
//         gsap.fromTo(
//           [titleRef.current, descRef.current],
//           { opacity: 0, y: 40 },
//           {
//             opacity: 1,
//             y: 0,
//             duration: 0.7,
//             stagger: 0.15,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: sectionRef.current,
//               start: "top 80%",
//               toggleActions: "play reverse play reverse", // 🔁 replay + reverse
//             },
//           }
//         );

//         // Cards stagger animation
//         gsap.to(cardRefs.current, {
//           opacity: 1,
//           y: 0,
//           duration: 0.6,
//           ease: "power3.out",
//           stagger: 0.15,
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 70%",
//             toggleActions: "play reverse play reverse", // 🔁 important
//           },
//         });

//       });

//       // =========================
//       // 📱 MOBILE (SIMPLER)
//       // =========================
//       mm.add("(max-width: 639px)", () => {

//         // Header
//         gsap.fromTo(
//           titleRef.current,
//           { opacity: 0, y: 30 },
//           {
//             opacity: 1,
//             y: 0,
//             duration: 0.6,
//             scrollTrigger: {
//               trigger: titleRef.current,
//               start: "top 85%",
//               toggleActions: "play reverse play reverse",
//             },
//           }
//         );

//         gsap.fromTo(
//           descRef.current,
//           { opacity: 0, y: 30 },
//           {
//             opacity: 1,
//             y: 0,
//             duration: 0.6,
//             delay: 0.1,
//             scrollTrigger: {
//               trigger: descRef.current,
//               start: "top 85%",
//               toggleActions: "play reverse play reverse",
//             },
//           }
//         );

//         // Cards (independent for smoother UX)
//         cardRefs.current.forEach((card) => {
//           gsap.to(card, {
//             opacity: 1,
//             y: 0,
//             duration: 0.5,
//             ease: "power2.out",
//             scrollTrigger: {
//               trigger: card,
//               start: "top 90%",
//               toggleActions: "play reverse play reverse",
//             },
//           });
//         });

//       });

//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={sectionRef} className="px-6 py-16 sm:mx-6 mx-2">
      
//       {/* HEADER */}
//       <div className="flex flex-col sm:flex-row justify-between items-start gap-8 mb-12">
//         <h2
//           ref={titleRef}
//           className="font-bold text-4xl text-gray-900 leading-tight max-w-xs"
//           style={{ opacity: 0 }}
//         >
//           Meet the team<br />behind Wealthflow
//         </h2>

//         <p
//           ref={descRef}
//           className="text-gray-800 text-md max-w-sm  leading-relaxed pt-1"
//           style={{ opacity: 0 }}
//         >
//           Lorem ipsum dolor sit amet consectetur bibendum fermentum eget adipiscing
//           tellus ac eu condimentum eget ultricies lorem libero amet.
//         </p>
//       </div>

//       {/* CARDS */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
//         {members.map((m, i) => (
//           <Card
//             key={m.name}
//             member={m}
//             index={i}
//             cardRef={(el) => (cardRefs.current[i] = el)}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const members = [
  { name: "Anup Thapa", role: "Director of Operations", img: "/images/person.png",desc:"22+ years in hotel operations, specializing in F&B and Training & Development." },
  { name: "Abhinav Narsingh Rana", role: "Managing Director", img: "/images/person.png",desc:"30+ years in management, including pre-opening experience." },
  { name: "Avik JB Singh", role: "Director of Operations", img: "/images/person.png",desc:"15+ years in hotel operations, focusing on Rooms Division & Hotel Sales." },
];

// ── Single Card ────────────────────────────────────────────────────────────────
function Card({ member, cardRef }) {
  return (
    <div
      ref={cardRef}
      className="bg-white rounded-2xl overflow-hidden p-8 flex-shrink-0"
    >
      <div className="relative w-48 h-48 mx-auto overflow-hidden rounded-full">
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="px-4 py-4 text-center">
        <p className="font-semibold text-gray-900 text-md">{member.name}</p>
        <p className="text-gray-700 text-xl font-medium mt-1">{member.role}</p>
        <p className="text-gray-500 text-md sm:text-lg font-medium mt-1">{member.desc}</p>
      </div>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────
export default function TeamMembers() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const cardRefs = useRef([]);

  // Slider state
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef(null);
  const touchStartX = useRef(null);

  // ── Slider controls ──────────────────────────────────────────────────────────
  const goTo = (index) => {
    const clamped = Math.max(0, Math.min(index, members.length - 1));
    setCurrent(clamped);
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: sliderRef.current.offsetWidth * clamped,
        behavior: 'smooth',
      });
    }
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      goTo(diff > 0 ? current + 1 : current - 1);
    }
    touchStartX.current = null;
  };

  // Sync dot when user manually scrolls
  const handleScroll = () => {
    if (!sliderRef.current) return;
    const index = Math.round(sliderRef.current.scrollLeft / sliderRef.current.offsetWidth);
    setCurrent(index);
  };

  // ── GSAP ─────────────────────────────────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // ── DESKTOP ────────────────────────────────────────────────────────
      mm.add("(min-width: 640px)", () => {
        gsap.set([titleRef.current, descRef.current], { opacity: 0, y: 40 });
        gsap.set(cardRefs.current, { opacity: 0, y: 40 });

        gsap.to([titleRef.current, descRef.current], {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        });

        gsap.to(cardRefs.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play reverse play reverse",
          },
        });
      });

      // ── MOBILE ─────────────────────────────────────────────────────────
      mm.add("(max-width: 639px)", () => {
        gsap.set([titleRef.current, descRef.current], { opacity: 0, y: 25 });

        gsap.to([titleRef.current, descRef.current], {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        });

        // Slide in first card only on load, rest reveal on swipe naturally
        if (cardRefs.current[0]) {
          gsap.fromTo(
            cardRefs.current[0],
            { opacity: 0, x: 40 },
            {
              opacity: 1,
              x: 0,
              duration: 0.55,
              ease: "power2.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        }

        // Make other cards visible (they're hidden by slider overflow)
        cardRefs.current.slice(1).forEach((card) => {
          if (card) gsap.set(card, { opacity: 1, x: 0 });
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="px-6 py-16 sm:mx-6 mx-2">

      {/* HEADER */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-8 mb-12">
        <h2
          ref={titleRef}
          className="text-[#11141a] font-bold text-3xl sm:text-5xl leading-tight max-w-xs"
        >
          Meet Our Team Member
        </h2>
        <p
          ref={descRef}
          className="text-gray-800 text-md max-w-sm leading-relaxed pt-1"
        >
          Our leadership team brings together operational insight, development
          expertise, and a shared focus on delivering exceptional hospitality outcomes.
        </p>
      </div>

      {/* ── MOBILE SLIDER ── */}
      <div className="sm:hidden">
        <div
          ref={sliderRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-4 pb-2 no-scrollbar"
          style={{ scrollbarWidth: 'none' }}
        >
          {members.map((m, i) => (
            <div key={m.name} className="snap-center w-full flex-shrink-0">
              <Card
                member={m}
                cardRef={(el) => (cardRefs.current[i] = el)}
              />
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-5">
          {members.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? 'w-6 h-2 bg-[#0e2555]'
                  : 'w-2 h-2 bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Prev / Next arrows */}
        <div className="flex justify-between mt-4 px-1">
          <button
            onClick={() => goTo(current - 1)}
            disabled={current === 0}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 disabled:opacity-30 transition"
          >
            ‹
          </button>
          <span className="text-sm text-gray-400 self-center">
            {current + 1} / {members.length}
          </span>
          <button
            onClick={() => goTo(current + 1)}
            disabled={current === members.length - 1}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 disabled:opacity-30 transition"
          >
            ›
          </button>
        </div>
      </div>

      {/* ── DESKTOP GRID ── */}
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {members.map((m, i) => (
          <Card
            key={m.name}
            member={m}
            cardRef={(el) => (cardRefs.current[i] = el)}
          />
        ))}
      </div>

    </section>
  );
}
