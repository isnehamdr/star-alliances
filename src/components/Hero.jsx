import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Hero = () => {
  const heroRef = useRef(null)
  const overlayRef = useRef(null)
  const cornerImgRef = useRef(null)
  const taglineRef = useRef(null)
  const headingRef = useRef(null)
  const paraRef = useRef(null)
  const buttonsRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    // 1. BG zoom reveal
    tl.fromTo(
      heroRef.current,
      { scale: 1.1, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.6 }
    )

    // 2. Overlay fade
    .fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 },
      '-=1.2'
    )

    // 3. Corner image — slides in from right + fades
    .fromTo(
      cornerImgRef.current,
      { x: 60, opacity: 0, scale: 1.06 },
      { x: 0, opacity: 1, scale: 1, duration: 1.1, ease: 'power2.out' },
      '-=0.6'
    )

    // 4. Tagline
    .fromTo(
      taglineRef.current,
      { x: -28, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6 },
      '-=0.5'
    )

    // 5. Heading
    .fromTo(
      headingRef.current,
      { y: 36, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7 },
      '-=0.35'
    )

    // 6. Paragraph
    .fromTo(
      paraRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.55 },
      '-=0.4'
    )

    // 7. Buttons stagger
    .fromTo(
      buttonsRef.current.children,
      { y: 18, opacity: 0, scale: 0.94 },
      { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.12 },
      '-=0.35'
    )

    // Subtle floating on corner image after entry
    gsap.to(cornerImgRef.current, {
      y: '-=10',
      repeat: -1,
      yoyo: true,
      duration: 3.5,
      ease: 'sine.inOut',
      delay: 2,
    })

  }, [])

  return (
    <section className="text-white pt-4 sm:pt-6">
      <div
        ref={heroRef}
        className="relative min-h-[100dvh] bg-cover bg-center mx-2 sm:mx-6 rounded-3xl overflow-hidden"
        style={{ backgroundImage: "url('/images/bghero2.jpg')" }}
      >
        {/* Dark overlay */}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-gradient-to-tr from-gray/75 via-gray/40 to-gray/10"
        />

        {/*
          ── Corner image (bghero4) ────────────────────────────────────────────
          Positioned absolute at top-right.
          - On mobile: smaller, starts from the right edge of the rounded card
          - On desktop: larger, pushed further right / more prominent
          pointer-events-none so it never blocks content
        */}
        <img
          ref={cornerImgRef}
          src="/images/bghero4.png"
          alt=""
          aria-hidden="true"
          className="
            pointer-events-none select-none
            absolute
            bottom-4 right-12
            w-[55vw] max-w-[320px]
            sm:w-[44vw] sm:max-w-[480px]
            lg:w-[32vw] lg:max-w-[500px]
       
            object-contain object-top
            z-10
          "
        />

        {/* ── Main content — bottom left ──────────────────────────────────── */}
        <div className="absolute inset-0 flex flex-col justify-end pb-10 sm:pb-14 px-6 sm:px-12 lg:px-16 z-20">
          <div className="max-w-lg space-y-4 sm:space-y-5">

            {/* Tagline */}
            <p
              ref={taglineRef}
              className="text-gray-300 text-sm sm:text-base font-medium tracking-widest uppercase"
            >
              Welcome to Star Alliance
            </p>

            {/* Heading */}
            <h1
              ref={headingRef}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Redefining<br />
              <span className="text-white">Hospitality</span>
            </h1>

            {/* Paragraph */}
            <p
              ref={paraRef}
              className="text-sm sm:text-base text-gray-300 max-w-md leading-relaxed"
            >
              Lorem ipsum dolor sit amet consectetur viverra velit faucibus
              pharetra lorem sed scelerisque sit in nec arcu malesuada nisi.
            </p>

            {/* Buttons */}
            <div ref={buttonsRef} className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
              <button className="
                bg-white border-2 border-white text-[#0e2555]
                font-semibold text-sm sm:text-base
                rounded-full py-2.5 px-7
                hover:bg-transparent hover:text-white
                transition-all duration-300
                shadow-lg shadow-black/20
              ">
                Discover More
              </button>
              <button className="
                border-2 border-white/70 text-white
                font-semibold text-sm sm:text-base
                rounded-full py-2.5 px-7
                hover:bg-white hover:text-black
                transition-all duration-300
              ">
                Contact Us
              </button>
            </div>

          </div>
        </div>

        {/* Bottom vignette */}
        <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-black/65 to-transparent pointer-events-none z-10" />
      </div>
    </section>
  )
}

