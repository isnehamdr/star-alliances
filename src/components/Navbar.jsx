// import React, { useEffect, useRef, useState } from 'react'
// import { Link, useNavigate, useLocation } from 'react-router-dom'  
// import { gsap } from 'gsap'

// const Navbar = () => {
//   const navBarRef = useRef(null)
//   const wrapperRef = useRef(null)
//   const logoRef = useRef(null)
//   const linksRef = useRef([])
//   const mobileMenuRef = useRef(null)
//   const navigate = useNavigate()

//   const [menuOpen, setMenuOpen] = useState(false)
//   const scrolledRef = useRef(false)
//   const lastScrollY = useRef(0)
//   const isNavbarVisible = useRef(true)

//   const location = useLocation()
// const lightBgPages = ['/about', '/services', '/industries', '/contact']
// const isLightPage = lightBgPages.includes(location.pathname)

//   const navLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'About', path: '/about' },
//     { name: 'Services', path: '/services' },
//     { name: 'Industries', path: '/industries' }
//   ]

//   // ── Entry animation ─────────────────────────────
//   useEffect(() => {
//     const items = [logoRef.current, ...linksRef.current.filter(Boolean)]

//     gsap.set(items, { opacity: 0, y: -16 })
//     gsap.to(items, {
//       opacity: 1,
//       y: 0,
//       duration: 0.55,
//       ease: 'power3.out',
//       stagger: 0.07,
//       delay: 0.15,
//     })
//   }, [])

//   // ── Scroll behavior (hide navbar by default, show only when scrolling up) ─────────────────────────────
//   useEffect(() => {
//     const applyScrolled = () => {
//       gsap.to(wrapperRef.current, {
//         paddingTop: 0,
//         paddingLeft: 0,
//         paddingRight: 0,
//         duration: 0.42,
//         ease: 'power2.inOut',
//       })

//       gsap.to(navBarRef.current, {
//         borderRadius: 0,
//         backgroundColor: '#0e2e79',
//         backdropFilter: 'blur(12px)',
//         paddingLeft: window.innerWidth >= 768 ? 48 : 16,
//         paddingRight: window.innerWidth >= 768 ? 48 : 16,
//         duration: 0.42,
//         ease: 'power2.inOut',
//       })
//     }

//     const removeScrolled = () => {
//       // Restore original spacing
//       gsap.to(wrapperRef.current, {
//         paddingTop: window.innerWidth >= 640 ? 48 : 16,
//         paddingLeft: window.innerWidth >= 640 ? 24 : 12,
//         paddingRight: window.innerWidth >= 640 ? 24 : 12,
//         duration: 0.42,
//         ease: 'power2.inOut',
//       })

//       gsap.to(navBarRef.current, {
//         borderRadius: 9999,
//         backgroundColor: 'transparent',
//         backdropFilter: 'blur(0px)',
//         paddingLeft: window.innerWidth >= 768 ? 32 : 16,
//         paddingRight: window.innerWidth >= 768 ? 32 : 16,
//         duration: 0.42,
//         ease: 'power2.inOut',
//       })
//     }

//     // Hide navbar on scroll down, show on scroll up
//     const handleScrollDirection = () => {
//       const currentScrollY = window.scrollY || document.documentElement.scrollTop
      
//       // Always hide navbar when scrolling down (if not at the very top)
//       if (currentScrollY > lastScrollY.current && currentScrollY > 20) {
//         if (isNavbarVisible.current) {
//           gsap.to(wrapperRef.current, {
//             y: '-100%',
//             duration: 0.3,
//             ease: 'power2.inOut'
//           })
//           isNavbarVisible.current = false
//         }
//       } 
//       // Show navbar when scrolling up
//       else if (currentScrollY < lastScrollY.current) {
//         if (!isNavbarVisible.current) {
//           gsap.to(wrapperRef.current, {
//             y: '0%',
//             duration: 0.3,
//             ease: 'power2.inOut'
//           })
//           isNavbarVisible.current = true
//         }
//       }
      
