import React, { useEffect, useState } from 'react'

const ScrolltoTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 320)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-4 right-3 z-50 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-[#0e2555] text-white shadow-[0_14px_30px_rgba(14,37,85,0.28)] transition-all duration-300 hover:bg-[#0e2e79] hover:shadow-[0_18px_36px_rgba(14,46,121,0.32)] sm:bottom-6 sm:right-5 sm:h-12 sm:w-12 ${
        isVisible
          ? 'pointer-events-auto translate-x-0 opacity-100'
          : 'pointer-events-none translate-x-4 opacity-0'
      }`}
    >
      <img
        src="/images/up.png"
        alt=""
        aria-hidden="true"
        className="h-4 w-4 object-contain brightness-0 invert sm:h-5 sm:w-5"
      />
    </button>
  )
}

export default ScrolltoTop
