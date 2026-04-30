// import React, { useEffect, useRef } from 'react'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// gsap.registerPlugin(ScrollTrigger)

// const Quadrant = () => {
//   const sectionRef = useRef(null)
//   const imageRef = useRef(null)
//   const headingRef = useRef(null)
//   const featureRefs = useRef([])

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const mm = gsap.matchMedia()

//       // ── MOBILE ONLY ──────────────────────────────────────────────────
//       mm.add("(max-width: 767px)", () => {

//         gsap.set(imageRef.current, { opacity: 0, y: 30 })
//         gsap.set(headingRef.current, { opacity: 0, y: 20 })

//         // Alternate cards left / right
//         featureRefs.current.forEach((el, i) => {
//           gsap.set(el, {
//             opacity: 0,
//             x: i % 2 === 0 ? -50 : 50,
//           })
//         })

//         const tl = gsap.timeline({
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 88%",
//             toggleActions: "play reverse play reverse",
//           },
//           defaults: { ease: "power2.out" },
//         })

//         tl.to(imageRef.current, { opacity: 1, y: 0, duration: 0.55 })
//         tl.to(headingRef.current, { opacity: 1, y: 0, duration: 0.45 }, "-=0.3")
//         tl.to(featureRefs.current, {
//           opacity: 1,
//           x: 0,
//           duration: 0.5,
//           stagger: { each: 0.1, ease: "power1.inOut" },
//         }, "-=0.2")
//       })

//       // ── DESKTOP: no GSAP ─────────────────────────────────────────────
//       mm.add("(min-width: 768px)", () => {

//         gsap.set(imageRef.current, { opacity: 0, scale: 0.96 })
//         gsap.set(headingRef.current, { opacity: 0, y: 30 })
//         gsap.set(featureRefs.current, { opacity: 0, y: 35 })

//         const tl = gsap.timeline({
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 75%",
//             end: "bottom 20%",
//             toggleActions: "play reverse play reverse",
//           },
//           defaults: { ease: "power1.out" },
//         })

//         tl.to(imageRef.current, { opacity: 1, scale: 1, duration: 0.7 })
//         tl.to(headingRef.current, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
//         tl.to(featureRefs.current, {
//           opacity: 1,
//           y: 0,
//           duration: 0.6,
//           stagger: { each: 0.08 },
//         }, "-=0.35")
//       })

//     }, sectionRef)

//     return () => ctx.revert()
//   }, [])

//   const features = [
//     {
//       title: "Performance",
//       img: "/images/performance.png",
//       items: ['Operations', 'Service Audit', 'Market Planning', 'Pricing Strategy']
//     },
//     {
//       title: "Discovery",
//       img: "/images/discovery.png",
//       items: ['Investment Objectives', 'Market Conditions', 'Risk Assessment', 'Cost Forecasting']
//     },
//     {
//       title: "Concerns",
//       img: "/images/concern.png",
//       items: ['Competitors', 'Market Potential', 'Annual Audits']
//     },
//     {
//       title: "Reflection",
//       img: "/images/reflectiion.png",
//       items: ['Operational Effectiveness', 'Financial Stability', 'Long-Term Strategy']
//     }
//   ]

//   return (
//     <div ref={sectionRef} className="sm:py-24 py-12 mx-2 sm:mx-6">
//       <div className="bg-white rounded-3xl px-4 py-8 sm:px-8 lg:px-16 lg:py-12">

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

//           {/* Image — full width on mobile, natural on desktop */}
//           <img
//             ref={imageRef}
//             src="/images/quadrant.avif"
//             alt="Value Quadrant"
//             className="rounded-2xl w-full object-cover aspect-[4/3]"
//           />

//           {/* Content */}
//           <div className="flex flex-col gap-6 sm:gap-8">

//             {/* Heading */}
//             <div ref={headingRef} className="border-b border-gray-100 pb-5">
//               <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
//                 Value Quadrant —
//                 <span className="block">Hotel Development</span>
//               </h2>
//             </div>

//             {/* Feature grid:
//                 mobile  → 1 column, full width cards
//                 sm+     → 2 columns
//             */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-0">
//               {features.map((item, i) => (
//                 <div
//                   key={i}
//                   ref={el => featureRefs.current[i] = el}
//                   className="
//                     flex gap-3 items-start
//                     p-4 sm:p-5
//                     rounded-2xl sm:rounded-none
//                     bg-gray-50 sm:bg-transparent
//                     border border-gray-100 sm:border-none
//                     sm:border-b sm:border-gray-100
//                   "
//                 >
//                   <img
//                     src={item.img}
//                     alt={item.title}
//                     className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0"
//                   />
//                   <div>
//                     <h3 className="text-sm sm:text-base font-bold uppercase tracking-widest mb-1.5 text-gray-900">
//                       {item.title}
//                     </h3>
//                     <ul className="space-y-0.5">
//                       {item.items.map(x => (
//                         <li key={x} className="text-xs sm:text-sm text-gray-600 leading-relaxed">
//                           {x}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               ))}
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Quadrant

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Quadrant = () => {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const headingRef = useRef(null)
  const featureRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      // ── MOBILE ONLY ──────────────────────────────────────────────────
      mm.add("(max-width: 767px)", () => {

        gsap.set(imageRef.current, { opacity: 0, y: 30 })
        gsap.set(headingRef.current, { opacity: 0, y: 20 })

        // 2x2 grid — alternate by column: left col (0,2) from left, right col (1,3) from right
        featureRefs.current.forEach((el, i) => {
          gsap.set(el, {
            opacity: 0,
            x: i % 2 === 0 ? -40 : 40,
          })
        })

       const tl = gsap.timeline({
  scrollTrigger: {
    trigger: sectionRef.current,
    start: "top 88%",
    toggleActions: "play reverse play reverse",
    invalidateOnRefresh: true, // Recalculates on window resize/refresh
  },
  defaults: { ease: "power2.out" },
})

        tl.to(imageRef.current, { opacity: 1, y: 0, duration: 0.55 })
        tl.to(headingRef.current, { opacity: 1, y: 0, duration: 0.45 }, "-=0.3")
        tl.to(featureRefs.current, {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: { each: 0.1, ease: "power1.inOut" },
        }, "-=0.2")
      })

      // ── DESKTOP ──────────────────────────────────────────────────────
      mm.add("(min-width: 768px)", () => {

        gsap.set(imageRef.current, { opacity: 0, scale: 0.96 })
        gsap.set(headingRef.current, { opacity: 0, y: 30 })
        gsap.set(featureRefs.current, { opacity: 0, y: 35 })

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play reverse play reverse",
          },
          defaults: { ease: "power1.out" },
        })

        tl.to(imageRef.current, { opacity: 1, scale: 1, duration: 0.7 })
        tl.to(headingRef.current, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
        tl.to(featureRefs.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: { each: 0.08 },
        }, "-=0.35")
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const features = [
    {
      title: "Performance",
      img: "/images/performance.png",
      items: ['Operations', 'Service Audit', 'Market Planning', 'Pricing Strategy']
    },
    {
      title: "Discovery",
      img: "/images/discovery.png",
      items: ['Investment Objectives', 'Market Conditions', 'Risk Assessment', 'Cost Forecasting']
    },
    {
      title: "Concerns",
      img: "/images/concern.png",
      items: ['Competitors', 'Market Potential', 'Annual Audits']
    },
    {
      title: "Reflection",
      img: "/images/reflectiion.png",
      items: ['Operational Effectiveness', 'Financial Stability', 'Long-Term Strategy']
    }
  ]

  return (
    <div ref={sectionRef} className="sm:py-24 py-12 mx-2 sm:mx-6">
      <div className="bg-white rounded-3xl px-4 py-8 sm:px-8 lg:px-16 lg:py-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Image */}
          <img
            ref={imageRef}
            src="/images/quadrant.avif"
            alt="Value Quadrant"
            className="rounded-2xl w-full object-cover aspect-[4/3]"
          />

          {/* Content */}
          <div className="flex flex-col gap-6 sm:gap-8">

            {/* Heading */}
            <div ref={headingRef} className="border-b border-gray-100 pb-5">
              <h2 className="text-[#11141a] font-bold text-3xl sm:text-5xl leading-tight">
                Value Quadrant —
                <span className="block">Hotel Development</span>
              </h2>
            </div>

            {/* ── 2x2 Feature Grid ── */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {features.map((item, i) => (
                <div
                  key={i}
                  ref={el => featureRefs.current[i] = el}
                  className="
                    flex flex-col gap-2
                    p-4 sm:p-5
                    rounded-2xl
                    bg-gray-50
                    border border-gray-100
                  "
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-9 h-9 sm:w-11 sm:h-11"
                  />
                  <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-gray-900">
                    {item.title}
                  </h3>
                  <ul className="space-y-0.5">
                    {item.items.map(x => (
                      <li key={x} className="text-xs text-gray-600 leading-relaxed">
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Quadrant