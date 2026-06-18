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
  // Existing state from your code
  const [scrollDir, setScrollDir] = useState("up");

  // Ref for the text we want to animate
  const textContainerRef = useRef(null);

  useEffect(() => {
    // Original scroll direction logic
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

    // --- GSAP Text Reveal Animation ---
    let ctx = gsap.context(() => {
      // Grab all the individual word spans
      const words = textContainerRef.current.querySelectorAll('.reveal-word');
      
      gsap.fromTo(
        words,
        { 
          color: "#9ca3af", // Starts as a light/medium gray (Tailwind gray-400) so it's dimmed on white
        }, 
        {
          color: "#000000", // Animates to pure black for maximum contrast
          stagger: 0.1,     // One-by-one staggered effect
          scrollTrigger: {
            trigger: textContainerRef.current,
            start: "top 85%",  // Starts when the top of the text hits 85% of viewport
            end: "bottom 60%", // Ends when the bottom of the text hits 60% of viewport
            scrub: 1,          // Smoothly ties it to the scrollbar (scrubs back to light gray on scroll up)
          }
        }
      );
    }, textContainerRef);

    return () => {
      window.removeEventListener("scroll", onScroll);
      ctx.revert(); // Cleanup GSAP on unmount
    };
  }, []);

  // Text to be split and animated
  const highlightText = "We know what's going on. You need top-notch design to stand out in the tech world, but hiring in-house designers can be costly and time-consuming. That's where Atmos comes in.";
  const words = highlightText.split(" ");

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
             <p className="text-xs font-bold text-[#f0730d] tracking-widest uppercase mb-3">★ How it works</p>
             <h2 className="cinzel-decorative-regular text-3xl md:text-4xl xl:text-4xl font-extrabold text-gray-900 text-center tracking-tight leading-[1.1] ">We mind your business <br/> so you can focus on running it.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

        {/* --- Highlight Card (Section 2 - Animated) --- */}
        <div className="mt-32 w-full text-gray-800/60 text-center relative overflow-hidden">
<h2 
            ref={textContainerRef}
            className="cinzel-decorative-regular max-w-5xl text-2xl md:text-5xl font-medium leading-relaxed  mx-auto flex flex-wrap justify-center gap-x-[0.35rem]"
          >
            {/* Map through the words array to render them individually */}
            {words.map((word, index) => (
              <span key={index} className="reveal-word">
                {word}
              </span>
            ))}
          </h2>
        </div>

      </div>
    </div>
  );
};

export default AtmosLandingPage;