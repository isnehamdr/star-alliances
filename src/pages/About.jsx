import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Mission from '../components/Mission'
import AssociatedProjects from '../components/AssociatedProjects'
import TeamMembers from '../components/TeamMembers'
import Faq from '../components/Faq'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const paraRef = useRef(null)
  const btnRef = useRef(null)
  const imgWrapRef = useRef(null)
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
          imgWrapRef.current,
          { y: isMobile ? 24 : 48, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: 'power2.out' },
          '-=0.25'
        )
        .fromTo(
          contentTitleRef.current,
          { y: isMobile ? 20 : 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          '-=0.2'
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
    <section ref={sectionRef} className="pt-4 sm:pt-6 pb-8 sm:pb-16 md:pb-20">
      {/* Outer white card */}
      <div className="bg-white rounded-3xl mx-2 sm:mx-6 overflow-hidden shadow-sm">

        {/* ── Text block ── */}
        <div className="pt-20 lg:pt-24 pb-8 sm:pb-10 md:pb-12 px-4 sm:px-6 md:px-8 text-center">
          <h1
            ref={headingRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[3.8rem] font-semibold
                       text-gray-900 leading-tight tracking-tight
                       max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto mb-4 sm:mb-5 md:mb-6"
          >
            The story of our existence
          </h1>

          <p
            ref={paraRef}
            className="text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed
                       max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto mb-6 md:mb-8
                       px-2 sm:px-4"
          >
            We are hospitality professionals and senior leaders with multi-disciplinary
            hospitality expertise, broad geographic scope, and notable hands-on experience.
          </p>

          <div ref={btnRef}>
            <button
              onClick={() => navigate('/contact')}
              className="inline-block bg-[#0e2555] text-white font-semibold
                         text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5
                         rounded-full hover:bg-[#1a3a7a] transition-colors duration-300
                         shadow-md hover:shadow-lg"
            >
              Contact Us
            </button>
          </div>
        </div>

       
          <img
            src="/images/aboutpage.jpg"
            alt="About Star Alliance Hospitality"
            className="w-full max-w-7xl mx-auto rounded-t-3xl
                       object-cover object-center
                       transition-transform duration-700 hover:scale-[1.02]
                       "
            loading="lazy"
          />
    

      

      </div>
        {/* ── Content section ── */}
        <div className=" pt-6 sm:pt-32 py-8 sm:py-24 max-w-7xl  mx-2 sm:mx-6 ">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-12">
            <div ref={contentTitleRef} className="lg:w-2/5">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 
                             leading-tight tracking-tight">
                Ownership Strategy for Conversion Growth
              </h2>
            </div>
            <div ref={contentTextRef} className="lg:w-3/5">
              <div className="text-gray-600 text-base sm:text-md space-y-6">
                <p className="leading-relaxed">
                  We implement recommendations with a practical, hands-on approach to ensure effective results. 
                  By combining operational expertise with direct action, we drive conversions and solve real 
                  challenges alongside your team. No theoretical plans—just execution that fuels immediate growth.
                </p>
                <p className="leading-relaxed">
                  Our consulting services are focused on profitability and growth, guiding you every step of the way. 
                  We develop ownership strategies that prioritize your bottom line while converting every opportunity 
                  into sustainable results. Profitability isn't an afterthought—it's the core of every decision.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* ── Line Divider ── */}

    </section>
    <div className="max-w-7xl mx-auto sm:block hidden ">
  <hr className="border-t-2 border-gray-300" />
</div>
    <AssociatedProjects/>
    <Mission />
    <Faq/>
    </>
  )
}

export default About
