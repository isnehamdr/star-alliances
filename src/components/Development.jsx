// import React, { useEffect, useRef } from 'react'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// gsap.registerPlugin(ScrollTrigger)

// const steps = [
//   {
//     step: 'Phase 01',
//     title: 'Development',
//     subtitle: 'Before Build',
//     image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
//     items: [
//       'Feasibility Study',
//       'Concept Development',
//       'Design Development',
//       'Interior Fit-Out Phase',
//       '3rd Party Specialists',
//       'Project Management',
//       'Financial Projections',
//     ],
//   },
//   {
//     step: 'Phase 02',
//     title: 'Execution',
//     subtitle: 'During Build',
//     image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
//     items: [
//       'Hotel Operator Selection',
//       'Positioning and Brand Development',
//       'Hotel Manifesto — All Operational Requirements',
//       'Hotel Operating Systems',
//       'Handover from 3rd Parties',
//     ],
//   },
//   {
//     step: 'Phase 03',
//     title: 'Pre-Opening',
//     subtitle: 'Critical Path',
//     image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80',
//     items: [
//       'Pre-Opening Process Management',
//       'Review of Pre-Opening and Financial Forecasting',
//       'Review and Analysis of First Year Operating Budget',
//       'Review and Analysis of the Marketing Strategy',
//       'Review of Operating Departments Timelines',
//       'Assist on Key Executive Appointments',
//     ],
//   },
//   {
//     step: 'Phase 04',
//     title: 'Operational',
//     subtitle: 'Asset Management',
//     image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80',
//     items: [
//       'Ongoing Financial Performance Reviews',
//       'Annual Budget Reviews',
//       'Analysis of Capital Expenditure against Profitability',
//       'Conduct Monthly Review with Hotel Operator',
//       'Evaluate Overall Asset Performance',
//       'Provide Hands-On Assistance to Hotel Operator When Required',
//     ],
//   },
// ]

// const ArrowRight = () => (
//   <svg
//     className="w-4 h-4"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth={2}
//     viewBox="0 0 24 24"
//     aria-hidden="true"
//   >
//     <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
//   </svg>
// )

// const BulletDot = () => (
//   <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0 inline-block" />
// )

// const StepCard = ({ step, cardRef, index }) => {
//   return (
//     <div
//       ref={cardRef}
//       className="step-card bg-white rounded-2xl overflow-hidden border border-gray-100 h-full opacity-0 translate-y-12"
//       style={{ willChange: 'transform, opacity' }}
//     >
//       {/* Block layout - no flex */}
//       <div className="block h-full flex flex-col">
//         {/* Image section */}
//         <div className="relative w-full h-auto min-h-[200px] overflow-hidden">
//           <img
//             src={step.image}
//             alt={step.title}
//             className="w-full h-48 object-cover block"
//           />
          
//           {/* Badge — mobile only */}
//           <div className="absolute bottom-3 left-3 block sm:hidden">
//             <span className="inline-flex items-center bg-white text-gray-800 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
//               {step.step}
//             </span>
//           </div>
//         </div>

//         {/* Content section - block layout */}
//         <div className="block p-6 flex-1">
//           {/* Badge — desktop */}
//           <div className="hidden sm:block mb-4">
//             <span className="inline-flex items-center bg-gray-900 text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
//               {step.step}
//             </span>
//           </div>

//           {/* Title */}
//           <div className="block mb-4">
//             <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 leading-tight">
//               {step.title}
//             </h3>
//             <p className="text-xs text-gray-400 font-semibold mt-1 uppercase tracking-widest">
//               {step.subtitle}
//             </p>
//           </div>

//           {/* Divider */}
//           <div className="divider-line h-px bg-gray-100 mb-4 origin-left scale-x-0" />

//           {/* List */}
//           <ul className="space-y-2">
//             {step.items.map((item, idx) => (
//               <li key={item} className="flex items-start gap-2.5 opacity-0 translate-x-[-10px]" data-delay={idx * 0.05}>
//                 <BulletDot />
//                 <span className="text-xs sm:text-sm text-gray-600 leading-snug">{item}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   )
// }

// const Development = () => {
//   const sectionRef = useRef(null)
//   const headingRef = useRef(null)
//   const subRef = useRef(null)
//   const descRef = useRef(null)
//   const btnRef = useRef(null)
//   const cardRefs = useRef([])
//   const cardsWrapperRef = useRef(null)

