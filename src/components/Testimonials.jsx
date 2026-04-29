import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Avatar using inline style for hex color support
const Avatar = ({ initials, bgColor = "#0e2555", size = "w-11 h-11" }) => (
  <div
    className={`${size} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
    style={{ backgroundColor: bgColor }}
  >
    {initials}
  </div>
);

// Fixed quote icon with controlled responsive size
const QuoteIcon = () => (
  <img
    src="/images/quotation.png"
    alt="quote"
    className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 mb-3 object-contain"
  />
);

const testimonials = {
  featured: {
    stat: "$10M",
    statLabel: "Deposits secured",
    quote:
      "From everyday banking to advanced tools, this bank has simplified how we manage our money. It truly feels like they're investing in our financial future every single day",
    name: "John Carter",
    location: "New York, NY",
    initials: "JC",
    bgColor: "#0e2555",
  },
  topRight: {
    stat: "$10M",
    statLabel: "Funding received",
    quote:
      "We didn't just get a loan—we gained peace of mind. Since moving our business banking here, we've seen faster transactions, transparent fees, and support we can rely on",
    name: "Sophie Moore",
    location: "San Francisco, CA",
    initials: "SM",
    bgColor: "#0e2555",
  },
  small: [
    {
      quote:
        "They've given us clarity and control. This isn't just banking—it's a commitment to growth",
      name: "Matt Cannon",
      location: "Los Angeles, CA",
      initials: "MC",
      bgColor: "#0e2555",
    },
    {
      quote:
        "Their services reshaped how we bank. The app and digital tools make banking effortless",
      name: "Lilly Woods",
      location: "New York, NY",
      initials: "LW",
      bgColor: "#0e2555",
    },
  ],
};

const Testimonials = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardRefs = useRef([]);

  cardRefs.current = [];
  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) cardRefs.current.push(el);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header fade-in
      gsap.from(headerRef.current.children, {
        y: 28,
        opacity: 0,
        duration: 0.85,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
        },
      });

      // Cards stagger in
      gsap.fromTo(
        cardRefs.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRefs.current[0],
            start: "top 85%",
          },
        }
      );

      // Hover lift on cards
      cardRefs.current.forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -5,
            boxShadow: "0 16px 40px rgba(15,23,42,0.12)",
            duration: 0.3,
            ease: "power2.out",
          });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            boxShadow: "0 1px 4px rgba(15,23,42,0.06)",
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const { featured, topRight, small } = testimonials;

  return (
    <section
      ref={sectionRef}
      className=" w-full py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-10"
    >
      <div className="">

        {/* ── Header ── */}
        <div ref={headerRef} className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            What our customers think
          </h2>
          <p className="mt-3 text-slate-500 text-xs sm:text-sm lg:text-base max-w-md mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet consectetur viverra velit faucibus pharetra lorem sed
            scelerisque sit in nec arcu malesuada.
          </p>
        </div>

        {/* ── Main Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">

          {/* ── Featured Large Card ── */}
          <div
            ref={addToRefs}
            className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm"
          >
            <div>
              <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tighter leading-none">
                {featured.stat}
              </p>
              <p className="text-slate-400 text-xs mt-1 mb-6">{featured.statLabel}</p>
              <QuoteIcon />
              <p className="text-slate-900 font-bold text-base sm:text-lg lg:text-xl leading-snug">
                {featured.quote}
              </p>
            </div>
            <div className="flex items-center gap-3 mt-8 pt-6 border-t border-slate-100">
              <Avatar
                initials={featured.initials}
                bgColor={featured.bgColor}
                size="w-10 h-10 sm:w-11 sm:h-11"
              />
              <div>
                <p className="font-semibold text-sm text-slate-900">{featured.name}</p>
                <p className="text-xs text-slate-400">{featured.location}</p>
              </div>
            </div>
          </div>

          {/* ── Right Column ── */}
          <div className="flex flex-col gap-4 sm:gap-5">

            {/* Top Right Card */}
            <div
              ref={addToRefs}
              className="bg-white rounded-2xl p-5 sm:p-6 lg:p-7 flex flex-col gap-3 shadow-sm"
            >
              {/* User + Stat row */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <Avatar
                    initials={topRight.initials}
                    bgColor={topRight.bgColor}
                    size="w-10 h-10 sm:w-11 sm:h-11"
                  />
                  <div>
                    <p className="font-semibold text-sm text-slate-900">{topRight.name}</p>
                    <p className="text-xs text-slate-400">{topRight.location}</p>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tighter">
                    {topRight.stat}
                  </p>
                  <p className="text-xs text-slate-400">{topRight.statLabel}</p>
                </div>
              </div>

              <QuoteIcon />
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                {topRight.quote}
              </p>
            </div>

            {/* Bottom Two Small Cards */}
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {small.map((t, i) => (
                <div
                  key={i}
                  ref={addToRefs}
                  className="bg-white rounded-2xl p-4 sm:p-5 lg:p-6 flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <QuoteIcon />
                    <p className="text-slate-500 text-[11px] sm:text-xs lg:text-sm leading-relaxed">
                      {t.quote}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-5 pt-4 border-t border-slate-100">
                    <Avatar
                      initials={t.initials}
                      bgColor={t.bgColor}
                      size="w-8 h-8 sm:w-9 sm:h-9"
                    />
                    <div className="min-w-0">
                      <p className="font-semibold text-[11px] sm:text-xs text-slate-900 truncate">
                        {t.name}
                      </p>
                      <p className="text-[10px] sm:text-[11px] text-slate-400 truncate">
                        {t.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;