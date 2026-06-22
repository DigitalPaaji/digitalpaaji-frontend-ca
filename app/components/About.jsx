"use client";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  FiArrowRight, 
  FiPlay, 
  FiCheckCircle, 
  FiStar,
  FiLayout,
  FiTrendingUp,
  FiUsers,
  FiLayers,
  FiCpu,
  FiChevronDown,
  FiHexagon,
  FiGlobe
} from "react-icons/fi";

// Register ScrollTrigger safely for Next.js
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AtmosLandingPage = () => {
  const [scrollDir, setScrollDir] = useState("up");

  // Refs for the new scroll animation
  const gridRef = useRef(null);
  const boxesRef = useRef([]);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.scrollY;
      if (Math.abs(scrollY - lastScrollY) < 5) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? "down" : "up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    // --- GSAP Box Slide Animation ---
    let ctx = gsap.context(() => {
      // Ensure we only animate elements that actually exist
      const targets = boxesRef.current.filter(Boolean);

      gsap.from(targets, {
        // If index is even (0, 2), start 150px to the left (-150).
        // If index is odd (1), start 150px to the right (150).
        x: (i) => (i % 2 === 0 ? -150 : 150),
        opacity: 0,
        duration: 1.2,
        stagger: 0.15, // Slight delay between each box starting
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%", // Triggers when top of grid hits 85% of viewport
          end: "bottom 15%", // Triggers leave action when bottom of grid hits 15% of viewport
          // Play on enter, reverse on leave, play on enter back, reverse on leave back
          toggleActions: "play reverse play reverse", 
        },
      });
    }, gridRef);

    return () => {
      window.removeEventListener("scroll", onScroll);
      ctx.revert(); // Cleanup GSAP on unmount
    };
  }, []);

  return (
    <div className="relative overflow-hidden selection:bg-[#e4ded986] selection:text-black mx-4 md:mx-12 lg:mx-24 xl:mx-40 py-24">
      
      {/* --- Global Ambient Gradients --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex justify-center">
        {/* Top Arch Gradient */}
        <div className="absolute top-[-10%] w-[800px] h-[500px] bg-gradient-to-b from-[#dcfce7]/10 to-transparent rounded-full blur-[100px]"></div>
        {/* Middle Soft Glow */}
        <div className="absolute top-[40%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#f0730d]/5 blur-[150px]"></div>
        <div className="absolute top-[60%] right-[-10%] w-[30%] h-[50%] rounded-full bg-[#f0730d]/5 blur-[150px]"></div>
      </div>

      {/* --- Main Content --- */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Section 1: Kept Exactly As Is */}
        <div className="w-full">
          <div className="text-center mb-16">
             <p className="font-bold text-[#f0730d] tracking-widest uppercase mb-3">★ How it works</p>
             <h2 className=" text-3xl md:text-4xl xl:text-5xl font-semibold text-gray-900 text-center tracking-tight leading-[1.1] ">We mind your <span className="cinzel-decorative-regular">
           business   </span>  <br/> so you can focus on running it.</h2>
          </div>
          
          {/* Attach gridRef here to act as the scroll trigger parent */}
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 overflow-hidden py-4">
            {[
              {
                image: "/1.webp",
                title: "Discover Your Requirements",
                desc: "Share your business objectives, target audience, and project requirements through our streamlined onboarding process.",
              },
              {
                image: "/2.webp",
                title: "Strategic Planning & Execution",
                desc: "Our team develops tailored solutions across website development, branding, digital marketing, and business growth initiatives.",
              },
              {
                image: "/3.webp",
                title: "Continuous Support & Optimization",
                desc: "Benefit from ongoing support, performance improvements, and data-driven strategies to ensure sustainable long-term growth.",
              },
            ].map((step, i) => (
              <div
                key={i}
                // Push each box element into the boxesRef array
                ref={(el) => {
                  boxesRef.current[i] = el;
                }}
                className="bg-[#2a2a2a] border border-gray-800/60 rounded-3xl overflow-hidden"
              >
                {/* Full Width Image */}
                <div className="w-full overflow-hidden ">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover p-6"
                  />
                </div>

                {/* Content */}
                <div className="p-8 border-t border-gray-300/20 rounded-2xl ">
                  <h3 className="text-gray-100 text-xl font-semibold mb-3">
                    {step.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AtmosLandingPage;