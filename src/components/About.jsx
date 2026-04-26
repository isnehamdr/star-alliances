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

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 78%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      })

      // Image wipe reveal (left → right)
      tl.to('.about-image-col', {
        clipPath: 'inset(0 0% 0 0 round 20px)',
        duration: 1.1,
        ease: 'power3.inOut',
      }, 0)

      // Eyebrow
      tl.from('.about-eyebrow-inner', {
        y: '110%',
        opacity: 0,
        duration: 0.75,
        ease: 'power3.out',
      }, 0.25)

      // Heading lines stagger
      tl.from(['.about-heading-line1', '.about-heading-line2'], {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
      }, 0.4)

      // Divider scale
      tl.from('.about-divider', {
        scaleX: 0,
        duration: 0.6,
        ease: 'power2.out',
      }, 0.65)

      // Body text
      tl.from('.about-body', {
        y: 24,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
      }, 0.75)

      // CTA button
      tl.from('.about-cta', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'back.out(1.5)',
      }, 0.9)

      // Stat badge pop
      tl.from('.about-stat-badge', {
        scale: 0.6,
        opacity: 0,
        duration: 0.5,
        ease: 'back.out(2)',
      }, 1.0)

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="sm:mx-6 mx-2">
      <div className="rounded-3xl sm:px-16 px-6 py-12 lg:p-12 overflow-hidden grid grid-cols-1 lg:grid-cols-2 bg-white">

        {/* Text Content */}
        <div className="flex flex-col justify-center space-y-4 order-2 lg:order-1 lg:pr-12">

          {/* Eyebrow */}
          <div className="overflow-hidden text-4xl sm:text-5xl font-medium sm:pt-0 pt-4">
            <span className="about-eyebrow-inner block">About</span>
          </div>

          {/* Heading */}
          <h2 className=" text-[#0e2555] leading-snug">
            <span className="about-heading-line1 block font-light text-4xl sm:text-5xl">Staralliance</span>
            <span className="about-heading-line2 block font-light text-4xl sm:text-5xl">Hospitality</span>
          </h2>

          {/* Divider */}
          {/* <div
            className="about-divider w-12 h-[2px] bg-gradient-to-r from-[#c9a96e] to-transparent rounded-full origin-left"
          /> */}

          {/* Body */}
          <p className="about-body text-base sm:text-lg text-gray-600 font-normal max-w-md leading-relaxed">
            We are hospitality professionals and senior leaders with multi-disciplinary
            expertise, broad geographic scope, and notable hands-on experience. We provide
            owners with practical, profit-oriented advisory services across a broad range
            of property types — acting as hands-on partners implementing recommendations
            to drive conversions and growth.
          </p>

          {/* CTA */}
          <button className="about-cta inline-flex items-center gap-2.5 bg-[#0e2555] hover:bg-[#1a3a7a] text-white text-base font-medium tracking-wide px-7 py-3.5 rounded-full w-fit transition-all duration-200 hover:-translate-y-0.5 group">
            More About Us
            <svg
              className="transition-transform duration-200 group-hover:translate-x-1"
              width="14" height="14" viewBox="0 0 14 14" fill="none"
            >
              <path d="M2 7h10M8 3l4 4-4 4" stroke="white" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Image */}
        <div
          className="about-image-col relative min-h-[260px] lg:min-h-[580px] order-1 lg:order-2 rounded-3xl overflow-hidden "
          style={{ clipPath: 'inset(0 100% 0 0 round 20px)' }}
        >
          <img
            src="/images/about.png"
            alt="Staralliance Hospitality"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Stat Badge */}
          {/* <div className="about-stat-badge absolute bottom-6 left-6 bg-white/95 backdrop-blur-md rounded-2xl px-5 py-4 shadow-lg">
            <p className="font-serif text-3xl font-semibold text-[#0e2555] leading-none">20+</p>
            <p className="text-[11px] text-slate-400 tracking-widest uppercase mt-1">Years of Experience</p>
          </div> */}
        </div>

      </div>
    </section>
  )
}

export default About