// //   useEffect(() => {
// //     const ctx = gsap.context(() => {
// //       // Header elements slide up animation
// //       gsap.fromTo(
// //         [subRef.current, headingRef.current, descRef.current, btnRef.current],
// //         { y: 40, opacity: 0 },
// //         {
// //           y: 0,
// //           opacity: 1,
// //           duration: 0.8,
// //           ease: 'power3.out',
// //           stagger: 0.12,
// //           scrollTrigger: {
// //             trigger: sectionRef.current,
// //             start: 'top 85%',
// //           },
// //         }
// //       )

// //       // Create smooth sequential animations for each card
// //       cardRefs.current.forEach((card, i) => {
// //         if (!card) return

// //         // Calculate trigger points - each card appears sequentially while scrolling
// //         const triggerStart = i === 0 ? 'top 55%' : `top ${55 - (i * 15)}%`

// // //         const base = 55
// // // const step = 15

// // // const triggerStart = `top ${base + (i * step)}%`
        
// //         // Main card animation - slides up from bottom smoothly
// //         gsap.to(card, {
// //           y: 0,
// //           opacity: 1,
// //           duration: 0.8,
// //           ease: 'power3.out',
// //           scrollTrigger: {
// //             trigger: card,
// //             start: triggerStart,
// //             end: 'top 60%',
// //             toggleActions: 'play none none reverse',
// //             scrub: 0.3,
// //           },
// //         })

// //         // Divider line animation
// //         const divider = card.querySelector('.divider-line')
// //         if (divider) {
// //           gsap.to(divider, {
// //             scaleX: 1,
// //             duration: 0.6,
// //             ease: 'power2.out',
// //             scrollTrigger: {
// //               trigger: card,
// //               start: triggerStart,
// //               end: 'top 60%',
// //               toggleActions: 'play none none reverse',
// //               scrub: 0.2,
// //             },
// //           })
// //         }

// //         // List items stagger animation - each item appears one after another
// //         const listItems = card.querySelectorAll('li')
// //         if (listItems.length) {
// //           listItems.forEach((item, itemIndex) => {
// //             gsap.to(item, {
// //               x: 0,
// //               opacity: 1,
// //               duration: 0.5,
// //               delay: itemIndex * 0.08,
// //               ease: 'power2.out',
// //               scrollTrigger: {
// //                 trigger: card,
// //                 start: triggerStart,
// //                 end: 'top 60%',
// //                 toggleActions: 'play none none reverse',
// //               },
// //             })
// //           })
// //         }
// //       })

// //       // Add a pin effect to the cards wrapper to create a sticky feeling
// //       if (cardsWrapperRef.current) {
// //         ScrollTrigger.create({
// //           trigger: cardsWrapperRef.current,
// //           start: 'top 80%',
// //           end: 'bottom 20%',
// //           pin: false,
// //         })
// //       }

// //       // Refresh ScrollTrigger to ensure all calculations are correct
// //       ScrollTrigger.refresh()
// //     }, sectionRef)

// //     return () => ctx.revert()
// //   }, [])

// useEffect(() => {
//   const ctx = gsap.context(() => {
//     // 1. Header animation on section enter (before pin kicks in)
//     gsap.fromTo(
//       [subRef.current, headingRef.current, descRef.current, btnRef.current],
//       { y: 40, opacity: 0 },
//       {
//         y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.12,
//         scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
//       }
//     )

//     // 2. PIN the entire section for scroll-through duration
//     const pinTrigger = ScrollTrigger.create({
//       trigger: sectionRef.current,
//       start: 'top top',          // pin when section hits top of viewport
//       end: '+=250%',             // stay pinned for 2.5x viewport height of scroll
//       pin: true,
//       anticipatePin: 1,
//     })

//     // 3. Single master timeline scrubbed to the pin's scroll progress
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: 'top top',
//         end: '+=250%',
//         scrub: 1,                // smooth scrub tied to scroll position
//       },
//     })

//     // 4. Animate each card sequentially within the timeline
//     cardRefs.current.forEach((card, i) => {
//       if (!card) return
//       const offset = i * 0.25   // each card takes up 25% of scroll, staggered

//       tl.fromTo(card,
//         { y: 120, opacity: 0 },
//         { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' },
//         offset                   // <-- position in timeline
//       )

//       const divider = card.querySelector('.divider-line')
//       if (divider) {
//         tl.fromTo(divider, { scaleX: 0 }, { scaleX: 1, duration: 0.3 }, offset + 0.2)
//       }

//       const listItems = card.querySelectorAll('li')
//       listItems.forEach((item, idx) => {
//         tl.fromTo(item,
//           { x: -12, opacity: 0 },
//           { x: 0, opacity: 1, duration: 0.2, ease: 'power2.out' },
//           offset + 0.25 + idx * 0.03
//         )
//       })
//     })

//     ScrollTrigger.refresh()
//   }, sectionRef)

