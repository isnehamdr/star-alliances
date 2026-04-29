import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    number: "01.",
    question: "What services do you provide?",
    answer: "We provide a wide range of hospitality consultancy services tailored to enhance operations and profitability."
  },
  {
    number: "02.",
    question: "How can I contact your team?",
    answer: "You can reach us via the contact form on our website or email us directly at info@staralliance.com."
  },
  {
    number: "03.",
    question: "Do you operate internationally?",
    answer: "Yes, our team provides consultancy services worldwide with a focus on delivering local insights."
  },
  {
    number: "04.",
    question: "What types of properties do you specialize in?",
    answer: "We specialize in a range of properties including hotels, resorts, restaurants, and mixed-use developments."
  },
  {
    number: "05.",
    question: "How do you ensure profitability for clients?",
    answer: "Our approach involves thorough market research, operational assessments, and tailored strategies to maximize revenue and control costs."
  },
  {
    number: "06.",
    question: "Do you provide ongoing support after consultation?",
    answer: "Yes, we offer ongoing support and guidance to ensure our strategies are implemented effectively and deliver long-term results."
  }
];

const FaqItem = ({ faq, index, isOpen, onToggle }) => {
  const answerRef = useRef(null);
  const arrowRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const el = answerRef.current;
    const arrow = arrowRef.current;

    if (isOpen) {
      gsap.set(el, { display: "block" });
      gsap.fromTo(
        el,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.45, ease: "power3.out" }
      );
      gsap.to(arrow, { rotation: 90, duration: 0.35, ease: "power2.out" });
    } else {
      gsap.to(el, {
        height: 0,
        opacity: 0,
        duration: 0.35,
        ease: "power3.in",
        onComplete: () => gsap.set(el, { display: "none" }),
      });
      gsap.to(arrow, { rotation: 0, duration: 0.35, ease: "power2.out" });
    }
  }, [isOpen]);

  return (
    <div
      ref={contentRef}
      className="border-b border-slate-200 cursor-pointer group px-2 sm:mx-6 "
      onClick={() => onToggle(index)}
    >
      <div className="flex items-center justify-between py-5 sm:py-6 gap-4">
        {/* Number + Question */}
        <div className="flex items-center gap-5 sm:gap-8 min-w-0">
          <span className="text-slate-400 text-xs sm:text-sm font-medium flex-shrink-0 w-6 sm:w-8">
            {faq.number}
          </span>
          <span className="text-slate-900 font-bold text-lg lg:text-2xl leading-snug">
            {faq.question}
          </span>
        </div>

        {/* Arrow Button */}
        <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-slate-300 flex items-center justify-center group-hover:border-slate-500 transition-colors duration-200">
          <svg
            ref={arrowRef}
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-slate-600"
          >
            <path
              d="M5 2L10 7L5 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Answer */}
      <div
        ref={answerRef}
        style={{ display: "none", overflow: "hidden", height: 0 }}
      >
        <p className="text-slate-500 text-md sm:text-xl leading-relaxed pb-5 sm:pb-6 pl-11 sm:pl-16 pr-12 sm:pr-14 max-w-2xl">
          {faq.answer}
        </p>
      </div>
    </div>
  );
};

const Faq = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const listRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current.children, {
        y: 30,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
        },
      });

      // FAQ rows stagger in
      const items = listRef.current.querySelectorAll(".faq-item");
      gsap.fromTo(
        items,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className=" pb-20"
    >
      <div className="w-full  px-2 sm:mx-6 sm:px-14">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-10 sm:mb-14">
          <p className="text-slate-400 text-xs sm:text-sm tracking-widest uppercase mb-3 font-medium">
            / FAQs /
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Frequently asked questions.
          </h2>
        </div>

        {/* FAQ List */}
        <div ref={listRef}>
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <FaqItem
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                onToggle={handleToggle}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Faq;