//       lastScrollY.current = currentScrollY
//     }

//     const onScroll = () => {
//       const currentScrollY = window.scrollY || document.documentElement.scrollTop
//       const isScrolled = currentScrollY > 60

//       // Update navbar styling based on scroll position
//       if (isScrolled && !scrolledRef.current) {
//         scrolledRef.current = true
//         applyScrolled()
//       }

//       if (!isScrolled && scrolledRef.current) {
//         scrolledRef.current = false
//         removeScrolled()
//       }

//       // Handle hide/show based on scroll direction
//       handleScrollDirection()
//     }

//     // Initially hide navbar if page is scrolled (but don't animate on load)
//     const currentScrollY = window.scrollY || document.documentElement.scrollTop
//     if (currentScrollY > 20) {
//       gsap.set(wrapperRef.current, { y: '-100%' })
//       isNavbarVisible.current = false
//       lastScrollY.current = currentScrollY
//     }

//     window.addEventListener('scroll', onScroll, { passive: true })
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   // ── Mobile menu init ─────────────────────────────
//   useEffect(() => {
//     if (mobileMenuRef.current) {
//       gsap.set(mobileMenuRef.current, { x: '100%' })
//     }
//   }, [])

//   // ── Mobile menu toggle ───────────────────────────
//   useEffect(() => {
//     if (!mobileMenuRef.current) return

//     if (menuOpen) {
//       gsap.to(mobileMenuRef.current, {
//         x: '0%',
//         duration: 0.52,
//         ease: 'power3.out',
//       })
//       // Prevent body scroll when menu is open
//       document.body.style.position = 'fixed'
//       document.body.style.top = `-${window.scrollY}px`
//       document.body.style.width = '100%'
//       document.body.style.overflow = 'hidden'
      
//       // When mobile menu opens, ensure navbar is visible
//       if (!isNavbarVisible.current) {
//         gsap.to(wrapperRef.current, {
//           y: '0%',
//           duration: 0.3,
//           ease: 'power2.inOut'
//         })
//         isNavbarVisible.current = true
//       }
//     } else {
//       // Restore scroll position when menu closes
//       const scrollY = document.body.style.top
//       document.body.style.position = ''
//       document.body.style.top = ''
//       document.body.style.width = ''
//       document.body.style.overflow = ''
//       if (scrollY) {
//         window.scrollTo(0, parseInt(scrollY || '0', 10) * -1)
//       }
      
//       gsap.to(mobileMenuRef.current, {
//         x: '100%',
//         duration: 0.38,
//         ease: 'power3.in',
//       })
      
//       // When mobile menu closes, hide navbar again if scrolled
//       const currentScrollY = window.scrollY || document.documentElement.scrollTop
//       if (currentScrollY > 20 && isNavbarVisible.current) {
//         gsap.to(wrapperRef.current, {
//           y: '-100%',
//           duration: 0.3,
//           ease: 'power2.inOut'
//         })
//         isNavbarVisible.current = false
//       }
//     }
//   }, [menuOpen])

//   // Handle Contact button click
//   const handleContactClick = () => {
//     setMenuOpen(false)
//     navigate('/contact')
//   }

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50">

//       {/* Wrapper (default spacing before scroll) - Reduced padding on mobile */}
//       <div
//         ref={wrapperRef}
//         className="w-full pt-4 sm:pt-6 md:pt-12 px-1 sm:px-6 md:px-24"
//       >

//         {/* Navbar - Reduced padding on mobile */}
//         <div
//           ref={navBarRef}
//           className="flex items-center justify-between py-1 px-1 sm:px-4 md:px-8 bg-transparent"
//         >
//           {/* Logo - Slightly smaller on mobile */}
//          <Link to="/" ref={logoRef} className={`${isLightPage ? 'bg-[#0e2555] rounded-full pX-4 py-[-2]' : ''}`}>
//   <img
//     src="/images/logo.png"
//     alt="Star Alliance"
//     className="h-10 sm:h-12 md:h-16 object-contain"
//   />
// </Link>

