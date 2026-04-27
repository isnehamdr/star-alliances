// import React, { useEffect, useRef } from 'react'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// gsap.registerPlugin(ScrollTrigger)

// // ── SVG Icons ──────────────────────────────────────────────────────────────────
// const BankIcon = () => (
//   <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M19.999 3.314L36.915 16.478H3.084L19.999 3.314Z" stroke="#1946bb" strokeWidth="3.5" strokeLinejoin="round"/>
//     <path d="M9.5 16.69V31.065" stroke="#1946bb" strokeWidth="3.5"/>
//     <path d="M35.965 36.685H3.533" stroke="#1946bb" strokeWidth="3.5"/>
//     <path d="M19.75 16.69V31.065" stroke="#1946bb" strokeWidth="3.5"/>
//     <path d="M30 16.69V31.065" stroke="#1946bb" strokeWidth="3.5"/>
//   </svg>
// )

// const ShieldIcon = () => (
//   <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M2 1.25H35.505C36.886 1.25 38.005 2.369 38.005 3.75V17.086C38.005 24.568 33.928 31.456 27.369 35.057L21.203 38.441C20.454 38.853 19.547 38.852 18.798 38.441L12.631 35.057C6.072 31.456 2 24.568 2 17.086V9.747H7V17.086C7 22.743 10.078 27.952 15.037 30.674L20 33.397L24.964 30.674C29.923 27.952 33.005 22.743 33.005 17.086V6.25H2V1.25Z" fill="#1946bb"/>
//   </svg>
// )

// const CardIcon = () => (
//   <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <rect x="3.125" y="6.984" width="33.75" height="26.031" stroke="#1946bb" strokeWidth="3.5" strokeLinejoin="round"/>
//     <path d="M3.125 16.734H28.125" stroke="#1946bb" strokeWidth="3.5"/>
//   </svg>
// )

// const BagIcon = () => (
//   <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <g clipPath="url(#bag)">
//       <path d="M14.563 37.016H3.125V10.984H36.875V37.016H25.438" stroke="#1946bb" strokeWidth="3.5" strokeLinejoin="round"/>
//       <path d="M12.713 10.375V9.787C12.713 5.762 15.975 2.5 20 2.5C24.024 2.5 27.286 5.762 27.286 9.787V10.375" stroke="#1946bb" strokeWidth="3.5"/>
//     </g>
//   </svg>
// )

// const HomeIcon = () => (
//   <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M18.417 2.143C19.272 1.469 20.478 1.469 21.333 2.143L37.352 14.756C37.919 15.203 38.25 15.885 38.25 16.607V26.32H33.538V17.75L19.875 6.991L6.212 17.75V33.676L38.25 33.812V38.523L3.856 38.387C2.555 38.387 1.5 37.333 1.5 36.032V16.607C1.5 15.885 1.831 15.203 2.398 14.756L18.417 2.143Z" fill="#1946bb"/>
//   </svg>
// )

// const ChartIcon = () => (
//   <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <g clipPath="url(#chart)">
//       <path d="M36.217 3.36C37.597 3.36 38.717 4.48 38.717 5.86V38.14C38.717 39.52 37.597 40.64 36.217 40.64H3.783C2.403 40.64 1.283 39.52 1.283 38.14V13.93H6.283V35.64H33.717V8.36H1.311V3.36H36.217Z" fill="#1946bb"/>
//       <rect x="10.658" y="21.406" width="5" height="9.969" fill="#1946bb"/>
//       <rect x="17.658" y="14.813" width="5" height="16.563" fill="#1946bb"/>
//       <rect x="24.658" y="24.563" width="5" height="6.813" fill="#1946bb"/>
//     </g>
//   </svg>
// )

// const ArrowDiagonal = () => (
//   <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M6.304 4.215L16.01 3.99L15.784 13.695M15.647 4.194L3.91 15.931" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
//   </svg>
// )

