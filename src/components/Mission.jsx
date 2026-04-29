import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const pillars = [
  {
    label: 'Our Mission',
    text: 'To provide practical, profit-oriented advisory services that help hospitality owners and operators move from ideas to measurable results.',
  },
  {
    label: 'Our Vision',
    text: 'To be the trusted hospitality advisory partner for brands and owners seeking thoughtful growth, sharper positioning, and long-term value.',
  },
  {
    label: 'Our Values',
    text: 'Clarity, integrity, collaboration, and execution shape every recommendation we make and every partnership we build.',
  },
]

const Mission = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const intro = sectionRef.current?.querySelectorAll('[data-mission-intro]')
      const cards = sectionRef.current?.querySelectorAll('[data-mission-card]')
      const accent = sectionRef.current?.querySelector('[data-mission-accent]')
      const isMobile = window.innerWidth < 768

      gsap.fromTo(
        intro,
        { y: isMobile ? 24 : 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 78%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      gsap.fromTo(
        cards,
        { y: isMobile ? 28 : 44, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.14,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 72%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      gsap.fromTo(
        accent,
        { scaleX: 0, transformOrigin: 'left center' },
        {
          scaleX: 1,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="mx-2 sm:mx-6 pb-16 sm:pb-20 lg:pb-24">
      <div className="rounded-3xl bg-white p-2  sm:p-12  lg:p-14">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_1.25fr] lg:gap-12 xl:gap-16">
          <div className="max-w-xl">
            {/* <span
              data-mission-intro
              className="inline-flex rounded-full border border-gray-200 bg-white px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.24em] text-gray-500"
            >
              The Star Alliance Way
            </span> */}

            <h2
              data-mission-intro
              className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
            >
              A focused approach to hospitality growth.
            </h2>

            {/* <div
              data-mission-accent
              className="mt-6 h-px w-24 bg-gradient-to-r from-[#0e2555] via-[#33548f] to-transparent"
            /> */}

            <p
              data-mission-intro
              className="mt-6 max-w-lg text-sm leading-7 text-gray-600 sm:text-base"
            >
              We build practical strategies that align ownership goals with operational
              action, helping hospitality teams improve conversions, performance, and
              long-term value without unnecessary complexity.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-5">
            {pillars.map((item, index) => (
              <article
                key={item.label}
                data-mission-card
                className="group rounded-[1.75rem] border border-white/80 bg-[#f5f7f9] p-5 shadow-[0_10px_35px_rgba(15,23,42,0.05)] transition-transform duration-300 hover:-translate-y-1 sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0e2555] text-sm font-semibold text-white">
                    0{index + 1}
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {item.label}
                    </h3>
                    <p className="text-sm leading-7 text-gray-600 sm:text-[15px]">
                      {item.text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      
    </section>
    
  )
}

export default Mission
