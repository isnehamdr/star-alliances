import React from "react";

const logos = [
  "/images/logo1.png",
  "/images/logo2.webp",
  "/images/logo3.png",
  "/images/logo4.png",
  "/images/logo5.jpg",
  "/images/logo6.png",
];

const AssociatedProjects = () => {
  return (
    <div className="pt-16 lg:pt-24 pb-16 lg:pb-24  mx-2 sm:px-6 lg:px-16 overflow-hidden">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center mb-6 fade-in-up delay-1">
        Associated Hotel Projects
      </h2>

      {/* Marquee Wrapper */}
      <div className="relative w-full overflow-hidden sm:pt-12 pt-4 cursor-pointer">
        <div className="flex w-max marquee gap-12 items-center">
          {/* Duplicate for seamless loop */}
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[100px] sm:min-w-[140px] lg:min-w-[180px]"
            >
              <img
                src={logo}
                alt={`logo-${index}`}
                className="h-18 sm:h-14 lg:h-16 object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssociatedProjects;