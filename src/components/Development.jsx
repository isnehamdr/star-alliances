
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
//     items: ['Feasibility Study','Concept Development','Design Development','Interior Fit-Out Phase','3rd Party Specialists','Project Management','Financial Projections'],
//   },
//   {
//     step: 'Phase 02',
//     title: 'Execution',
//     subtitle: 'During Build',
//     image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
//     items: ['Hotel Operator Selection','Positioning and Brand Development','Hotel Manifesto — All Operational Requirements','Hotel Operating Systems','Handover from 3rd Parties'],
//   },
//   {
//     step: 'Phase 03',
//     title: 'Pre-Opening',
//     subtitle: 'Critical Path',
//     image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80',
//     items: ['Pre-Opening Process Management','Review of Pre-Opening and Financial Forecasting','Review and Analysis of First Year Operating Budget','Review and Analysis of the Marketing Strategy','Review of Operating Departments Timelines','Assist on Key Executive Appointments'],
//   },
//   {
//     step: 'Phase 04',
//     title: 'Operational',
//     subtitle: 'Asset Management',
//     image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80',
//     items: ['Ongoing Financial Performance Reviews','Annual Budget Reviews','Analysis of Capital Expenditure against Profitability','Conduct Monthly Review with Hotel Operator','Evaluate Overall Asset Performance','Provide Hands-On Assistance to Hotel Operator When Required'],
//   },
// ]

// const ArrowRight = () => (
//   <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
//   </svg>
// )

// const BulletDot = () => (
//   <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0 inline-block" />
// )

// const StepCard = ({ step, cardRef }) => (
//   <div
//     ref={cardRef}
//     className="step-card bg-white rounded-2xl overflow-hidden border border-gray-100 h-full"
//   >
//     <div className="flex flex-col h-full">
//       {/* Image */}
//       <div className="relative w-full overflow-hidden">
//         <img
//           src={step.image}
//           alt={step.title}
//           className="w-full h-52 sm:h-64 lg:h-70 object-cover block"
//         />
//         {/* Phase badge — visible on mobile over image */}
//         <div className="absolute bottom-3 left-3 sm:hidden">
//           <span className="inline-flex items-center bg-white text-gray-800 text-sm font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
//             {step.step}
//           </span>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="flex flex-col flex-1 p-5">
//         {/* Phase badge — desktop only */}
//         <div className="hidden sm:block mb-3">
//           <span className="inline-flex items-center bg-gray-900 text-white text-sm font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
//             {step.step}
//           </span>
//         </div>

//         <div className="mb-3">
//           <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 leading-tight">{step.title}</h3>
//           <p className="text-sm text-gray-400 font-semibold mt-0.5 uppercase tracking-widest">{step.subtitle}</p>
//         </div>

//         <div className="divider-line h-px bg-gray-100 mb-3" />

//         <ul className="space-y-1.5">
//           {step.items.map((item) => (
//             <li key={item} className="flex items-start gap-2.5">
//               <BulletDot />
//               <span className="text-sm text-gray-600 leading-snug">{item}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   </div>
// )

// const Development = () => {
//   const sectionRef      = useRef(null)
//   const headingRef      = useRef(null)
//   const subRef          = useRef(null)
//   const descRef         = useRef(null)
//   const btnRef          = useRef(null)
//   const cardsWrapperRef = useRef(null)
//   const cardRefs        = useRef([])

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const mm = gsap.matchMedia()

//       // ── MOBILE: no pin, alternating left/right card slide-in ─────────
//       mm.add("(max-width: 639px)", () => {

//         // Header
//         gsap.set([subRef.current, headingRef.current, descRef.current, btnRef.current], {
//           opacity: 0, y: 20,
//         })

//         gsap.to([subRef.current, headingRef.current, descRef.current, btnRef.current], {
//           opacity: 1,
//           y: 0,
//           duration: 0.55,
//           stagger: 0.1,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 85%",
//             toggleActions: "play reverse play reverse",
//           },
//         })

//         // Each card triggers independently as user scrolls down
//         cardRefs.current.forEach((card, i) => {
//           if (!card) return

//           // Alternate: even from left, odd from right
//           gsap.set(card, {
//             opacity: 0,
//             x: i % 2 === 0 ? -60 : 60,
//           })

//           gsap.to(card, {
//             opacity: 1,
//             x: 0,
//             duration: 0.55,
//             ease: "power2.out",
//             scrollTrigger: {
//               trigger: card,
//               start: "top 88%",
//               toggleActions: "play reverse play reverse",
//             },
//           })
//         })
//       })

//       // ── DESKTOP: original pin + scrub animation ───────────────────────
//       mm.add("(min-width: 640px)", () => {

//         gsap.set([subRef.current, headingRef.current, descRef.current, btnRef.current], {
//           opacity: 0, y: 20,
//         })

//         // Set initial card state
//         cardRefs.current.forEach((card) => {
//           if (!card) return
//           gsap.set(card, { opacity: 0, y: 20 })
//           const divider = card.querySelector('.divider-line')
//           if (divider) gsap.set(divider, { scaleX: 0, transformOrigin: 'left' })
//           card.querySelectorAll('li').forEach((item) => {
//             gsap.set(item, { opacity: 0, x: -10 })
//           })
//         })

//         gsap.fromTo(
//           [subRef.current, headingRef.current, descRef.current, btnRef.current],
//           { y: 20, opacity: 0 },
//           {
//             y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.12,
//             scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
//           }
//         )

//         ScrollTrigger.create({
//           trigger     : cardsWrapperRef.current,
//           start       : 'top top',
//           end         : '+=200%',
//           pin         : true,
//           pinSpacing  : true,
//           anticipatePin: 1,
//         })

//         const tl = gsap.timeline({
//           scrollTrigger: {
//             trigger : cardsWrapperRef.current,
//             start   : 'top top',
//             end     : '+=200%',
//             scrub   : 1.2,
//           },
//         })

//         cardRefs.current.forEach((card, i) => {
//           if (!card) return
//           const at = i * 0.35

//           tl.to(card, { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' }, at)

//           const divider = card.querySelector('.divider-line')
//           if (divider) {
//             tl.to(divider, { scaleX: 1, duration: 0.25, ease: 'power2.out' }, at + 0.2)
//           }

//           card.querySelectorAll('li').forEach((item, idx) => {
//             tl.to(item, { x: 0, opacity: 1, duration: 0.2, ease: 'power2.out' }, at + 0.28 + idx * 0.04)
//           })
//         })

//         ScrollTrigger.refresh()
//       })

//     }, sectionRef)

//     return () => ctx.revert()
//   }, [])

//   return (
//     <div ref={sectionRef} className="py-16 lg:py-24 mx-2 sm:mx-6">
//       <div className="bg-white rounded-3xl px-5 py-10 sm:px-12 sm:py-16 lg:px-20 border border-gray-100">

//         {/* Header */}
//         <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 sm:gap-12 mb-10 lg:mb-16">
//           <div className="max-w-lg">
//             <p
//               ref={subRef}
//               className="text-base font-bold uppercase tracking-widest text-gray-800 mb-2 sm:mb-3"
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
//               className="mt-3 text-gray-500 text-sm sm:text-base leading-relaxed"
//             >
//               Lorem ipsum dolor sit amet consectetur viverra velit faucibus pharetra lorem sed
//               scelerisque sit in nec arcu malesuada non.
//             </p>
//           </div>
//           <div ref={btnRef} className="flex-shrink-0">
//             <a
//               href="#"
//               className="inline-flex items-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 bg-[#0e2555] hover:bg-gray-700 text-white text-sm sm:text-base font-semibold rounded-full transition-all duration-300"
//             >
//               Build Yours <ArrowRight />
//             </a>
//           </div>
//         </div>

//         {/* ── MOBILE: simple stacked cards, no pin ── */}
//         <div className="flex flex-col gap-5 sm:hidden">
//           {steps.map((step, i) => (
//             <StepCard
//               key={step.step}
//               step={step}
//               cardRef={(el) => { cardRefs.current[i] = el }}
//             />
//           ))}
//         </div>

