import React, { useEffect, useRef } from 'react'
import {
  Building2,
  UtensilsCrossed,
  PartyPopper,
  Flower2,
} from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const industries = [
  {
    title: 'Hotels & Resorts',
    description:
      'Expert support for managing, positioning, and growing hotels and resorts with stronger operational and commercial performance.',
    icon: Building2,
  },
  {
    title: 'Restaurants & Food Services',
    description:
      'Practical strategies to improve efficiency, service quality, outlet identity, and revenue across food service operations.',
    icon: UtensilsCrossed,
  },
  {
    title: 'Event Venues',
    description:
      'Operational and commercial guidance to help event-focused properties improve bookings, delivery standards, and profitability.',
    icon: PartyPopper,
  },
  {
    title: 'Spa & Wellness Centers',
    description:
      'Support for building profitable wellness concepts through thoughtful positioning, service planning, and guest experience design.',
    icon: Flower2,
  },
]

const IndustriesOverview = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const intro = sectionRef.current?.querySelectorAll('[data-industries-intro]')
      const cards = sectionRef.current?.querySelectorAll('[data-industry-card]')
      const isMobile = window.innerWidth < 768

      gsap.fromTo(
        intro,
        { y: isMobile ? 22 : 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      gsap.fromTo(
        cards,
        { y: isMobile ? 24 : 42, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 72%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="mx-2 pb-16 sm:mx-6 sm:pb-20 lg:pb-24">
      <div className="  py-10 sm:py-12  lg:py-14">
        <div className="">
          <div className="text-center">
            {/* <span
              data-industries-intro
              className="inline-flex rounded-full border border-gray-200 bg-white px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.24em] text-gray-500"
            >
              Industries We Serve
            </span> */}
            <h2
              data-industries-intro
              className="mx-auto mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
            >
              Tailored hospitality support across diverse operating environments.
            </h2>
            <p
              data-industries-intro
              className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base"
            >
              We work across hospitality sectors with solutions shaped around
              each business model, guest expectation, and commercial objective.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4">
            {industries.map((industry) => {
              const Icon = industry.icon

              return (
                <article
                  key={industry.title}
                  data-industry-card
                  className="group flex min-h-[280px] flex-col rounded-[1.75rem] bg-white px-6 py-8 text-center shadow-[0_12px_36px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.1)] sm:min-h-[300px] sm:px-7"
                >
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#0e2555]  text-white">
                    <Icon className="h-9 w-9 sm:h-10 sm:w-10" strokeWidth={2.1} />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold leading-snug tracking-tight text-[#0e2555]">
                    {industry.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-[15px]">
                    {industry.description}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default IndustriesOverview