//   return () => ctx.revert()
// }, [])

//   const handleMouseEnter = (i) => {
//     if (!cardRefs.current[i]) return
//     gsap.to(cardRefs.current[i], {
//       y: -8,
//       boxShadow: '0 24px 48px rgba(0,0,0,0.12)',
//       duration: 0.3,
//       ease: 'power2.out',
//     })
//   }

//   const handleMouseLeave = (i) => {
//     if (!cardRefs.current[i]) return
//     gsap.to(cardRefs.current[i], {
//       y: 0,
//       boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
//       duration: 0.4,
//       ease: 'power3.out',
//     })
//   }

//   return (
//     <div ref={sectionRef} className="py-16 lg:py-24 mx-2 sm:mx-6">
//       <div className="bg-white rounded-3xl px-6 py-12 sm:px-12 sm:py-16 lg:px-20  border border-gray-100">
//         {/* Header section with flex between elements */}
//         <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 sm:gap-12 mb-12 lg:mb-16">
//           <div className="max-w-lg">
//             <p
//               ref={subRef}
//               className="text-lg font-bold uppercase tracking-widest text-gray-800 mb-3"
//             >
//               How it works
//             </p>
//             <h2
//               ref={headingRef}
//               className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight tracking-tight"
//             >
//               Hotel Development
//             </h2>
//             <p
//               ref={descRef}
//               className="mt-4 text-gray-500 text-base leading-relaxed"
//             >
//               Lorem ipsum dolor sit amet consectetur viverra velit faucibus pharetra lorem sed
//               scelerisque sit in nec arcu malesuada non.
//             </p>
//           </div>

//           <div ref={btnRef} className="flex-shrink-0">
//             <a
//               href="#"
//               className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0e2555] hover:bg-gray-700 text-white text-lg font-semibold rounded-full transition-all duration-300 "
//             >
//               Build Yours
//               <ArrowRight />
//             </a>
//           </div>
//         </div>

//         {/* Grid layout for cards - 4 columns side by side */}
//         <div ref={cardsWrapperRef} className="steps-sticky-card-wrapper relative">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {steps.map((step, i) => (
//               <div
//                 key={step.step}
//                 onMouseEnter={() => handleMouseEnter(i)}
//                 onMouseLeave={() => handleMouseLeave(i)}
//                 className="h-full"
//               >
//                 <StepCard
//                   step={step}
//                   index={i}
//                   cardRef={(el) => {
//                     cardRefs.current[i] = el
//                   }}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Development





import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    step: 'Phase 01',
    title: 'Development',
    subtitle: 'Before Build',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    items: ['Feasibility Study','Concept Development','Design Development','Interior Fit-Out Phase','3rd Party Specialists','Project Management','Financial Projections'],
  },
  {
    step: 'Phase 02',
    title: 'Execution',
    subtitle: 'During Build',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    items: ['Hotel Operator Selection','Positioning and Brand Development','Hotel Manifesto — All Operational Requirements','Hotel Operating Systems','Handover from 3rd Parties'],
  },
  {
    step: 'Phase 03',
    title: 'Pre-Opening',
    subtitle: 'Critical Path',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80',
    items: ['Pre-Opening Process Management','Review of Pre-Opening and Financial Forecasting','Review and Analysis of First Year Operating Budget','Review and Analysis of the Marketing Strategy','Review of Operating Departments Timelines','Assist on Key Executive Appointments'],
  },
  {
    step: 'Phase 04',
    title: 'Operational',
    subtitle: 'Asset Management',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80',
    items: ['Ongoing Financial Performance Reviews','Annual Budget Reviews','Analysis of Capital Expenditure against Profitability','Conduct Monthly Review with Hotel Operator','Evaluate Overall Asset Performance','Provide Hands-On Assistance to Hotel Operator When Required'],
  },
]

const ArrowRight = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
)

const BulletDot = () => (
  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0 inline-block" />
)

