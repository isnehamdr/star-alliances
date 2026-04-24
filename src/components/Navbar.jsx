import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

const Navbar = () => {
  const navBarRef = useRef(null)
  const wrapperRef = useRef(null)
  const logoRef = useRef(null)
  const linksRef = useRef([])
  const mobileMenuRef = useRef(null)

  const [menuOpen, setMenuOpen] = useState(false)
  const scrolledRef = useRef(false)

  const navLinks = ['Home', 'About', 'Services', 'Industries']

  // ── Entry animation ─────────────────────────────
  useEffect(() => {
    const items = [logoRef.current, ...linksRef.current.filter(Boolean)]

    gsap.set(items, { opacity: 0, y: -16 })
    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.55,
      ease: 'power3.out',
      stagger: 0.07,
      delay: 0.15,
    })
  }, [])

  // ── Scroll behavior (apply px-12 ONLY after scroll) ─────────────────────────────
  useEffect(() => {
    const applyScrolled = () => {
      // Remove outer spacing
      gsap.to(wrapperRef.current, {
        paddingTop: 0,
        paddingLeft: 0,
        paddingRight: 0,
        duration: 0.42,
        ease: 'power2.inOut',
      })

      // Apply px-12 (48px)
      gsap.to(navBarRef.current, {
        borderRadius: 0,
        backgroundColor: '#0e2e79',
        backdropFilter: 'blur(12px)',
        paddingLeft: 48,   // ✅ px-12
        paddingRight: 48,  // ✅ px-12
        duration: 0.42,
        ease: 'power2.inOut',
      })
    }

    const onScroll = () => {
      const isScrolled =
        (window.scrollY || document.documentElement.scrollTop) > 60

      if (isScrolled && !scrolledRef.current) {
        scrolledRef.current = true
        applyScrolled()
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // ── Mobile menu init ─────────────────────────────
  useEffect(() => {
    if (mobileMenuRef.current) {
      gsap.set(mobileMenuRef.current, { x: '100%' })
    }
  }, [])

  // ── Mobile menu toggle ───────────────────────────
  useEffect(() => {
    if (!mobileMenuRef.current) return

    if (menuOpen) {
      gsap.to(mobileMenuRef.current, {
        x: '0%',
        duration: 0.52,
        ease: 'power3.out',
      })
      document.body.style.overflow = 'hidden'
    } else {
      gsap.to(mobileMenuRef.current, {
        x: '100%',
        duration: 0.38,
        ease: 'power3.in',
      })
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 mx-2 sm:mx-6">

      {/* Wrapper (default spacing before scroll) */}
      <div
        ref={wrapperRef}
        className="w-full pt-6 sm:pt-12 px-2 sm:px-24"
      >

        {/* Navbar */}
        <div
          ref={navBarRef}
          className="flex items-center justify-between py-1 px-4 sm:px-8  bg-transparent"
        >
          {/* Logo */}
          <div ref={logoRef}>
            <img
              src="/images/logo.png"
              alt="Star Alliance"
              className="h-12 sm:h-16 object-contain"
            />
          </div>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-5 bg-[#f5f7f9] pl-6 pr-2 py-1 rounded-full">
            <div className="flex items-center gap-5 text-[#0e2555] font-semibold text-base lg:text-lg">
              {navLinks.map((link, i) => (
                <a
                  key={link}
                  href="#"
                  ref={el => (linksRef.current[i] = el)}
                  className="relative group hover:text-[#8a6d3e] transition-colors duration-200"
                >
                  {link}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-[#0e2555] rounded-full group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            <button
              ref={el => (linksRef.current[navLinks.length] = el)}
              className="bg-[#0e2555] text-white font-semibold text-base lg:text-lg px-5 py-1.5 rounded-full hover:bg-[#8a6d3e] transition-colors duration-300"
            >
              Contact
            </button>
          </div>

          {/* Mobile */}
          <button
            ref={el => (linksRef.current[navLinks.length + 1] = el)}
            className="md:hidden text-white text-3xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        ref={mobileMenuRef}
        className="fixed top-0 right-0 w-full h-dvh bg-[#0e2e79] z-[60] md:hidden flex flex-col"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <img src="/images/logo.png" alt="logo" className="h-11" />
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white text-2xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col px-8 py-10 flex-1">
          {navLinks.map(link => (
            <a
              key={link}
              href="#"
              onClick={() => setMenuOpen(false)}
              className="text-white text-2xl font-semibold py-5 border-b border-white/10 last:border-0 hover:text-[#b08d57]"
            >
              {link}
            </a>
          ))}

          <button
            onClick={() => setMenuOpen(false)}
            className="mt-10 bg-white text-[#060d1f] font-semibold text-lg py-3.5 rounded-full hover:bg-[#8a6d3e]"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar