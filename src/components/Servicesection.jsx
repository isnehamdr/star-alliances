import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

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
      <div className="flex items-start justify-between mb-6">
        <div className="w-10 h-10 flex items-center justify-center">
          {icon}
        </div>
        <a
          ref={arrowRef}
          href="/services"
          className="w-12 h-12 rounded-lg bg-[#f5f7f9] flex items-center justify-center text-[#1946bb] group-hover:bg-[#1946bb] group-hover:text-white transition-colors duration-300"
        >
          <ArrowDiagonal />
        </a>
      </div>

      <h3 className="text-[#11141a] font-bold text-lg sm:text-xl leading-snug mb-2">
        {title}
      </h3>

      <p className="text-[#6b7280] text-sm sm:text-[0.9rem] leading-relaxed">
        {desc}
      </p>

      <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#1946bb] group-hover:w-full transition-all duration-500 rounded-b-2xl" />
    </a>
  )
}

export default function Servicesection() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const subtextRef = useRef(null)
  const btnRef = useRef(null)
  const cardRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add({
        isDesktop: '(min-width: 768px)',
        isMobile: '(max-width: 767px)'
      }, (context) => {
        const { isMobile } = context.conditions

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
            start: isMobile ? 'top 92%' : 'top 78%',
            end: 'bottom 20%',
            toggleActions: 'play reverse play reverse',
          },
          defaults: {
            ease: 'power1.out',
          }
        })

        tl.to([headingRef.current, subtextRef.current, btnRef.current], {
          opacity: 1,
          y: 0,
          duration: isMobile ? 0.45 : 0.6,
          stagger: 0.08,
        })

        tl.to(cardRefs.current, {
          opacity: 1,
          y: 0,
          duration: isMobile ? 0.45 : 0.6,
          stagger: {
            each: isMobile ? 0.05 : 0.08,
          },
        }, '-=0.35')
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const leftCards  = cards.filter(c => c.col === 'left')
  const midCards   = cards.filter(c => c.col === 'middle')
  const rightCards = cards.filter(c => c.col === 'right')

  const getRef = (colGroup, idx) => {
    const offsets = { left: 0, middle: 2, right: 4 }
    return (el) => { cardRefs.current[offsets[colGroup] + idx] = el }
  }

  return (
    <section
      ref={sectionRef}
      className="py-8 lg:py-24 sm:mx-6 mx-2"
    >
      <div className="rounded-3xl py-6 sm:px-16 mx-2">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-10 sm:mb-12">
          <div ref={headingRef} className="max-w-sm">
            <h2 className="text-[#11141a] font-bold text-3xl sm:text-5xl leading-tight">
              Access To our Core Services
            </h2>
          </div>

          <div ref={subtextRef} className="sm:text-right">
            <div ref={btnRef} className="inline-block">
              <a
                href="/services"
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

        <div className="
          grid grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-4 sm:gap-5
          items-start
        ">
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