const StepCard = ({ step, cardRef }) => (
  <div
    ref={cardRef}
    className="step-card bg-white rounded-2xl overflow-hidden border border-gray-100 h-full"
    style={{ opacity: 0, transform: 'translateY(80px)', willChange: 'transform, opacity' }}
  >
    <div className="flex flex-col h-full">
      <div className="relative w-full overflow-hidden">
        <img src={step.image} alt={step.title} className="w-full h-70 object-cover block" />
        <div className="absolute bottom-3 left-3 sm:hidden">
          <span className="inline-flex items-center bg-white text-gray-800 text-md font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
            {step.step}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5">
        <div className="hidden sm:block mb-3">
          <span className="inline-flex items-center bg-gray-900 text-white text-md font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
            {step.step}
          </span>
        </div>
        <div className="mb-3">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 leading-tight">{step.title}</h3>
          <p className="text-md text-gray-400 font-semibold mt-0.5 uppercase tracking-widest">{step.subtitle}</p>
        </div>
        <div className="divider-line h-px bg-gray-100 mb-3" style={{ transform: 'scaleX(0)', transformOrigin: 'left' }} />
        <ul className="space-y-1.5">
          {step.items.map((item) => (
            <li key={item} className="flex items-start gap-2.5" style={{ opacity: 0, transform: 'translateX(-10px)' }}>
              <BulletDot />
              <span className="text-md text-gray-600 leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
)

const Development = () => {
  const sectionRef      = useRef(null)
  const headingRef      = useRef(null)
  const subRef          = useRef(null)
  const descRef         = useRef(null)
  const btnRef          = useRef(null)
  const cardsWrapperRef = useRef(null)   // ← only this gets pinned
  const cardRefs        = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── 1. Header scrolls in normally (no pin involved) ──────────────
      gsap.fromTo(
        [subRef.current, headingRef.current, descRef.current, btnRef.current],
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.12,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      )

      // ── 2. PIN only the cards wrapper ────────────────────────────────
      //    Fires when the grid's top reaches the viewport top.
      //    "+=200%" = 2× viewport of scroll distance to reveal all 4 cards.
      ScrollTrigger.create({
        trigger     : cardsWrapperRef.current,
        start       : 'top top',
        end         : '+=200%',
        pin         : true,           // ← only the grid is pinned
        pinSpacing  : true,           // pushes content below down so nothing overlaps
        anticipatePin: 1,
      })

      // ── 3. Scrub timeline on the same bounds as the pin ───────────────
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger : cardsWrapperRef.current,
          start   : 'top top',
          end     : '+=200%',
          scrub   : 1.2,
        },
      })

      // ── 4. Cards animate in sequentially from bottom ─────────────────
      cardRefs.current.forEach((card, i) => {
        if (!card) return
        const at = i * 0.35           // stagger start position in the timeline

        tl.to(card,
          { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' },
          at
        )

        const divider = card.querySelector('.divider-line')
        if (divider) {
          tl.to(divider,
            { scaleX: 1, duration: 0.25, ease: 'power2.out' },
            at + 0.2
          )
        }

        card.querySelectorAll('li').forEach((item, idx) => {
          tl.to(item,
            { x: 0, opacity: 1, duration: 0.2, ease: 'power2.out' },
            at + 0.28 + idx * 0.04
          )
        })
      })

      ScrollTrigger.refresh()
    })

    return () => ctx.revert()
  }, [])


  return (
    // Outer wrapper — plain, no pin, just spacing
    <div ref={sectionRef} className="py-16 lg:py-24 mx-2 sm:mx-6">
      <div className="bg-white rounded-3xl px-6 py-12 sm:px-12 sm:py-16 lg:px-20 border border-gray-100">

        {/* Header — scrolls away normally before pin kicks in */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 sm:gap-12 mb-12 lg:mb-16">
          <div className="max-w-lg">
            <p ref={subRef} className="text-lg font-bold uppercase tracking-widest text-gray-800 mb-3" style={{ opacity: 0 }}>
              How it works
            </p>
            <h2 ref={headingRef} className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight tracking-tight" style={{ opacity: 0 }}>
              Hotel Development
            </h2>
            <p ref={descRef} className="mt-4 text-gray-500 text-base leading-relaxed" style={{ opacity: 0 }}>
              Lorem ipsum dolor sit amet consectetur viverra velit faucibus pharetra lorem sed
              scelerisque sit in nec arcu malesuada non.
            </p>
          </div>
          <div ref={btnRef} className="flex-shrink-0" style={{ opacity: 0 }}>
            <a href="#" className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0e2555] hover:bg-gray-700 text-white text-lg font-semibold rounded-full transition-all duration-300">
              Build Yours <ArrowRight />
            </a>
          </div>
        </div>

        {/*
          cardsWrapperRef ← ONLY this div gets pinned.
          min-h-screen ensures the grid fills the viewport when stuck at top.
          Items are centered vertically so cards look balanced on screen.
        -mx-6 sm:-mx-12 lg:-mx-20 px-6 sm:px-12 lg:px-20 -mb-12 sm:-mb-16"
        */}
        <div
          ref={cardsWrapperRef}
          className="min-h-screen flex items-center"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {steps.map((step, i) => (
<div key={step.step} className="h-full">
                  <StepCard
                  step={step}
                  index={i}
                  cardRef={(el) => { cardRefs.current[i] = el }}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Development