// // ── Card data ──────────────────────────────────────────────────────────────────
// const cards = [
//   {
//     id: 1,
//     icon: <HomeIcon />,
//     title: 'Hospitality Management',
//     desc: 'Lorem ipsum dolor sit amet consectetur viverra velit faucibus pharetra lorem sed scelerisque sit in nec arcu malesuada.',
//     col: 'left',
//   },
//   {
//     id: 2,
//     icon: <ChartIcon />,
//     title: 'Hospitality Consultancy',
//     desc: 'Lorem ipsum dolor sit amet consectetur viverra velit faucibus pharetra lorem sed scelerisque sit in nec arcu malesuada.',
//     col: 'left',
//   },
//   {
//     id: 3,
//     icon: <BankIcon />,
//     title: 'Owner Representation',
//     desc: 'Lorem ipsum dolor sit amet consectetur viverra velit faucibus pharetra lorem sed scelerisque sit in nec arcu malesuada.',
//     col: 'middle',
//   },
//   {
//     id: 4,
//     icon: <CardIcon />,
//     title: 'Concept Development & Design',
//     desc: 'Lorem ipsum dolor sit amet consectetur viverra velit faucibus pharetra lorem sed scelerisque sit in nec arcu malesuada.',
//     col: 'middle',
//   },
//   {
//     id: 5,
//     icon: <BagIcon />,
//     title: 'Food & Beverage Management',
//     desc: 'Lorem ipsum dolor sit amet consectetur viverra velit faucibus pharetra lorem sed scelerisque sit in nec arcu malesuada.',
//     col: 'right',
//   },
//   {
//     id: 6,
//     icon: <ShieldIcon />,
//     title: 'Mystery Shopper',
//     desc: 'Lorem ipsum dolor sit amet consectetur viverra velit faucibus pharetra lorem sed scelerisque sit in nec arcu malesuada.',
//     col: 'right',
//   },
// ]

// // ── Single Card ────────────────────────────────────────────────────────────────
// const ProductCard = ({ icon, title, desc, cardRef }) => {
//   const arrowRef = useRef(null)

//   const handleMouseEnter = () => {
//     gsap.to(arrowRef.current, {
//       x: 3,
//       y: -3,
//       duration: 0.25,
//       ease: 'power2.out',
//     })
//   }

//   const handleMouseLeave = () => {
//     gsap.to(arrowRef.current, {
//       x: 0,
//       y: 0,
//       duration: 0.25,
//       ease: 'power2.out',
//     })
//   }

//   return (
//     <a
//       ref={cardRef}
//       href="#"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       className="
//         group block
//         bg-white rounded-2xl
//         border border-white
//         p-4
//         transition-all duration-300
    
//         relative overflow-hidden
//       "
//     >
//       {/* top row: icon + arrow */}
//       <div className="flex items-start justify-between mb-6">
//         <div className="w-10 h-10 flex items-center justify-center">
//           {icon}
//         </div>
//         <div
//           ref={arrowRef}
//           className="w-12 h-12 rounded-lg bg-[#f5f7f9] flex items-center justify-center text-[#1946bb] group-hover:bg-[#1946bb] group-hover:text-white transition-colors duration-300"
//         >
//           <ArrowDiagonal />
//         </div>
//       </div>

//       {/* title */}
//       <h3 className="text-[#11141a] font-bold text-lg sm:text-xl leading-snug mb-2">
//         {title}
//       </h3>

//       {/* desc */}
//       <p className="text-[#6b7280] text-sm sm:text-[0.9rem] leading-relaxed">
//         {desc}
//       </p>

//       {/* hover accent line */}
//       <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#1946bb] group-hover:w-full transition-all duration-500 rounded-b-2xl" />
//     </a>
//   )
// }

// // ── Main Section ───────────────────────────────────────────────────────────────
// export default function Services() {
//   const sectionRef = useRef(null)
//   const headingRef = useRef(null)
//   const subtextRef = useRef(null)
//   const btnRef = useRef(null)
//   const cardRefs = useRef([])

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Header stagger
//       gsap.set([headingRef.current, subtextRef.current, btnRef.current], {
//         opacity: 0,
//         y: 28,
//       })

//       ScrollTrigger.create({
//         trigger: sectionRef.current,
//         start: 'top 80%',
//         once: true,
//         onEnter: () => {
//           gsap.to([headingRef.current, subtextRef.current, btnRef.current], {
//             opacity: 1,
//             y: 0,
//             duration: 0.7,
//             ease: 'power3.out',
//             stagger: 0.12,
//           })

