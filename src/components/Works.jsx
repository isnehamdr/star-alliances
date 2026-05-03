import { useState, useEffect, useRef } from "react";

/* ─── Data ─── */
const services = [
  {
    id: 1,
    img: '/images/logo1.png',
    title: "Hotel Shambala",
    desc: "Concept Development & Pre - Opening Management",
  },
  {
    id: 2,
    img: '/images/logo2.webp',
    title: "Mountain Glory Forest Restort & Spa ",
    desc: "Concept Development & Pre - Opening Management",
  },
  {
    id: 3,
    img: '/images/logo3.png',
    title: "Hotel Nirvana",
    desc: "Management & 4 Star Standardization",
  },
  {
    id: 4,
    img: '/images/logo4.png',
    title: "Hotel Lo Mustang",
    desc: "Concept Development & Pre - Opening Management",
  },
  {
    id: 5,
    img: '/images/logo5.jpg',
    title: "Hotel Central Plaza",
    desc: "Lead Consultation",
  },
];

/* ─── IntersectionObserver hook ─── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { 
        if (entry.isIntersecting) setInView(true); 
      },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  
  return [ref, inView];
}

/* ─── Card Component ─── */
function Card({ service, delay }) {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        bg-white rounded-2xl sm:p-8 p-4 flex flex-col gap-3.5 cursor-pointer
        transition-all duration-300
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'}
        ${hovered ? 'shadow-2xl' : 'shadow-sm'}
      `}
      style={{
        transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms, box-shadow 0.3s ease`
      }}
    >
      {/* Image Container */}
      <div className="w-[80px] h-[80px] flex items-center justify-center mb-2">
        {!imgError ? (
          <img 
            src={service.img} 
            alt={service.title}
            className="w-full h-full object-contain"
            onError={() => setImgError(true)}
          />
        ) : (
          // Fallback placeholder if image fails to load
          <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
            <span className="text-2xl font-bold text-blue-600">
              {service.title.charAt(0)}
            </span>
          </div>
        )}
      </div>

      <div className="text-2xl font-semibold text-gray-900">
        {service.title}
      </div>

      <p className="text-md text-gray-500 leading-relaxed ">
        {service.desc}
      </p>
    </div>
  );
}

/* ─── Main Component ─── */
export default function Works() {
  const [heroRef, heroInView] = useInView(0.1);
  const [btnHovered, setBtnHovered] = useState(false);

  return (
    <div className="py-0 md:py-0 sm:mx-6 mx-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
        {/* ── Hero Cell ── */}
        <div
          ref={heroRef}
          className="sm:col-span-2 lg:col-span-1 p-2 md:p-8 flex flex-col gap-5 justify-center"
          style={{
            opacity: heroInView ? 1 : 0,
            transform: heroInView ? "translateX(0)" : "translateX(-28px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-[46px] font-bold leading-tight text-gray-900">
            Explore Associated
            <br />
            Projects
          </h2>

          <button
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
            onClick={() => window.location.href = '/contact'}
            className={`
              bg-[#0e2555] text-white border-none rounded-full px-5 py-2.5
              text-sm font-medium cursor-pointer self-start transition-all duration-200
              ${btnHovered ? 'bg-[#1a3a7a] scale-105' : 'bg-[#0e2555] scale-100'}
            `}
          >
            Build With Us
          </button>
        </div>

        {/* ── Service Cards ── */}
        {services.map((service, i) => (
          <Card key={service.id} service={service} delay={100 + i * 100} />
        ))}
      </div>
    </div>
  );
}