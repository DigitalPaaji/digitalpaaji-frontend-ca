"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef, useState } from "react";
import {
  FiTrendingUp,
  FiShare2,
  FiPenTool,
  FiSearch,
  FiSmartphone,
  FiCode,
  FiArrowRight,
} from "react-icons/fi";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const servicesData = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Modern, fast, secure, and responsive websites built with clean design, smooth animations, and powerful technology.",
    icon: <FiCode className="text-3xl" />,
  },
  {
    id: 2,
    title: "App Development",
    description:
      "High-performance mobile applications with clean UI, smooth user experience, and scalable backend integration.",
    icon: <FiSmartphone className="text-3xl" />,
  },
  {
    id: 3,
    title: "SEO",
    description:
      "Smart search engine optimization strategies to improve visibility, rank higher on Google, and increase organic traffic.",
    icon: <FiSearch className="text-3xl" />,
  },
  {
    id: 4,
    title: "Digital Marketing",
    description:
      "Result-focused digital campaigns designed to grow your brand, generate leads, and maximize business ROI.",
    icon: <FiTrendingUp className="text-3xl" />,
  },
  {
    id: 5,
    title: "Graphic Designing",
    description:
      "Creative branding, social media designs, posters, and visual content that make your business stand out.",
    icon: <FiPenTool className="text-3xl" />,
  },
  {
    id: 6,
    title: "Social Media Marketing",
    description:
      "Engaging content, platform strategy, and audience management to grow your presence across social media.",
    icon: <FiShare2 className="text-3xl" />,
  },
];

const ServiceSection = () => {
  const sectionRef = useRef(null);

  const [hoverBox, setHoverBox] = useState({
    opacity: 0,
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });

  const cardsRef = useRef([]);

  const handleMouseEnter = (index) => {
    const el = cardsRef.current[index];
    if (el) {
      setHoverBox({
        opacity: 1,
        left: el.offsetLeft,
        top: el.offsetTop,
        width: el.offsetWidth,
        height: el.offsetHeight,
      });
    }
  };

  const handleMouseLeave = () => {
    setHoverBox((prev) => ({ ...prev, opacity: 0 }));
  };

  useGSAP(
    () => {
      const cards = cardsRef.current.filter(Boolean);

      const startPositions = [
        { x: "-70vw", y: "-12vh", rotate: -8 },
        { x: "70vw", y: "-12vh", rotate: 8 },
        { x: "-70vw", y: "0vh", rotate: -6 },
        { x: "70vw", y: "0vh", rotate: 6 },
        { x: "-70vw", y: "12vh", rotate: -8 },
        { x: "70vw", y: "12vh", rotate: 8 },
      ];

      gsap.set(cards, {
        opacity: 0,
        scale: 0.9,
        willChange: "transform, opacity",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          end: "top 10%",
          scrub: 1.2,
          invalidateOnRefresh: true,
          // markers: true,
        },
      });

      tl.fromTo(
        cards,
        {
          x: (index) => startPositions[index].x,
          y: (index) => startPositions[index].y,
          rotate: (index) => startPositions[index].rotate,
          opacity: 0,
          scale: 0.9,
        },
        {
          x: 0,
          y: 0,
          rotate: 0,
          opacity: 1,
          scale: 1,
          ease: "none",
          stagger: {
            each: 0.01,
            from: "start",
          },
        }
      );

      return () => {
        tl.kill();
      };
    },
    { scope: sectionRef }
  );

  return (
    <section className="relative overflow-hidden bg-[#050505] py-28 z-0">
      {/* Background Pattern & Gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Subtle top white glow */}
        <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-white/5 blur-[120px]" />
        
        {/* Massive Orange/Red Glow (Bottom Left sweeping across) */}
        <div className="absolute -bottom-[20%] -left-[10%] h-[800px] w-[900px] rounded-full bg-[#f0730d] opacity-35 blur-[280px]" />
        <div className="absolute bottom-[10%] left-[20%] h-[400px] w-[600px] rounded-full bg-[#ff2a00] opacity-25 blur-[260px]" />
        
        {/* Massive Blue Glow (Middle Right) */}
        <div className="absolute top-[20%] -right-[10%] h-[700px] w-[700px] rounded-full bg-[#0066ff] opacity-25 blur-[180px]" />

        {/* Existing Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.5em] text-white/50">
            Our Expertise
          </p>

          <h2 className=" mt-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
            Services
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
            Premium digital solutions crafted to grow your brand with clean
            design, smart strategy, and modern technology.
          </p>
        </div>
        
        <div className="min-h-[70vh]" ref={sectionRef}>
          {/* Unified Outer Container */}
          <div className="overflow-hidden rounded-3xl backdrop-blur-3xl bg-black/10 border border-white/10 ">
            {/* Grid Container */}
            <div
              className="relative -mb-px -mr-px grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              onMouseLeave={handleMouseLeave}
            >
              {servicesData.map((service, index) => (
                <div
                  key={service.id}
                  ref={(el) => {
                    cardsRef.current[index] = el;
                  }}
                  onMouseEnter={() => handleMouseEnter(index)}
                  className="group relative min-h-[300px] cursor-pointer overflow-hidden border-b border-r border-white/10 bg-transparent p-6 transition-colors duration-500 lg:p-8"
                >
                  {/* Hover Light */}
                  <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-white/10 opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100" />

                  {/* Number */}
                  {/* <div className="absolute right-7 top-7 text-5xl font-black text-white/[0.04] transition-all duration-500 group-hover:text-white/[0.08]">
                    {String(index + 1).padStart(2, "0")}
                  </div> */}

                  <div className="relative z-10 flex h-full flex-col">
                    {/* Icon */}
                    <div className="mb-4 flex h-16 w-16 items-center justify-center text-white/60 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:text-white">
                      {service.icon}
                    </div>

                    {/* Content */}
                    <h3 className="cinzel-decorative-regular mb-4 text-3xl text-white">
                      {service.title}
                    </h3>

                    <p className="mb-8 leading-relaxed text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                      {service.description}
                    </p>

                    {/* Learn More */}
                    <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-6">
                      <span className="text-sm font-semibold uppercase tracking-wider text-zinc-500 transition-colors duration-300 group-hover:text-white">
                        Discover More
                      </span>

                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white group-hover:text-black">
                        <FiArrowRight />
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Roving Hover Box */}
              <div
                className="pointer-events-none absolute left-0 top-0 z-0 bg-white/[0.06] transition-all duration-500 ease-out"
                style={{
                  opacity: hoverBox.opacity,
                  transform: `translate(${hoverBox.left}px, ${hoverBox.top}px)`,
                  width: `${hoverBox.width}px`,
                  height: `${hoverBox.height}px`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;