//           // Cards stagger in with slight y movement
//           gsap.fromTo(
//             cardRefs.current,
//             { opacity: 0, y: 40, scale: 0.97 },
//             {
//               opacity: 1,
//               y: 0,
//               scale: 1,
//               duration: 0.65,
//               ease: 'power3.out',
//               stagger: {
//                 amount: 0.55,
//                 // column-by-column: left col first, then middle, then right
//                 // achieve this by ordering: 0,1,2,3,4,5 → left pair, middle pair, right pair
//                 from: 'start',
//               },
//               delay: 0.2,
//             }
//           )
//         },
//       })
//     }, sectionRef)

//     return () => ctx.revert()
//   }, [])

//   // Split cards by column
//   const leftCards  = cards.filter(c => c.col === 'left')
//   const midCards   = cards.filter(c => c.col === 'middle')
//   const rightCards = cards.filter(c => c.col === 'right')

//   // Assign refs in order: left[0], left[1], mid[0], mid[1], right[0], right[1]
//   const getRef = (colGroup, idx) => {
//     const offsets = { left: 0, middle: 2, right: 4 }
//     return (el) => { cardRefs.current[offsets[colGroup] + idx] = el }
//   }

//   return (
//     <section
//       ref={sectionRef}
//       className="py-16 lg:py-24 sm:mx-6 mx-2"
//     >
//       <div className="rounded-3xl  py-6 sm:px-16 px-6">

//         {/* ── Header row ── */}
//         <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-10 sm:mb-12">

//           {/* Heading */}
//           <div ref={headingRef} className="max-w-sm">
//             <h2 className="text-[#11141a] font-bold text-3xl sm:text-5xl leading-tight">
//               Access To our Core Services
//             </h2>
//           </div>

//           {/* Right side: description text (hidden in image but keeps spacing) + button */}
//           <div ref={subtextRef} className="sm:text-right">
//             {/* Open account button */}
//             <div ref={btnRef} className="inline-block">
//               <a
//                 href="#"
//                 className="
//                   inline-flex items-center gap-2
//                   bg-[#0e2555] text-white
//                   font-semibold text-sm sm:text-base
//                   px-6 py-3 rounded-full
//                 "
//               >
//                 More of our Services
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* ── Card grid ──
//             Desktop: 3 columns (left col offset-down, middle col offset-up slightly)
//             Tablet: 2 columns
//             Mobile: 1 column
//         ── */}
//         <div className="
//           grid grid-cols-1
//           sm:grid-cols-2
//           lg:grid-cols-3
//           gap-4 sm:gap-5
//           items-start
//         ">

//           {/* LEFT column — starts slightly lower on desktop */}
//           <div className="flex flex-col gap-4 sm:gap-5 lg:mt-8">
//             {leftCards.map((c, i) => (
//               <ProductCard
//                 key={c.id}
//                 icon={c.icon}
//                 title={c.title}
//                 desc={c.desc}
//                 cardRef={getRef('left', i)}
//               />
//             ))}
//           </div>

//           {/* MIDDLE column — standard top */}
//           <div className="flex flex-col gap-6">
//             {midCards.map((c, i) => (
//               <ProductCard
//                 key={c.id}
//                 icon={c.icon}
//                 title={c.title}
//                 desc={c.desc}
//                 cardRef={getRef('middle', i)}
//               />
//             ))}
//           </div>

//           {/* RIGHT column — standard top, spans 2 rows on sm (shows beside middle) */}
//           <div className="flex flex-col gap-4 sm:gap-6 sm:col-span-2 lg:col-span-1 -mt-6">
//             {rightCards.map((c, i) => (
//               <ProductCard
//                 key={c.id}
//                 icon={c.icon}
//                 title={c.title}
//                 desc={c.desc}
//                 cardRef={getRef('right', i)}
//               />
//             ))}
//           </div>
//         </div>

//       </div>
//     </section>
//   )
// }



import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// ── Image Icons ──────────────────────────────────────────────────────────────────
// Replace these image URLs with your actual image paths
const BankIcon = () => (
  <img 
    src="/images/or.png" 
    alt="Bank" 
    width={32} 
    height={32}
    className="w-12 h-12 object-contain"
  />
)

