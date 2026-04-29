import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const HospitalityMgmtIcon = () => (
  <img src="/images/hm.png" alt="Hospitality Management" className="h-14 w-14 object-contain sm:h-16 sm:w-16" />
)

const HospitalityConsultIcon = () => (
  <img src="/images/hc.png" alt="Hospitality Consultancy" className="h-14 w-14 object-contain sm:h-16 sm:w-16" />
)

const OwnerRepIcon = () => (
  <img src="/images/or.png" alt="Owner Representation" className="h-14 w-14 object-contain sm:h-16 sm:w-16" />
)

const ConceptDesignIcon = () => (
  <img src="/images/cdd.png" alt="Concept Development and Design" className="h-14 w-14 object-contain sm:h-16 sm:w-16" />
)

const RoomsDivisionIcon = () => (
  <img src="/images/ms.png" alt="Rooms Division Management" className="h-14 w-14 object-contain sm:h-16 sm:w-16" />
)

const FoodBevIcon = () => (
  <img src="/images/fbm.png" alt="Food and Beverages Management" className="h-14 w-14 object-contain sm:h-16 sm:w-16" />
)

const FeasibilityIcon = () => (
  <svg className="h-14 w-14 sm:h-16 sm:w-16" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 44L20 30L30 38L42 18" stroke="black" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 44H48" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M8 44V12" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
)

const MysteryShopperIcon = () => (
  <svg className="h-14 w-14 sm:h-16 sm:w-16" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="26" cy="26" r="14" stroke="black" strokeWidth="3.2" />
    <path d="M36 36L46 46" stroke="black" strokeWidth="3.5" strokeLinecap="round" />
    <circle cx="26" cy="26" r="6" stroke="black" strokeWidth="2.5" />
  </svg>
)

const services = [
  {
    icon: <HospitalityMgmtIcon />,
    title: 'Hospitality Management',
    description:
      'End-to-end management support designed to improve service consistency, operational control, and long-term commercial performance.',
  },
  {
    icon: <HospitalityConsultIcon />,
    title: 'Hospitality Consultancy',
    description:
      'Strategic consulting for owners and operators seeking practical recommendations, sharper systems, and sustainable growth.',
  },
  {
    icon: <OwnerRepIcon />,
    title: 'Owner Representation',
    description:
      'Independent representation that keeps owner priorities central across planning, execution, operator coordination, and review.',
  },
  {
    icon: <ConceptDesignIcon />,
    title: 'Concept Development & Design',
    description:
      'Concept and design guidance that aligns guest experience, brand character, and commercial objectives from the start.',
  },
  {
    icon: <RoomsDivisionIcon />,
    title: 'Rooms Division Management',
    description:
      'Support for front office, housekeeping, and room operations to strengthen efficiency, guest satisfaction, and performance.',
  },
  {
    icon: <FoodBevIcon />,
    title: 'Food & Beverages Management',
    description:
      'Food and beverage strategies focused on service quality, outlet identity, and stronger daily profitability.',
  },
  {
    icon: <FeasibilityIcon />,
    title: 'Feasibility Study',
    description:
      'Detailed market and financial analysis to validate ideas, assess viability, and guide development decisions with confidence.',
  },
  {
    icon: <MysteryShopperIcon />,
    title: 'Mystery Shopper',
    description:
      'Guest-journey evaluations that uncover service gaps, reveal strengths, and support focused operational improvement.',
  },
]

const ServicesOverview = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const intro = sectionRef.current?.querySelectorAll('[data-services-intro]')
      const cards = sectionRef.current?.querySelectorAll('[data-service-card]')
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
          stagger: 0.08,
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
              data-services-intro
              className="inline-flex rounded-full border border-gray-200 bg-white px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.24em] text-gray-500"
            >
              Our Services
            </span> */}
            <h2
              data-services-intro
              className="mx-auto mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
            >
              Practical hospitality services built around growth and execution.
            </h2>
            <p
              data-services-intro
              className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base"
            >
              Explore the range of services we provide to elevate hospitality
              performance across operations, planning, guest experience, and
              investment strategy.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.title}
                data-service-card
                className="group flex min-h-[270px] flex-col rounded-[1.75rem] bg-white px-6 py-8 text-center shadow-[0_12px_36px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.1)] sm:min-h-[290px] sm:px-7"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white">
                  {service.icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-snug tracking-tight text-[#0e2555] sm:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-[15px]">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesOverview
