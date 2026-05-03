import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import IndustriesOverview from '../components/IndustriesOverview'
import Faq from '../components/Faq'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const Industries = () => {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const paraRef = useRef(null)
  const btnRef = useRef(null)
  const imageRef = useRef(null)
  const contentTitleRef = useRef(null)
  const contentTextRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768

      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'restart none none reset',
        },
      })

      tl.fromTo(
        headingRef.current,
        { y: isMobile ? 24 : 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 }
      )
        .fromTo(
          paraRef.current,
          { y: isMobile ? 16 : 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          '-=0.4'
        )
        .fromTo(
          btnRef.current,
          { y: isMobile ? 12 : 18, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 0.5 },
          '-=0.35'
        )
        .fromTo(
          imageRef.current,
          { y: isMobile ? 24 : 40, opacity: 0, scale: 0.98 },
          { y: 0, opacity: 1, scale: 1, duration: 0.85, ease: 'power2.out' },
          '-=0.15'
        )
        .fromTo(
          contentTitleRef.current,
          { y: isMobile ? 20 : 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          '-=0.15'
        )
        .fromTo(
          contentTextRef.current,
          { y: isMobile ? 20 : 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          '-=0.3'
        )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
<SEO
  title="Industries We Serve | Hospitality Consulting Nepal"
  description="We provide hospitality consulting services for hotels, resorts, and hospitality businesses across Nepal. Expert guidance for luxury properties, boutique hotels, and commercial venues."
/>

      <section ref={sectionRef} className="pt-4 sm:pt-6 pb-12 sm:pb-16 md:pb-20">
        <div className="mx-2 overflow-hidden rounded-3xl bg-white shadow-sm sm:mx-6">
          <div className="px-4 pb-10 pt-20 text-center sm:px-6 sm:pb-12 lg:px-8 lg:pt-32">
            <h2
              ref={headingRef}
              className="mx-auto mb-4 max-w-sm text-3xl font-semibold leading-tight tracking-tight text-gray-900 sm:max-w-xl sm:text-4xl md:max-w-2xl md:text-5xl lg:max-w-4xl lg:text-6xl xl:text-[3.8rem]"
            >
              Industries we serve across the hospitality landscape.
            </h2>

            <p
              ref={paraRef}
              className="mx-auto mb-6 max-w-xs px-2 text-sm leading-relaxed text-gray-500 sm:max-w-xl sm:px-4 sm:text-base md:mb-8 md:max-w-2xl md:text-lg lg:max-w-3xl"
            >
              We partner with hospitality businesses across multiple sectors,
              offering practical strategies tailored to each operating model,
              guest journey, and growth objective.
            </p>

            <div ref={btnRef}>
              <button
                onClick={() => navigate('/contact')}
                className="inline-block rounded-full bg-[#0e2555] px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-colors duration-300 hover:bg-[#1a3a7a] hover:shadow-lg sm:px-8 sm:py-3 sm:text-base md:px-10 md:py-3.5 md:text-lg"
              >
                Talk To Us
              </button>
            </div>
          </div>

          <div ref={imageRef} className="px-3 pb-3 sm:px-4 sm:pb-4 lg:px-6 lg:pb-6">
            <div className="overflow-hidden rounded-[1.75rem]">
              <img
                src="/images/bghero2.jpg"
                alt="Hospitality professionals working across service industries"
                className="h-[240px] w-full object-cover object-center transition-transform duration-700 hover:scale-[1.02] sm:h-[320px] lg:h-[440px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <IndustriesOverview />
      
      <Faq />
    </>
  )
}

export default Industries