//           {/* Desktop */}
//   <div className="hidden md:flex items-center gap-5 bg-[#f5f7f9] pl-6 pr-2 py-1 sm:py-2 rounded-full">
//             <div className="flex items-center gap-5 text-[#0e2555] font-semibold text-base lg:text-lg">
//                 {navLinks.map((link, i) => (
//                 <Link
//                   key={link.name}
//                   to={link.path}
//                   ref={el => (linksRef.current[i] = el)}
//                   className="relative group hover:text-[#0e2555] transition-colors duration-200"
//                 >
//                   {link.name}
//                   <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-[#0e2555] rounded-full group-hover:w-full transition-all duration-300" />
//                 </Link>
//               ))}
//             </div>

//             <button
//               ref={el => (linksRef.current[navLinks.length] = el)}
//               onClick={handleContactClick}
//               className="bg-[#0e2555] text-white font-semibold text-base lg:text-lg px-5 py-1.5 rounded-full hover:bg-[#8a6d3e] transition-colors duration-300"
//             >
//               Contact
//             </button>
//           </div>

//           {/* Mobile Hamburger Button */}
//           <button
//             ref={el => (linksRef.current[navLinks.length + 1] = el)}
//             className="md:hidden text-white text-2xl sm:text-3xl w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition"
//             onClick={() => setMenuOpen(true)}
//           >
//             ☰
//           </button>
//         </div>
//       </div>

//       {/* Mobile Drawer - Fixed and prevents scroll */}
//       <div
//         ref={mobileMenuRef}
//         className="fixed top-0 right-0 w-full h-full bg-[#0e2e79] z-[60] md:hidden flex flex-col"
//         style={{
//           position: 'fixed',
//           top: 0,
//           right: 0,
//           bottom: 0,
//           left: 0,
//           height: '100vh',
//           overflowY: 'auto'
//         }}
//       >
//         <div className="flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 border-b border-white/10">
//           <Link to="/" onClick={() => setMenuOpen(false)}>
//             <img src="/images/logo.png" alt="logo" className="h-9 sm:h-11" />
//           </Link>
//           <button
//             onClick={() => setMenuOpen(false)}
//             className="text-white text-xl sm:text-2xl w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:bg-white/10"
//           >
//             ✕
//           </button>
//         </div>

//         <nav className="flex flex-col px-6 sm:px-8 py-6 sm:py-10 flex-1">
//           {navLinks.map(link => (
//             <Link
//               key={link.name}
//               to={link.path}
//               onClick={() => setMenuOpen(false)}
//               className="text-white text-xl sm:text-2xl font-semibold py-4 sm:py-5 border-b border-white/10 last:border-0 hover:text-[#b08d57] transition-colors"
//             >
//               {link.name}
//             </Link>
//           ))}

//           <button
//             onClick={handleContactClick}
//             className="mt-8 sm:mt-10 bg-white text-[#060d1f] font-semibold text-base sm:text-lg py-3 sm:py-3.5 rounded-full hover:bg-[#8a6d3e] hover:text-white transition-all duration-300"
//           >
//             Contact
//           </button>
//         </nav>
//       </div>
//     </header>
//   )
// }

// export default Navbar


import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

