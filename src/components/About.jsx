// import React from 'react'

// const About = () => {
//   return (
//     <section className=" sm:mx-6 mx-2 ">
//       <div className="rounded-3xl  sm:px-16 px-6 overflow-hidden grid grid-cols-1 lg:grid-cols-2 ">

//         {/* Text Content */}
//         <div className="flex flex-col justify-center space-y-4  order-2 lg:order-1">

//           {/* Eyebrow */}
//           <div className="flex items-center gap-3 text-5xl font-medium ">
//             {/* <span className="block w-7 h-[1.5px] bg-[#c9a96e]" /> */}
//             About 
//           </div>

//           {/* Heading */}
//           <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#0e2555]">
//             Staralliance <span className=" text-[#0e2555]">Hospitality</span>
//           </h2>

//           {/* Divider */}
//           {/* <div className="w-12 h-[2px] bg-gradient-to-r from-[#c9a96e] to-transparent rounded-full" /> */}

//           {/* Body */}
//           <p className="text-lg text-gray-700 font-normal max-w-md">
//             We are hospitality professionals and senior leaders with multi-disciplinary
//             expertise, broad geographic scope, and notable hands-on experience. We provide
//             owners with practical, profit-oriented advisory services across a broad range
//             of property types — acting as hands-on partners implementing recommendations
//             to drive conversions and growth.
//           </p>

//           {/* CTA Button */}
//           <button className="inline-flex items-center gap-2.5 bg-[#0e2555] hover:bg-[#1a3a7a] text-white text-base font-medium tracking-wide px-7 py-3.5 rounded-full w-fit transition-all duration-200 hover:-translate-y-0.5 group">
//             More About Us
//             <svg
//               className="transition-transform duration-200 group-hover:translate-x-1"
//               width="14" height="14" viewBox="0 0 14 14" fill="none"
//             >
//               <path d="M2 7h10M8 3l4 4-4 4" stroke="white" strokeWidth="1.5"
//                 strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//           </button>
//         </div>

//         {/* Image */}
//         <div className="relative min-h-[260px] lg:min-h-[580px] order-1 lg:order-2 rounded-3xl">
//           <img
//             src="/images/about.png"
//             alt="Staralliance Hospitality"
//             className="absolute inset-0 w-full h-full object-contain "
//           />

//           {/* Stat Badge */}
//           {/* <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md rounded-2xl px-5 py-4 shadow-lg">
//             <p className="font-serif text-3xl font-semibold text-[#0e2555] leading-none">20+</p>
//             <p className="text-[11px] text-slate-400 tracking-widest uppercase mt-1">Years of Experience</p>
//           </div> */}
//         </div>

//       </div>
//     </section>
//   )
// }

// export default About

import React, { useEffect, useRef, useState } from 'react'

/* ─────────────────────────────────────────────
   useInView — fires once when element enters viewport
───────────────────────────────────────────── */
function useInView(threshold = 0.12) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { 
        if (entry.isIntersecting) {
          setInView(true)
          obs.unobserve(entry.target) // fires only once
        }
      },
      { threshold, rootMargin: '0px 0px -20px 0px' }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  
  return [ref, inView]
}

/* ─────────────────────────────────────────────
   Animated wrapper — fade-up / slide-left on enter
───────────────────────────────────────────── */
function Reveal({ children, delay = 0, fromLeft = false, className = '' }) {
  const [ref, inView] = useInView()
  
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView
          ? 'translate(0, 0)'
          : fromLeft
          ? 'translateX(-36px)'
          : 'translateY(32px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

/* ─────────────────────────────────────────────
   Image with clip-path reveal
───────────────────────────────────────────── */
function ImageReveal({ src, alt, delay = 0 }) {
  const [ref, inView] = useInView(0.08)
  
  return (
    <div
      ref={ref}
      className="w-full rounded-3xl overflow-hidden"
      style={{
        aspectRatio: '16 / 7',
        minHeight: '200px',
      }}
    >
      <div
        className="w-full h-full transition-all duration-[1100ms] ease-[cubic-bezier(0.77,0,0.18,1)]"
        style={{
          clipPath: inView 
            ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' 
            : 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
          transitionDelay: `${delay}ms`,
        }}
      >
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   About Component — fully responsive with Tailwind
───────────────────────────────────────────── */
const About = () => {
  return (
    <>
      {/* Google Fonts import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap');
        
        .about-section {
        
        }
        .about-section h2,
        .about-section .quote-text {
     
        }
        .about-divider {
          width: 40px;
          height: 2px;
          background: #0e2555;
          transition: width 0.4s ease;
        }
        .about-section:hover .about-divider {
          width: 64px;
        }
        .more-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #0e2555;
          color: white;
          font-size: 15px;
          font-weight: 500;
          padding: 14px 28px;
          border-radius: 100px;
          border: none;
          cursor: pointer;
          transition: background 0.25s ease, transform 0.2s ease;
          letter-spacing: 0.02em;
        }
        .more-btn:hover {
          background: #1a3a7a;
          transform: translateY(-2px);
        }
        .more-btn svg {
          transition: transform 0.2s ease;
        }
        .more-btn:hover svg {
          transform: translateX(4px);
        }
        .tag-pill {
          display: inline-block;
          padding: 6px 14px;
          border-radius: 100px;
          border: 1px solid #d1d5db;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #6b7280;
          background: white;
        }
        
        /* Responsive adjustments */
        @media (max-width: 640px) {
          .more-btn {
            padding: 10px 20px;
            font-size: 13px;
          }
          .tag-pill {
            font-size: 10px;
            padding: 4px 12px;
          }
        }
      `}</style>

      <section className="about-section mx-2 sm:mx-6 ">
        <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 overflow-hidden ">
          
       

          {/* Main Title */}
          <Reveal delay={100}>
            <h2 className="text-[#11141a] font-bold text-3xl sm:text-5xl leading-tight mt-5 mb-6 max-w-xl">
              About <br />
               Star Alliance Hospitality
            </h2>
          </Reveal>

          {/* Full-width Image */}
          <ImageReveal
            src="/images/abot.webp"
            alt="Star Alliance Hospitality"
            delay={200}
          />

          {/* Bottom: Two-column responsive layout */}
          <div className="mt-12 sm:mt-14 lg:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-24 items-start">
            
            {/* LEFT — punchy statement */}
            <Reveal delay={300} fromLeft>
              <p className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-900 leading-tight">
                Turning vision into
                <br className="hidden sm:block" />
                exceptional stays.
              </p>
            </Reveal>

            {/* RIGHT — body copy + CTA */}
            <Reveal delay={420}>
              <p className="text-base sm:text-lg text-gray-500 font-light leading-relaxed mb-8">
                We are hospitality professionals and senior leaders with multi-disciplinary
                expertise, broad geographic scope, and notable hands-on experience.
                We provide owners with practical, profit-oriented advisory services
                across a broad range of property types — acting as hands-on partners
                implementing recommendations to drive conversions and growth.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}

export default About