export default Hero

// import React, { useEffect, useRef } from 'react'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// gsap.registerPlugin(ScrollTrigger)

// const Hero = () => {
//   const heroRef = useRef(null)
//   const overlayRef = useRef(null)
//   const cornerImgRef = useRef(null)
//   const taglineRef = useRef(null)
//   const headingRef = useRef(null)
//   const paraRef = useRef(null)
//   const buttonsRef = useRef(null)

//   useEffect(() => {
//     const ctx = gsap.context(() => {

//       const isMobile = window.innerWidth < 640

//       const tl = gsap.timeline({
//         defaults: { ease: 'power3.out' },
//         scrollTrigger: {
//           trigger: heroRef.current,
//           start: 'top 70%',
//           toggleActions: 'restart none none reset', // 🔥 replay on scroll back
//         },
//       })

//       // 1. BG zoom
//       tl.fromTo(
//         heroRef.current,
//         { scale: 1.08, opacity: 0 },
//         { scale: 1, opacity: 1, duration: isMobile ? 1.2 : 1.6 }
//       )

//       // 2. Overlay
//       .fromTo(
//         overlayRef.current,
//         { opacity: 0 },
//         { opacity: 1, duration: 0.8 },
//         '-=0.9'
//       )

//       // 3. Corner image
//       .fromTo(
//         cornerImgRef.current,
//         {
//           x: isMobile ? 30 : 60,
//           opacity: 0,
//           scale: 1.05,
//         },
//         {
//           x: 0,
//           opacity: 1,
//           scale: 1,
//           duration: isMobile ? 0.8 : 1.1,
//           ease: 'power2.out',
//         },
//         '-=0.5'
//       )

//       // 4. Tagline
//       .fromTo(
//         taglineRef.current,
//         { x: isMobile ? -16 : -28, opacity: 0 },
//         { x: 0, opacity: 1, duration: 0.5 },
//         '-=0.4'
//       )

//       // 5. Heading
//       .fromTo(
//         headingRef.current,
//         { y: isMobile ? 20 : 36, opacity: 0 },
//         { y: 0, opacity: 1, duration: 0.6 },
//         '-=0.3'
//       )

//       // 6. Paragraph
//       .fromTo(
//         paraRef.current,
//         { y: isMobile ? 12 : 20, opacity: 0 },
//         { y: 0, opacity: 1, duration: 0.5 },
//         '-=0.35'
//       )

//       // 7. Buttons
//       .fromTo(
//         buttonsRef.current.children,
//         { y: isMobile ? 12 : 18, opacity: 0, scale: 0.96 },
//         {
//           y: 0,
//           opacity: 1,
//           scale: 1,
//           duration: 0.45,
//           stagger: 0.1,
//         },
//         '-=0.3'
//       )

//       // Floating animation (independent)
//       gsap.to(cornerImgRef.current, {
//         y: '-=8',
//         repeat: -1,
//         yoyo: true,
//         duration: isMobile ? 2.5 : 3.5,
//         ease: 'sine.inOut',
//         delay: 1.5,
//       })

//     }, heroRef)

//     return () => ctx.revert() // cleanup
//   }, [])

//   return (
//     <section className="text-white pt-4 sm:pt-6">
//       <div
//         ref={heroRef}
//         className="relative min-h-[100dvh] bg-cover bg-center mx-2 sm:mx-6 rounded-3xl overflow-hidden"
//         style={{ backgroundImage: "url('/images/bghero2.jpg')" }}
//       >
//         <div
//           ref={overlayRef}
//           className="absolute inset-0 bg-gradient-to-tr from-gray/75 via-gray/40 to-gray/10"
//         />

//         <img
//           ref={cornerImgRef}
//           src="/images/bghero4.png"
//           alt=""
//           className="pointer-events-none select-none absolute bottom-4 right-12 w-[55vw] max-w-[320px] sm:w-[44vw] sm:max-w-[480px] lg:w-[32vw] lg:max-w-[500px] object-contain object-top z-10"
//         />

// <div className="
//   absolute inset-0 flex flex-col
//   justify-start sm:justify-end   
//   pt-24 sm:pt-0                  
//   pb-10 sm:pb-14
//   px-6 sm:px-12 lg:px-16
//   z-20
// ">          <div className="max-w-lg space-y-4 sm:space-y-5">

//             <p ref={taglineRef} className="text-gray-300 text-sm sm:text-base font-medium tracking-widest uppercase">
//               Welcome to Star Alliance
//             </p>

//             <h1 ref={headingRef} className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
//               Redefining<br />
//               <span className="text-white">Hospitality</span>
//             </h1>

//             <p ref={paraRef} className="text-sm sm:text-base text-gray-300 max-w-md leading-relaxed">
//               Lorem ipsum dolor sit amet consectetur viverra velit faucibus pharetra lorem sed scelerisque sit.
//             </p>

//             <div ref={buttonsRef} className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
//               <button className="bg-white border-2 border-white text-[#0e2555] font-semibold text-sm sm:text-base rounded-full py-2.5 px-7 hover:bg-transparent hover:text-white transition-all duration-300 shadow-lg shadow-black/20">
//                 Discover More
//               </button>
//               <button className="border-2 border-white/70 text-white font-semibold text-sm sm:text-base rounded-full py-2.5 px-7 hover:bg-white hover:text-black transition-all duration-300">
//                 Contact Us
//               </button>
//             </div>

//           </div>
//         </div>

//         <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-black/65 to-transparent pointer-events-none z-10" />
//       </div>
//     </section>
//   )
// }

// export default Hero


// import React, { useEffect, useRef } from 'react'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// gsap.registerPlugin(ScrollTrigger)

// const Hero = () => {
//   const heroRef = useRef(null)
//   const overlayRef = useRef(null)
//   const cornerImgRef = useRef(null)
//   const taglineRef = useRef(null)
//   const headingRef = useRef(null)
//   const paraRef = useRef(null)
//   const buttonsRef = useRef(null)

//   useEffect(() => {
//     const ctx = gsap.context(() => {

//       const isMobile = window.innerWidth < 640

//       const tl = gsap.timeline({
//         defaults: { ease: 'power3.out' },
//         scrollTrigger: {
//           trigger: heroRef.current,
//           start: 'top 70%',
//           toggleActions: 'restart none none reset',
//         },
//       })

//       // 1. BG zoom
//       tl.fromTo(
//         heroRef.current,
//         { scale: 1.08, opacity: 0 },
//         { scale: 1, opacity: 1, duration: isMobile ? 1.2 : 1.6 }
//       )

//       // 2. Overlay
//       .fromTo(
//         overlayRef.current,
//         { opacity: 0 },
//         { opacity: 1, duration: 0.8 },
//         '-=0.9'
//       )

//       // 3. Corner image
//       .fromTo(
//         cornerImgRef.current,
//         {
//           y: isMobile ? -30 : 0,
//           x: isMobile ? 0 : 60,
//           opacity: 0,
//           scale: 1.05,
//         },
//         {
//           y: 0,
//           x: 0,
//           opacity: 1,
//           scale: 1,
//           duration: isMobile ? 0.8 : 1.1,
//           ease: 'power2.out',
//         },
//         '-=0.5'
//       )

//       // 4. Tagline
//       .fromTo(
//         taglineRef.current,
//         { x: isMobile ? -16 : -28, opacity: 0 },
//         { x: 0, opacity: 1, duration: 0.5 },
//         '-=0.4'
//       )

//       // 5. Heading
//       .fromTo(
//         headingRef.current,
//         { y: isMobile ? 20 : 36, opacity: 0 },
//         { y: 0, opacity: 1, duration: 0.6 },
//         '-=0.3'
//       )

//       // 6. Paragraph
//       .fromTo(
//         paraRef.current,
//         { y: isMobile ? 12 : 20, opacity: 0 },
//         { y: 0, opacity: 1, duration: 0.5 },
//         '-=0.35'
//       )

//       // 7. Buttons
//       .fromTo(
//         buttonsRef.current.children,
//         { y: isMobile ? 12 : 18, opacity: 0, scale: 0.96 },
//         {
//           y: 0,
//           opacity: 1,
//           scale: 1,
//           duration: 0.45,
//           stagger: 0.1,
//         },
//         '-=0.3'
//       )

//       // Floating animation (independent)
//       gsap.to(cornerImgRef.current, {
//         y: isMobile ? '-=5' : '-=8',
//         repeat: -1,
//         yoyo: true,
//         duration: isMobile ? 2.5 : 3.5,
//         ease: 'sine.inOut',
//         delay: 1.5,
//       })

//     }, heroRef)

//     return () => ctx.revert()
//   }, [])

//   return (
//     <section className="text-white pt-4 sm:pt-6">
//       <div
//         ref={heroRef}
//         className="relative min-h-[100dvh] bg-cover bg-center mx-2 sm:mx-6 rounded-3xl overflow-hidden"
//         style={{ backgroundImage: "url('/images/bghero2.jpg')" }}
//       >
//         <div
//           ref={overlayRef}
//           className="absolute inset-0 bg-gradient-to-tr from-gray/75 via-gray/40 to-gray/10"
//         />

//         {/* Content container - flex column on mobile, relative positioning on desktop */}
//         <div className="relative z-20 h-full flex flex-col">
          
//           {/* Image on top for mobile, absolute positioned for desktop */}
//           <img
//             ref={cornerImgRef}
//             src="/images/bghero4.png"
//             alt=""
//             className="pointer-events-none select-none 
//               w-[55vw] max-w-[320px] sm:w-[44vw] sm:max-w-[480px] lg:w-[32vw] lg:max-w-[500px] object-contain object-top
//               block mx-auto mt-8 mb-4 sm:mb-0 sm:mt-0
//               sm:absolute sm:bottom-4 sm:right-12
//               z-10"
//           />

//           {/* Content at bottom for mobile, absolute positioned for desktop */}
//           <div className="flex-1 flex flex-col justify-end pb-10 sm:pb-14 px-6 sm:px-12 lg:px-16 sm:absolute sm:inset-0">
//             <div className="max-w-lg space-y-4 sm:space-y-5">

//               <p ref={taglineRef} className="text-gray-300 text-sm sm:text-base font-medium tracking-widest uppercase">
//                 Welcome to Star Alliance
//               </p>

//               <h1 ref={headingRef} className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
//                 Redefining<br />
//                 <span className="text-white">Hospitality</span>
//               </h1>

//               <p ref={paraRef} className="text-sm sm:text-base text-gray-300 max-w-md leading-relaxed">
//                 Lorem ipsum dolor sit amet consectetur viverra velit faucibus pharetra lorem sed scelerisque sit.
//               </p>

//               <div ref={buttonsRef} className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
//                 <button className="bg-white border-2 border-white text-[#0e2555] font-semibold text-sm sm:text-base rounded-full py-2.5 px-7 hover:bg-transparent hover:text-white transition-all duration-300 shadow-lg shadow-black/20">
//                   Discover More
//                 </button>
//                 <button className="border-2 border-white/70 text-white font-semibold text-sm sm:text-base rounded-full py-2.5 px-7 hover:bg-white hover:text-black transition-all duration-300">
//                   Contact Us
//                 </button>
//               </div>

//             </div>
//           </div>
//         </div>

//         <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-black/65 to-transparent pointer-events-none z-10" />
//       </div>
//     </section>
//   )
// }

// export default Hero