const Navbar = () => {
  const navBarRef = useRef(null);
  const wrapperRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const mobileMenuRef = useRef(null);
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const scrolledRef = useRef(false);
  const lastScrollY = useRef(0);
  const isNavbarVisible = useRef(true);

  const location = useLocation();
  const lightBgPages = ['/about', '/services', '/industries', '/contact'];
  const isLightPage = lightBgPages.includes(location.pathname);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
  ];

  // ── Entry animation ─────────────────────────────
  useEffect(() => {
    const items = [logoRef.current, ...linksRef.current.filter(Boolean)];

    gsap.set(items, { opacity: 0, y: -16 });
    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.55,
      ease: 'power3.out',
      stagger: 0.07,
      delay: 0.15,
    });
  }, []);

  // ── Scroll behavior (hide navbar by default, show only when scrolling up) ─────────────────────────────
  useEffect(() => {
    const applyScrolled = () => {
      gsap.to(wrapperRef.current, {
        paddingTop: 0,
        paddingLeft: 0,
        paddingRight: 0,
        duration: 0.42,
        ease: 'power2.inOut',
      });

      gsap.to(navBarRef.current, {
        borderRadius: 0,
        backgroundColor: '#0e2e79',
        backdropFilter: 'blur(12px)',
        paddingLeft: window.innerWidth >= 768 ? 48 : 16,
        paddingRight: window.innerWidth >= 768 ? 48 : 16,
        duration: 0.42,
        ease: 'power2.inOut',
      });
    };

    const removeScrolled = () => {
      // Restore original spacing
      gsap.to(wrapperRef.current, {
        paddingTop: window.innerWidth >= 640 ? 48 : 28,
        paddingLeft: window.innerWidth >= 640 ? 24 : 16,
        paddingRight: window.innerWidth >= 640 ? 24 : 16,
        duration: 0.42,
        ease: 'power2.inOut',
      });

      gsap.to(navBarRef.current, {
        borderRadius: 9999,
        backgroundColor: 'transparent',
        backdropFilter: 'blur(0px)',
        paddingLeft: window.innerWidth >= 768 ? 32 : 20,
        paddingRight: window.innerWidth >= 768 ? 32 : 20,
        duration: 0.42,
        ease: 'power2.inOut',
      });
    };

    // Hide navbar on scroll down, show on scroll up
    const handleScrollDirection = () => {
      const currentScrollY = window.scrollY || document.documentElement.scrollTop;

      // Always hide navbar when scrolling down (if not at the very top)
      if (currentScrollY > lastScrollY.current && currentScrollY > 20) {
        if (isNavbarVisible.current) {
          gsap.to(wrapperRef.current, {
            y: '-100%',
            duration: 0.3,
            ease: 'power2.inOut',
          });
          isNavbarVisible.current = false;
        }
      }
      // Show navbar when scrolling up
      else if (currentScrollY < lastScrollY.current) {
        if (!isNavbarVisible.current) {
          gsap.to(wrapperRef.current, {
            y: '0%',
            duration: 0.3,
            ease: 'power2.inOut',
          });
          isNavbarVisible.current = true;
        }
      }

      lastScrollY.current = currentScrollY;
    };

    const onScroll = () => {
      const currentScrollY = window.scrollY || document.documentElement.scrollTop;
      const isScrolled = currentScrollY > 60;

      // Update navbar styling based on scroll position
      if (isScrolled && !scrolledRef.current) {
        scrolledRef.current = true;
        applyScrolled();
      }

      if (!isScrolled && scrolledRef.current) {
        scrolledRef.current = false;
        removeScrolled();
      }

      // Handle hide/show based on scroll direction
      handleScrollDirection();
    };

    // Initially hide navbar if page is scrolled (but don't animate on load)
    const currentScrollY = window.scrollY || document.documentElement.scrollTop;
    if (currentScrollY > 20) {
      gsap.set(wrapperRef.current, { y: '-100%' });
      isNavbarVisible.current = false;
      lastScrollY.current = currentScrollY;
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ── Mobile menu init ─────────────────────────────
  useEffect(() => {
    if (mobileMenuRef.current) {
      gsap.set(mobileMenuRef.current, { x: '100%' });
    }
  }, []);

  // ── Mobile menu toggle with smooth right-to-left animation ───────────────────────────
  useEffect(() => {
    if (!mobileMenuRef.current) return;

    if (menuOpen) {
      // Smooth slide-in from right
      gsap.to(mobileMenuRef.current, {
        x: '0%',
        duration: 0.5,
        ease: 'power3.out',
      });
      // Prevent body scroll when menu is open
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';

      // When mobile menu opens, ensure navbar is visible
      if (!isNavbarVisible.current) {
        gsap.to(wrapperRef.current, {
          y: '0%',
          duration: 0.3,
          ease: 'power2.inOut',
        });
        isNavbarVisible.current = true;
      }
    } else {
      // Restore scroll position when menu closes
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      }

      // Smooth slide-out to right
      gsap.to(mobileMenuRef.current, {
        x: '100%',
        duration: 0.4,
        ease: 'power3.in',
      });

      // When mobile menu closes, hide navbar again if scrolled
      const currentScrollY = window.scrollY || document.documentElement.scrollTop;
      if (currentScrollY > 20 && isNavbarVisible.current) {
        gsap.to(wrapperRef.current, {
          y: '-100%',
          duration: 0.3,
          ease: 'power2.inOut',
        });
        isNavbarVisible.current = false;
      }
    }
  }, [menuOpen]);

  // Handle Contact button click
  const handleContactClick = () => {
    setMenuOpen(false);
    navigate('/contact');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Wrapper (default spacing before scroll) - Responsive padding */}
      <div
        ref={wrapperRef}
        className="w-full pt-7 sm:pt-6 md:pt-12 px-4 sm:px-6 md:px-24"
      >
        {/* Navbar - Responsive padding and sizing */}
        <div
          ref={navBarRef}
          className="flex items-center justify-between py-2 px-4 sm:px-5 md:px-8 bg-transparent"
        >
          {/* Logo - Responsive sizing */}
          <Link
            to="/"
            ref={logoRef}
            className={`${isLightPage ? 'bg-[#0e2e79] rounded-full px-3 py-1' : ''}`}
          >
            <img
              src="/images/logo.png"
              alt="Star Alliance"
              className="h-8 sm:h-10 md:h-16 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-5 bg-[#f5f7f9] pl-6 pr-2 py-1 sm:py-2 rounded-full">
            <div className="flex items-center gap-5 text-[#0e2555] font-semibold text-base lg:text-lg">
              {navLinks.map((link, i) => (
                <Link
                  key={link.name}
                  to={link.path}
                  ref={(el) => (linksRef.current[i] = el)}
                  className="relative group hover:text-[#0e2555] transition-colors duration-200"
                >
                  {link.name}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-[#0e2555] rounded-full group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            <button
              ref={(el) => (linksRef.current[navLinks.length] = el)}
              onClick={handleContactClick}
              className="bg-[#0e2555] text-white font-semibold text-base lg:text-lg px-5 py-1.5 rounded-full  transition-colors duration-300"
            >
              Contact
            </button>
          </div>

        <button
  ref={(el) => (linksRef.current[navLinks.length + 1] = el)}
  className={`md:hidden text-2xl sm:text-3xl w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 ${
    isLightPage 
      ? 'text-[#0e2555] hover:bg-[#0e2555]/10 active:bg-[#0e2555]/20' 
      : 'text-white hover:bg-white/10 active:bg-white/20'
  }`}
  onClick={() => setMenuOpen(true)}
  aria-label="Open menu"
>
  ☰
</button>
        </div>
      </div>

      {/* Mobile Drawer - Smooth right-to-left slide animation */}
      <div
        ref={mobileMenuRef}
        className="fixed top-0 right-0 w-full h-full bg-[#0e2e79] z-[60] md:hidden flex flex-col shadow-2xl"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          left: 'auto',
          width: '100%',
          maxWidth: '100%',
          height: '100vh',
          overflowY: 'auto',
          transform: 'translateX(100%)',
        }}
      >
        <div className="flex items-center justify-between px-5 sm:px-6 py-5 border-b border-white/10">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img src="/images/logo.png" alt="logo" className="h-9 sm:h-11" />
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white text-xl sm:text-2xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 active:bg-white/20 transition-all duration-200"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col px-6 sm:px-8 py-8 flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="text-white text-xl sm:text-2xl font-semibold py-4 border-b border-white/10 last:border-0  transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}

          <button
            onClick={handleContactClick}
            className="mt-8 bg-white text-[#060d1f] font-semibold text-base sm:text-lg py-3.5 rounded-full  hover:text-white transition-all duration-300 active:scale-95"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;