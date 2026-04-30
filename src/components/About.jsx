import React, { useEffect, useRef, useState } from 'react'

/* ─────────────────────────────────────────────
   useInView — fires when element enters/leaves viewport
───────────────────────────────────────────── */
function useInView(threshold = 0.12) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { 
        setInView(entry.isIntersecting) // Updates both entering and leaving
      },
      { threshold, rootMargin: '0px 0px -20px 0px' }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  
  return [ref, inView]
}

/* ─────────────────────────────────────────────
   Animated wrapper — fade-up / slide-left on enter
───────────────────────────────────────────── */
function Reveal({ children, delay = 0, fromLeft = false, className = '' }) {
  const [ref, inView] = useInView()
  
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView
          ? 'translate(0, 0)'
          : fromLeft
          ? 'translateX(-36px)'
          : 'translateY(32px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

/* ─────────────────────────────────────────────
   Image with clip-path reveal
───────────────────────────────────────────── */
function ImageReveal({ src, alt, delay = 0 }) {
  const [ref, inView] = useInView(0.08)
  
  return (
    <div
      ref={ref}
      className="w-full rounded-3xl overflow-hidden"
      style={{
        aspectRatio: '16 / 7',
        minHeight: '200px',
      }}
    >
      <div
        className="w-full h-full transition-all duration-[1100ms] ease-[cubic-bezier(0.77,0,0.18,1)]"
        style={{
          clipPath: inView 
            ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' 
            : 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
          transitionDelay: `${delay}ms`,
        }}
      >
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   About Component — fully responsive with Tailwind
───────────────────────────────────────────── */
const About = () => {
  return (
    <>
      {/* Google Fonts import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap');
        
        .about-section {
        
        }
        .about-section h2,
        .about-section .quote-text {
     
        }
        .about-divider {
          width: 40px;
          height: 2px;
          background: #0e2555;
          transition: width 0.4s ease;
        }
        .about-section:hover .about-divider {
          width: 64px;
        }
        .more-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #0e2555;
          color: white;
          font-size: 15px;
          font-weight: 500;
          padding: 14px 28px;
          border-radius: 100px;
          border: none;
          cursor: pointer;
          transition: background 0.25s ease, transform 0.2s ease;
          letter-spacing: 0.02em;
        }
        .more-btn:hover {
          background: #1a3a7a;
          transform: translateY(-2px);
        }
        .more-btn svg {
          transition: transform 0.2s ease;
        }
        .more-btn:hover svg {
          transform: translateX(4px);
        }
        .tag-pill {
          display: inline-block;
          padding: 6px 14px;
          border-radius: 100px;
          border: 1px solid #d1d5db;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #6b7280;
          background: white;
        }
        
        /* Responsive adjustments */
        @media (max-width: 640px) {
          .more-btn {
            padding: 10px 20px;
            font-size: 13px;
          }
          .tag-pill {
            font-size: 10px;
            padding: 4px 12px;
          }
        }
      `}</style>

      <section className="about-section mx-2 sm:mx-6 ">
        <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 overflow-hidden ">
          
       

          {/* Main Title */}
          <Reveal delay={100}>
            <h2 className="text-[#11141a] font-bold text-3xl sm:text-5xl leading-tight mt-5 mb-6 max-w-xl">
              About <br />
               Star Alliance Hospitality
            </h2>
          </Reveal>

          {/* Full-width Image */}
          <ImageReveal
            src="/images/abot.webp"
            alt="Star Alliance Hospitality"
            delay={200}
          />

          {/* Bottom: Two-column responsive layout */}
          <div className="mt-12 sm:mt-14 lg:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-24 items-start">
            
            {/* LEFT — punchy statement */}
            <Reveal delay={300} fromLeft>
              <p className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-900 leading-tight">
                Turning vision into
                <br className="hidden sm:block" />
                exceptional stays.
              </p>
            </Reveal>

            {/* RIGHT — body copy + CTA */}
            <Reveal delay={420}>
              <p className="text-base sm:text-lg text-gray-500 font-light leading-relaxed mb-8">
                We are hospitality professionals and senior leaders with multi-disciplinary
                expertise, broad geographic scope, and notable hands-on experience.
                We provide owners with practical, profit-oriented advisory services
                across a broad range of property types — acting as hands-on partners
                implementing recommendations to drive conversions and growth.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}

export default About