const ShieldIcon = () => (
  <img 
    src="/images/ms.png" 
    alt="Shield" 
    width={32} 
    height={32}
    className="w-12 h-12 object-contain"
  />
)

const CardIcon = () => (
  <img 
    src="/images/cdd.png" 
    alt="Card" 
    width={32} 
    height={32}
    className="w-12 h-12 object-contain"
  />
)

const BagIcon = () => (
  <img 
    src="/images/fbm.png" 
    alt="Bag" 
    width={32} 
    height={32}
    className="w-12 h-12 object-contain"
  />
)

const HomeIcon = () => (
  <img 
    src="images/hm.png" 
    alt="Home" 
    width={32} 
    height={32}
    className="w-12 h-12 object-contain"
  />
)

const ChartIcon = () => (
  <img 
    src="/images/hc.png" 
    alt="Chart" 
    width={32} 
    height={32}
    className="w-12 h-12 object-contain"
  />
)

const ArrowDiagonal = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.304 4.215L16.01 3.99L15.784 13.695M15.647 4.194L3.91 15.931" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// ── Card data ──────────────────────────────────────────────────────────────────
const cards = [
  {
    id: 1,
    icon: <HomeIcon />,
    title: 'Hospitality Management',
    desc: 'End-to-end operational oversight designed to improve guest satisfaction, team performance, and property profitability.',
    col: 'left',
  },
  {
    id: 2,
    icon: <ChartIcon />,
    title: 'Hospitality Consultancy',
    desc: 'Strategic advisory support for owners and operators seeking sharper positioning, stronger systems, and smarter growth decisions.',
    col: 'left',
  },
  {
    id: 3,
    icon: <BankIcon />,
    title: 'Owner Representation',
    desc: 'Independent representation that protects owner interests across planning, execution, brand alignment, and operational review.',
    col: 'middle',
  },
  {
    id: 4,
    icon: <CardIcon />,
    title: 'Concept Development & Design',
    desc: 'Concept and design guidance that aligns guest experience, commercial goals, and the character of each destination.',
    col: 'middle',
  },
  {
    id: 5,
    icon: <BagIcon />,
    title: 'Food & Beverage Management',
    desc: 'Restaurant and bar strategies focused on stronger identity, efficient delivery, and more profitable day-to-day performance.',
    col: 'right',
  },
  {
    id: 6,
    icon: <ShieldIcon />,
    title: 'Mystery Shopper',
    desc: 'On-ground guest journey assessments that uncover service gaps, highlight strengths, and support practical improvements.',
    col: 'right',
  },
]

// ── Single Card ────────────────────────────────────────────────────────────────
const ProductCard = ({ icon, title, desc, cardRef }) => {
  const arrowRef = useRef(null)

  const handleMouseEnter = () => {
    gsap.to(arrowRef.current, {
      x: 3,
      y: -3,
      duration: 0.25,
      ease: 'power2.out',
    })
  }

  const handleMouseLeave = () => {
    gsap.to(arrowRef.current, {
      x: 0,
      y: 0,
      duration: 0.25,
      ease: 'power2.out',
    })
  }

  return (
    <a
      ref={cardRef}
      href="#"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="
        group block
        bg-white rounded-2xl
        border border-white
        p-4
        transition-all duration-300
        relative overflow-hidden
      "
    >
      {/* top row: icon + arrow */}
      <div className="flex items-start justify-between mb-6">
        <div className="w-10 h-10 flex items-center justify-center">
          {icon}
        </div>
        <div
          ref={arrowRef}
          className="w-12 h-12 rounded-lg bg-[#f5f7f9] flex items-center justify-center text-[#1946bb] group-hover:bg-[#1946bb] group-hover:text-white transition-colors duration-300"
        >
          <ArrowDiagonal />
        </div>
      </div>

      {/* title */}
      <h3 className="text-[#11141a] font-bold text-lg sm:text-xl leading-snug mb-2">
        {title}
      </h3>

      {/* desc */}
      <p className="text-[#6b7280] text-sm sm:text-[0.9rem] leading-relaxed">
        {desc}
      </p>

      {/* hover accent line */}
      <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#1946bb] group-hover:w-full transition-all duration-500 rounded-b-2xl" />
    </a>
  )
}

// ── Main Section ───────────────────────────────────────────────────────────────
export default function Services() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const subtextRef = useRef(null)
  const btnRef = useRef(null)
  const cardRefs = useRef([])

 useEffect(() => {
  const ctx = gsap.context(() => {

    const mm = gsap.matchMedia()

    mm.add({
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)"
    }, (context) => {

      const { isMobile } = context.conditions

      // Initial state
      gsap.set([headingRef.current, subtextRef.current, btnRef.current], {
        opacity: 0,
        y: isMobile ? 15 : 25,
      })

      gsap.set(cardRefs.current, {
        opacity: 0,
        y: isMobile ? 20 : 40,
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: isMobile ? "top 92%" : "top 78%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
        defaults: {
          ease: "power1.out", // ✅ smoother global easing
        }
      })

      // Header (very smooth fade-up)
      tl.to([headingRef.current, subtextRef.current, btnRef.current], {
        opacity: 1,
        y: 0,
        duration: isMobile ? 0.45 : 0.6,
        stagger: 0.08,
      })

      // Cards (soft stagger flow)
      tl.to(cardRefs.current, {
        opacity: 1,
        y: 0,
        duration: isMobile ? 0.45 : 0.6,
        stagger: {
          each: isMobile ? 0.05 : 0.08,
        },
      }, "-=0.35") // ✅ overlap = smoother flow

    })

  }, sectionRef)

  return () => ctx.revert()
}, [])

  // Split cards by column
  const leftCards  = cards.filter(c => c.col === 'left')
  const midCards   = cards.filter(c => c.col === 'middle')
  const rightCards = cards.filter(c => c.col === 'right')

  // Assign refs in order: left[0], left[1], mid[0], mid[1], right[0], right[1]
  const getRef = (colGroup, idx) => {
    const offsets = { left: 0, middle: 2, right: 4 }
    return (el) => { cardRefs.current[offsets[colGroup] + idx] = el }
  }

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-24 sm:mx-6 mx-2"
    >
      <div className="rounded-3xl py-6 sm:px-16 px-6">

        {/* ── Header row ── */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-10 sm:mb-12">

          {/* Heading */}
          <div ref={headingRef} className="max-w-sm">
            <h2 className="text-[#11141a] font-bold text-3xl sm:text-5xl leading-tight">
              Access To our Core Services
            </h2>
          </div>

          {/* Right side: description text + button */}
          <div ref={subtextRef} className="sm:text-right">
            {/* Open account button */}
            <div ref={btnRef} className="inline-block">
              <a
                href="#"
                className="
                  inline-flex items-center gap-2
                  bg-[#0e2555] text-white
                  font-semibold text-sm sm:text-base
                  px-6 py-3 rounded-full
                "
              >
                More of our Services
              </a>
            </div>
          </div>
        </div>

        {/* ── Card grid ──
            Desktop: 3 columns (left col offset-down, middle col offset-up slightly)
            Tablet: 2 columns
            Mobile: 1 column
        ── */}
        <div className="
          grid grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-4 sm:gap-5
          items-start
        ">

          {/* LEFT column — starts slightly lower on desktop */}
          <div className="flex flex-col gap-4 sm:gap-5 lg:mt-8">
            {leftCards.map((c, i) => (
              <ProductCard
                key={c.id}
                icon={c.icon}
                title={c.title}
                desc={c.desc}
                cardRef={getRef('left', i)}
              />
            ))}
          </div>

          {/* MIDDLE column — standard top */}
          <div className="flex flex-col gap-6">
            {midCards.map((c, i) => (
              <ProductCard
                key={c.id}
                icon={c.icon}
                title={c.title}
                desc={c.desc}
                cardRef={getRef('middle', i)}
              />
            ))}
          </div>

          {/* RIGHT column — standard top, spans 2 rows on sm */}
          <div className="flex flex-col gap-4 sm:gap-6 sm:col-span-2 lg:col-span-1 -mt-6">
            {rightCards.map((c, i) => (
              <ProductCard
                key={c.id}
                icon={c.icon}
                title={c.title}
                desc={c.desc}
                cardRef={getRef('right', i)}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
