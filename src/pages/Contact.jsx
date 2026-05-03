import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Faq from '../components/Faq'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

// ─── Carousel Data ─────────────────────────────────────────────────────────────
const slides = [
  {
    label: 'Sales & inquiries',
    title: 'Talk to our sales team',
    desc: 'Get in touch with our sales experts to explore what we can do for your business.',
  },
  {
    label: 'Support',
    title: 'Need help with something?',
    desc: 'Our support team is available around the clock to assist with any questions.',
  },
  {
    label: 'Partnerships',
    title: 'Lets build together',
    desc: 'Explore partnership opportunities and how we can grow together.',
  },
]

// ─── Icons ─────────────────────────────────────────────────────────────────────
const BagIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect x="6" y="13" width="24" height="18" rx="3" stroke="#2563EB" strokeWidth="2.2"/>
    <path d="M13 13V10a5 5 0 0 1 10 0v3" stroke="#2563EB" strokeWidth="2.2" strokeLinecap="round"/>
  </svg>
)

const ChevronLeft = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M3 7H11M11 7L7 3M11 7L7 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// ─── Input Field ───────────────────────────────────────────────────────────────
const Field = ({ label, placeholder, type = 'text', half = false, textarea = false }) => (
  <div className={half ? 'flex-1 min-w-0' : 'w-full'}>
    <label className="block text-slate-800 text-sm font-semibold mb-2">{label}</label>
    {textarea ? (
      <textarea
        placeholder={placeholder}
        rows={5}
        className="w-full bg-[#f3f4f6] rounded-2xl px-4 py-3 text-sm text-slate-700 placeholder-slate-400 outline-none focus:ring-2 focus:ring-blue-200 resize-none transition"
      />
    ) : (
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-[#f3f4f6] rounded-2xl px-4 py-3 text-sm text-slate-700 placeholder-slate-400 outline-none focus:ring-2 focus:ring-blue-200 transition"
      />
    )}
  </div>
)

// ─── Contact Component ─────────────────────────────────────────────────────────
const Contact = () => {
  const sectionRef   = useRef(null)
  const leftRef      = useRef(null)
  const rightRef     = useRef(null)
  const slideTextRef = useRef(null)
  const [current, setCurrent]   = useState(0)
  const [animating, setAnimating] = useState(false)

  // Scroll-trigger entrance
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0,
          duration: 0.75,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 82%' },
        }
      )
      gsap.fromTo(
        rightRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 82%' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  // Carousel slide animation
  const goTo = (dir) => {
    if (animating) return
    setAnimating(true)
    const el = slideTextRef.current
    gsap.to(el, {
      opacity: 0, x: dir === 'next' ? -20 : 20, duration: 0.25, ease: 'power2.in',
      onComplete: () => {
        setCurrent((prev) => {
          if (dir === 'next') return (prev + 1) % slides.length
          return (prev - 1 + slides.length) % slides.length
        })
        gsap.fromTo(el,
          { opacity: 0, x: dir === 'next' ? 20 : -20 },
          { opacity: 1, x: 0, duration: 0.3, ease: 'power2.out', onComplete: () => setAnimating(false) }
        )
      },
    })
  }

  const slide = slides[current]

  return (
    <>
     <SEO
        title="Contact Star Alliance Hospitality Nepal"
        description="Get in touch with our hospitality consulting experts for partnerships and services."
        url="https://staralliance.com.np/contact"
      />
    <section ref={sectionRef} className="py-28 md:py-38">
      <div className="max-w-7xl mx-auto px-4 sm:px-0">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

          {/* ── LEFT COLUMN ── */}
          <div ref={leftRef} className="w-full lg:w-[42%] flex-shrink-0">

            {/* Title + subtitle */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-none">
                Get in touch
              </h1>
              <p className="mt-4 text-slate-500 text-sm sm:text-base leading-relaxed max-w-sm">
                Have questions about our banking solutions? We're here to help you navigate your financial journey with confidence.
              </p>
            </div>

            {/* Carousel Card */}
            <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm">
              {/* Carousel controls */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-slate-400 text-sm font-medium">
                  {slide.label}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => goTo('prev')}
                    className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:border-slate-400 transition-colors"
                  >
                    <ChevronLeft />
                  </button>
                  <button
                    onClick={() => goTo('next')}
                    className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center text-white hover:bg-slate-700 transition-colors"
                  >
                    <ChevronRight />
                  </button>
                </div>
              </div>

              {/* Slide text */}
              <div ref={slideTextRef} className="min-h-[72px]">
                <h3 className="text-slate-900 font-bold text-base sm:text-lg leading-snug mb-2">
                  {slide.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{slide.desc}</p>
              </div>

              {/* Dots */}
              <div className="flex gap-1.5 mt-5">
                {slides.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === current ? 'w-5 bg-slate-900' : 'w-1.5 bg-slate-300'
                    }`}
                  />
                ))}
              </div>

              {/* Email CTA Card */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <div className="mb-4">
                  <BagIcon />
                </div>
                <h3 className="text-slate-900 font-bold text-lg sm:text-xl mb-2">
                  Prefer to reach out directly?
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 max-w-xs">
                  Our team typically responds within 24 hours. We're ready to discuss how we can help your business grow.
                </p>
                <a
                  href="mailto:info@staralliance.com"
                  className="inline-flex items-center gap-2 text-slate-900 font-semibold text-sm hover:text-blue-600 transition-colors"
                >
                 info@staralliance.com
                  <ArrowRight />
                </a>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN — Form ── */}
          <div
            ref={rightRef}
            className="w-full lg:flex-1 bg-white rounded-3xl p-6 sm:p-8 shadow-sm"
          >
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Send us a message</h2>
              <p className="text-slate-500 text-sm">Fill out the form below and we'll get back to you shortly.</p>
            </div>

            {/* Row 1: First + Last name */}
            <div className="flex flex-col sm:flex-row gap-4 mb-5">
              <Field label="First name" placeholder="John" half />
              <Field label="Last name"  placeholder="Carter" half />
            </div>

            {/* Row 2: Email */}
            <div className="mb-5">
              <Field label="Email address" placeholder="john@company.com" type="email" />
            </div>

            {/* Row 3: Phone + Company */}
            <div className="flex flex-col sm:flex-row gap-4 mb-5">
              <Field label="Phone number" placeholder="(555) 123-4567" type="tel" half />
              <Field label="Company"      placeholder="Company name" half />
            </div>

            {/* Row 4: Message */}
            <div className="mb-7">
              <Field label="Message" placeholder="Tell us about your banking needs..." textarea />
            </div>

            {/* Submit */}
            <button
              className="w-full sm:w-auto bg-[#0e2555] active:scale-[0.98] text-white font-semibold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all duration-200"
            >
              Send message
            </button>
            
            <p className="text-xs text-slate-400 mt-4 text-center sm:text-left">
              By submitting, you agree to our privacy policy. We'll never share your information.
            </p>
          </div>

        </div>
      </div>
    </section>
    <Faq/>
    </>
  )
}

export default Contact