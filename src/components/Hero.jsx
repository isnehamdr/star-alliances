import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const heroRef = useRef(null)
  const overlayRef = useRef(null)
  const cornerImgRef = useRef(null)
  const taglineRef = useRef(null)
  const headingRef = useRef(null)
  const paraRef = useRef(null)
  const buttonsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 640

      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top 70%',
          toggleActions: 'restart none none reset',
        },
      })

      tl.fromTo(heroRef.current,
        { scale: 1.08, opacity: 0 },
        { scale: 1, opacity: 1, duration: isMobile ? 1.2 : 1.6 }
      )
      .fromTo(overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8 },
        '-=0.9'
      )
      .fromTo(cornerImgRef.current,
        { x: isMobile ? 30 : 60, opacity: 0, scale: 1.05 },
        { x: 0, opacity: 1, scale: 1, duration: isMobile ? 0.8 : 1.1, ease: 'power2.out' },
        '-=0.5'
      )
      .fromTo(taglineRef.current,
        { x: isMobile ? -16 : -28, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5 },
        '-=0.4'
      )
      .fromTo(headingRef.current,
        { y: isMobile ? 20 : 36, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        '-=0.3'
      )
      .fromTo(paraRef.current,
        { y: isMobile ? 12 : 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        '-=0.35'
      )
      .fromTo(buttonsRef.current.children,
        { y: isMobile ? 12 : 18, opacity: 0, scale: 0.96 },
        { y: 0, opacity: 1, scale: 1, duration: 0.45, stagger: 0.1 },
        '-=0.3'
      )

      gsap.to(cornerImgRef.current, {
        y: '-=8',
        repeat: -1,
        yoyo: true,
        duration: isMobile ? 2.5 : 3.5,
        ease: 'sine.inOut',
        delay: 1.5,
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="text-white pt-4 sm:pt-6">
      <div
        ref={heroRef}
        className="relative min-h-[100dvh] bg-cover bg-center mx-2 sm:mx-6 rounded-3xl overflow-hidden"
        style={{ backgroundImage: "url('/images/bghero2.jpg')" }}
      >
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-gradient-to-tr from-gray/75 via-gray/40 to-gray/10"
        />

        <img
          ref={cornerImgRef}
          src="/images/bghero4.png"
          alt="Background decorative element"
          aria-hidden="true"
          className="pointer-events-none select-none absolute bottom-4 right-2 w-[58vw] max-w-[240px] sm:bottom-4 sm:right-12 sm:w-[44vw] sm:max-w-[480px] lg:w-[32vw] lg:max-w-[500px] object-contain object-top z-10"
        />

        {/* ✅ KEY FIX: top on mobile, bottom on sm+ */}
        <div className="
          absolute inset-0 flex flex-col
          justify-start sm:justify-end
          pt-24 sm:pt-0
          pb-0 sm:pb-14
          px-6 sm:px-12 lg:px-16
          z-20
        ">
          <div className="max-w-lg space-y-4 sm:space-y-5">
            <p ref={taglineRef} className="text-gray-300 text-sm sm:text-base font-medium tracking-widest uppercase">
              Welcome to Star Alliance
            </p>
            <h1 ref={headingRef} className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Redefining<br />
              <span className="text-white">Hospitality</span>
            </h1>
            <p ref={paraRef} className="text-sm sm:text-base text-gray-300 max-w-md leading-relaxed">
              We help hospitality brands shape memorable guest experiences through
              clear strategy, thoughtful operations, and long-term growth planning.
            </p>
            <div ref={buttonsRef} className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
              <button className="bg-white border-2 border-white text-[#0e2555] font-semibold text-sm sm:text-base rounded-full py-2.5 px-7 hover:bg-transparent hover:text-white transition-all duration-300 shadow-lg shadow-black/20">
                Discover More
              </button>
              <button className="border-2 border-white/70 text-white font-semibold text-sm sm:text-base rounded-full py-2.5 px-7 hover:bg-white hover:text-black transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-black/65 to-transparent pointer-events-none z-10" />
      </div>
    </section>
  )
}

export default Hero