//         {/* ── DESKTOP: pinned grid ── */}
//         <div
//           ref={cardsWrapperRef}
//           className="hidden sm:flex min-h-screen items-center"
//         >
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 w-full">
//             {steps.map((step, i) => (
//               <div key={step.step} className="h-full">
//                 <StepCard
//                   step={step}
//                   cardRef={(el) => { cardRefs.current[i] = el }}
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
    image: '/images/phase1.avif',
    items: ['Feasibility Study','Concept Development','Design Development','Interior Fit-Out Phase','3rd Party Specialists','Project Management','Financial Projections'],
  },
  {
    step: 'Phase 02',
    title: 'Execution',
    subtitle: 'During Build',
    image: '/images/phase2.png',
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
  >
    <div className="flex flex-col h-full">
      {/* Image */}
      <div className="relative w-full overflow-hidden">
        <img
          src={step.image}
          alt={step.title}
          className="w-full h-52 sm:h-64 lg:h-70 object-cover block"
        />
        {/* Phase badge — visible on mobile over image */}
        <div className="absolute bottom-3 left-3 sm:hidden">
          <span className="inline-flex items-center bg-white text-gray-800 text-sm font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
            {step.step}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Phase badge — desktop only */}
        <div className="hidden sm:block mb-3">
          <span className="inline-flex items-center bg-gray-900 text-white text-sm font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
            {step.step}
          </span>
        </div>

        <div className="mb-3">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 leading-tight">{step.title}</h3>
          <p className="text-sm text-gray-400 font-semibold mt-0.5 uppercase tracking-widest">{step.subtitle}</p>
        </div>

        <div className="divider-line h-px bg-gray-100 mb-3" />

        <ul className="space-y-1.5">
          {step.items.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <BulletDot />
              <span className="text-sm text-gray-600 leading-snug">{item}</span>
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
  const cardsWrapperRef = useRef(null)
  const cardRefs        = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      // ── MOBILE: no pin, alternating left/right card slide-in ─────────
      mm.add("(max-width: 639px)", () => {

        // Header
        gsap.set([subRef.current, headingRef.current, descRef.current, btnRef.current], {
          opacity: 0, y: 20,
        })

        gsap.to([subRef.current, headingRef.current, descRef.current, btnRef.current], {
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
        })

        // Each card triggers independently as user scrolls down
        cardRefs.current.forEach((card, i) => {
          if (!card) return

          // Alternate: even from left, odd from right
          gsap.set(card, {
            opacity: 0,
            x: i % 2 === 0 ? -60 : 60,
          })

          gsap.to(card, {
            opacity: 1,
            x: 0,
            duration: 0.55,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play reverse play reverse",
            },
          })
        })
      })

      // ── DESKTOP: pin + scrub animation ───────────────────────
      mm.add("(min-width: 640px)", () => {

        gsap.set([subRef.current, headingRef.current, descRef.current, btnRef.current], {
          opacity: 0, y: 20,
        })

        // Set initial card state — skip card 0 (always visible by default)
        cardRefs.current.forEach((card, i) => {
          if (!card) return
          if (i === 0) return // Card 0 stays visible, no animation needed

          gsap.set(card, { opacity: 0, y: 100 }) // start below, will translate up on scroll
          const divider = card.querySelector('.divider-line')
          if (divider) gsap.set(divider, { scaleX: 0, transformOrigin: 'left' })
          card.querySelectorAll('li').forEach((item) => {
            gsap.set(item, { opacity: 0, x: -10 })
          })
        })

        gsap.fromTo(
          [subRef.current, headingRef.current, descRef.current, btnRef.current],
          { y: 20, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.12,
            scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
          }
        )

        ScrollTrigger.create({
          trigger     : cardsWrapperRef.current,
          start       : 'top top',
          end         : '+=200%',
          pin         : true,
          pinSpacing  : true,
          anticipatePin: 1,
        })

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger : cardsWrapperRef.current,
            start   : 'top top',
            end     : '+=200%',
            scrub   : 1.2,
          },
        })

        // Animate only cards 1–3 (translate up from below), card 0 is already visible
        cardRefs.current.forEach((card, i) => {
          if (!card) return
          if (i === 0) return // Card 0: already visible, skip

          const at = (i - 1) * 0.35 // stagger: card1=0, card2=0.35, card3=0.7

          tl.to(card, { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' }, at)

          const divider = card.querySelector('.divider-line')
          if (divider) {
            tl.to(divider, { scaleX: 1, duration: 0.25, ease: 'power2.out' }, at + 0.2)
          }

          card.querySelectorAll('li').forEach((item, idx) => {
            tl.to(item, { x: 0, opacity: 1, duration: 0.2, ease: 'power2.out' }, at + 0.28 + idx * 0.04)
          })
        })

        ScrollTrigger.refresh()
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="py-16 lg:py-24 mx-2 sm:mx-6">
      <div className="bg-white rounded-3xl px-5 py-10 sm:px-12 sm:py-16 lg:px-20 border border-gray-100">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 sm:gap-12 mb-10 lg:mb-16">
          <div className="max-w-lg">
            <p
              ref={subRef}
              className="text-base font-bold uppercase tracking-widest text-gray-800 mb-2 sm:mb-3"
            >
              How it works
            </p>
            <h2
              ref={headingRef}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 "
            >
              Hotel Development
            </h2>
            <p
              ref={descRef}
              className="mt-3 text-gray-500 text-sm sm:text-base leading-relaxed"
            >
              From early feasibility to day-to-day operations, we guide hospitality
              projects through each stage with practical planning and clear execution.
            </p>
          </div>
          <div ref={btnRef} className="flex-shrink-0">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 bg-[#0e2555] hover:bg-gray-700 text-white text-sm sm:text-base font-semibold rounded-full transition-all duration-300"
            >
              Build Yours <ArrowRight />
            </a>
          </div>
        </div>

        {/* ── MOBILE: simple stacked cards, no pin ── */}
        <div className="flex flex-col gap-5 sm:hidden">
          {steps.map((step, i) => (
            <StepCard
              key={step.step}
              step={step}
              cardRef={(el) => { cardRefs.current[i] = el }}
            />
          ))}
        </div>

        {/* ── DESKTOP: pinned grid ── */}
        <div
          ref={cardsWrapperRef}
          className="hidden sm:flex min-h-screen items-center"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 w-full">
            {steps.map((step, i) => (
              <div key={step.step} className="h-full">
                <StepCard
                  step={step}
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
