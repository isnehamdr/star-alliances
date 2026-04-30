import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Core Services', href: '/services' },
  { name: 'Hotel Development', href: '/industries' },
  { name: 'Projects', href: '/services' }
]

const serviceLinks = [
  { name: 'Hospitality Management', href: '/' },
  { name: 'Owner Representation', href: '/' },
  { name: 'Concept Development', href: '/' },
  { name: 'Food & Beverage', href: '/' }
]

const contactDetails = [
  { type: 'email', value: 'info@staralliance.com', href: 'mailto:info@staralliance.com' },
  { type: 'phone', value: '+9779801145612', href: 'tel:+9779801145612' },
  { type: 'address', value: 'Maharajgunj, Kathmandu', href: 'https://maps.google.com/?q=Maharajgunj+Kathmandu' }
]

const ArrowUpRight = () => (
  <svg
    className="h-4 w-4"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M6 14L14 6M8 6H14V12"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const Footer = () => {
  const sectionRef = useRef(null)
  const topRowRef = useRef(null)
  const colsRef = useRef([])
  const bottomRef = useRef(null)

  useEffect(() => {
    // Small delay to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        const items = [topRowRef.current, ...colsRef.current, bottomRef.current].filter(Boolean)
        
        if (items.length === 0) return

        // Set initial state
        items.forEach(item => {
          gsap.set(item, { opacity: 0, y: 36 })
        })

        // Create animation - only plays once, doesn't reverse
        gsap.to(items, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 88%',
            toggleActions: "play none none none", // Only plays once, no reverse
            invalidateOnRefresh: true,
            id: "footerAnimation",
          },
        })
      }, sectionRef)

      // Force ScrollTrigger to refresh with hard parameter
      ScrollTrigger.refresh(true)
    }, 100)

    // Handle window resize with debounce
    let resizeTimeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        ScrollTrigger.refresh()
      }, 150)
    }

    // Handle load event for images/fonts
    const handleLoad = () => {
      ScrollTrigger.refresh()
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('load', handleLoad)

    return () => {
      clearTimeout(timer)
      clearTimeout(resizeTimeout)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('load', handleLoad)
      
      // Kill all ScrollTriggers created for this component
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.id === "footerAnimation") {
          trigger.kill()
        }
      })
      ScrollTrigger.refresh()
    }
  }, [])

  return (
    <footer ref={sectionRef} className="pb-8 pt-6 sm:pb-10 sm:pt-8 mx-2 sm:mx-6">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0e2e79] text-white">
        <div className="pointer-events-none absolute inset-0 bg-[#0e2e79]" />

        <div className="relative px-6 py-12 sm:px-12 sm:py-14 lg:px-20 lg:py-16">
          <div
            ref={topRowRef}
            className="flex flex-col gap-8 border-b border-white/10 pb-10 lg:flex-row lg:items-end lg:justify-between"
          >
            <div className="max-w-2xl">
              <img
                src="/images/logo.png"
                alt="Star Alliance"
                className="mb-6 h-14 w-auto object-contain sm:h-16"
              />
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-white/60">
                Star Alliance Hospitality
              </p>
              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                Thoughtful hospitality strategy, built with clarity and care.
              </h2>
            </div>

            <a
              href="/contact"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0e2555] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f3e7bf]"
            >
              Let's Talk
              <ArrowUpRight />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-8 py-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.9fr_1fr_1fr] lg:gap-10">
            <div ref={(el) => { colsRef.current[0] = el }}>
              <p className="max-w-md text-base leading-7 text-white/72 sm:text-lg">
                We partner with owners and operators to shape profitable, well-positioned hospitality experiences from concept through operation.
              </p>
            </div>

            <div ref={(el) => { colsRef.current[1] = el }}>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-white/55">
                Quick Links
              </p>
              <div className="space-y-3">
                {quickLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="block w-fit text-sm text-white/78 transition-colors duration-300 hover:text-white sm:text-base"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            <div ref={(el) => { colsRef.current[2] = el }}>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-white/55">
                Services
              </p>
              <div className="space-y-3">
                {serviceLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="block w-fit text-sm text-white/78 transition-colors duration-300 hover:text-white sm:text-base"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            <div ref={(el) => { colsRef.current[3] = el }}>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-white/55">
                Contact
              </p>
              <div className="space-y-3 text-sm text-white/78 sm:text-base">
                {contactDetails.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target={item.type === 'address' ? '_blank' : undefined}
                    rel={item.type === 'address' ? 'noopener noreferrer' : undefined}
                    className="block transition-colors duration-300 hover:text-white"
                  >
                    {item.value}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div
            ref={bottomRef}
            className="flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between"
          >
            <p>© 2026 Star Alliance Hospitality. All rights reserved.</p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://sait.com.np/" 
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-white"
              >
                Crafted By : S.A I.T Solution Trade and Concern
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer