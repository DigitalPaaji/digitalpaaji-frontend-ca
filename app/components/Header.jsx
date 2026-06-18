"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiZap,
  FiBox,
  FiHexagon,
} from "react-icons/fi";

// Register ScrollTrigger outside the component to avoid re-registration issues
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HeroBanner = () => {
  const videoContainerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Animate the video container to expand to full screen
      gsap.fromTo(
        videoContainerRef.current,
        {
          width: "60%", // Starts at 60% width
          scale: 0.9, // Slightly scaled down
          borderRadius: "48px", // Heavy rounded corners
          opacity: 0.5,
        },
        {
          width: "100%", // Expands to edge-to-edge full width
          scale: 1, // Full scale
          borderRadius: "0px", // Removes rounded corners for true full-screen feel
          opacity: 1,
          scrollTrigger: {
            trigger: videoContainerRef.current,
            start: "top 85%", // Animation starts when video top hits 85% of viewport
            end: "top 15%", // Animation finishes when it reaches 15% from top
            scrub: 1, // 1-second smoothing for the scrub effect
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="relative bg-[#f8fbfa] overflow-hidden pt-32 pb-16 font-sans">
        {/* --- Ambient Background Gradients --- */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Top Left Greenish Blob */}
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#dcfce7] opacity-60 blur-[100px]"></div>
          {/* Top Right Bluish Blob */}
          <div className="absolute top-[10%] right-[-5%] w-[40%] h-[60%] rounded-full bg-[#e0f2fe] opacity-60 blur-[120px]"></div>
          {/* Bottom Center Mix Blob */}
          <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[40%] rounded-full bg-[#f3e8ff] opacity-40 blur-[100px]"></div>
        </div>

        {/* --- Main Content Container --- */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-3 px-2 py-1.5 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm my-4 xl:my-8 hover:shadow-md transition-shadow cursor-pointer">
            <span className="text-sm font-medium text-gray-700 pr-2">
              Strategic Digital Growth Partner
            </span>
            <FiArrowRight className="text-[#f0730d] mr-2" />
          </div>

          {/* Hero Headlines */}
          <h1 className="cinzel-decorative-regular text-4xl md:text-5xl xl:text-7xl font-extrabold text-gray-900 text-center tracking-tight leading-[1.1] max-w-4xl">
            Helping Brands Grow <br className="hidden md:block" />
            Smarter Online
          </h1>
          <p className="mt-6 text-md text-gray-500 px-4 xl:px-0 text-center max-w-2xl mx-auto leading-relaxed">
            Digital Paaji helps businesses build a stronger online presence,
            attract qualified leads, and convert visitors into customers through
            result-driven digital marketing, SEO, social media, website
            development, video production, and creative branding solutions.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-[#2a2a2a] text-white font-bold hover:bg-[#d9650b] flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Get Free Consultation
              <span className="bg-white/20 p-1 rounded-2xl flex items-center justify-center ml-2">
                <FiArrowUpRight className="w-3 h-3" />
              </span>
            </button>
            <button className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-white text-gray-900 font-medium border border-gray-200 hover:border-[#f0730d] hover:text-[#f0730d] transition-all shadow-sm flex items-center justify-center">
              View Our Work
            </button>
          </div>

          {/* --- Trusted Logos Section --- */}
          <div className="pt-6 xl:pt-12 mt-6 xl:mt-12 border-t border-gray-200/60 w-full max-w-5xl">
            <p className="text-center text-sm font-medium text-gray-500 mb-8 uppercase tracking-widest">
              Trusted by the world&apos;s most innovative teams
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2 font-black text-xl text-gray-900 tracking-tight">
                <div className="w-6 h-6 bg-[#f0730d] text-white rounded flex items-center justify-center text-xs">
                  N
                </div>{" "}
                Netdot
              </div>
              <div className="flex items-center gap-2 font-black text-xl text-gray-900 tracking-tight">
                <FiZap className="w-6 h-6 text-[#f0730d]" /> Sparkweb
              </div>
              <div className="flex items-center gap-2 font-black text-xl text-gray-900 tracking-tight">
                <FiBox className="w-6 h-6 text-[#f0730d]" /> Pixelpath
              </div>
              <div className="flex items-center gap-2 font-black text-xl text-gray-900 tracking-tight">
                <div className="w-6 h-6 bg-gray-900 text-white rounded flex items-center justify-center text-xs">
                  C
                </div>{" "}
                CodeLine
              </div>
              <div className="flex items-center gap-2 font-black text-xl text-gray-900 tracking-tight">
                <FiHexagon className="w-6 h-6 fill-[#f0730d] text-[#f0730d]" />{" "}
                Digitech
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Animated Video Section --- */}
      {/* We use flex to center it, and GSAP controls the width of the inner div */}
      <div className="w-full flex justify-center bg-[#f8fbfa] overflow-hidden">
        <div
          ref={videoContainerRef}
          className="overflow-hidden shadow-2xl"
          // We don't apply width/border-radius here because GSAP sets them immediately
        >
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/Videos/paaji.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
