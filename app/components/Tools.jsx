// "use client";

// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/all";
// import React, { useRef, useState, useEffect } from "react";

// gsap.registerPlugin(useGSAP, ScrollTrigger);

// const Tools = () => {
//   const tools = [
//     "js.webp",
//     "node.webp",
//     "react.webp",
//     "php.webp",
//     "laravel.webp",
//     "sql.webp",
//     "vscode.webp",
//     "html.webp",
//     "tailwind.webp",
//   ];
  
//   // Ref for the text we want to animate
//   const textContainerRef = useRef(null);

//   useEffect(() => {
//     // Original scroll direction logic
//     let lastScrollY = window.scrollY;
//     let ticking = false;

//     const updateScrollDir = () => {
//       const scrollY = window.scrollY;
//       if (Math.abs(scrollY - lastScrollY) < 5) {
//         ticking = false;
//         return;
//       }
//       setScrollDir(scrollY > lastScrollY ? "down" : "up");
//       lastScrollY = scrollY > 0 ? scrollY : 0;
//       ticking = false;
//     };

//     const onScroll = () => {
//       if (!ticking) {
//         window.requestAnimationFrame(updateScrollDir);
//         ticking = true;
//       }
//     };

//     window.addEventListener("scroll", onScroll);

//     // --- GSAP Text Reveal Animation ---
//     let ctx = gsap.context(() => {
//       // Grab all the individual word spans
//       const words = textContainerRef.current.querySelectorAll(".reveal-word");

//       gsap.fromTo(
//         words,
//         {
//           color: "#63779a", // Starts as a light/medium gray
//         },
//         {
//           color: "#ffffff", // Animates to pure white
//           stagger: 0.1,
//           scrollTrigger: {
//             trigger: textContainerRef.current,
//             start: "top 85%",
//             end: "bottom 60%",
//             scrub: 1,
//           },
//         }
//       );
//     }, textContainerRef);

//     return () => {
//       window.removeEventListener("scroll", onScroll);
//       ctx.revert(); // Cleanup GSAP on unmount
//     };
//   }, []);

//   // Text to be split and animated
// const highlightText =
//   "Powered by industry-leading platforms, creative technologies, and advanced automation tools that help businesses scale faster, perform better, and stay ahead in a rapidly evolving digital landscape.";

// const words = [
//   { text: "Powered", highlight: false },
//   { text: "by", highlight: false },
//   { text: "industry-leading", highlight: true },
//   { text: "platforms,", highlight: true },

//   { text: "creative", highlight: true },
//   { text: "technologies,", highlight: true },

//   { text: "and", highlight: false },

//   { text: "advanced", highlight: true },
//   { text: "automation", highlight: true },
//   { text: "tools", highlight: true },

//   { text: "that", highlight: false },
//   { text: "help", highlight: false },
//   { text: "businesses", highlight: true },

//   { text: "scale", highlight: true },
//   { text: "faster,", highlight: false },

//   { text: "perform", highlight: true },
//   { text: "better,", highlight: false },

//   { text: "and", highlight: false },
//   { text: "stay", highlight: false },
//   { text: "ahead", highlight: true },

//   { text: "in", highlight: false },
//   { text: "a", highlight: false },

//   { text: "rapidly", highlight: false },
//   { text: "evolving", highlight: true },
//   { text: "digital", highlight: true },
//   { text: "landscape.", highlight: true },
// ];

//   const sectionRef = useRef(null);
//   const orbitRef = useRef(null);
//   const reverseOrbitRef = useRef(null);
//   const toolCardsRef = useRef([]);
//   const iconInnerRef = useRef([]);

//   const [orbitRadius, setOrbitRadius] = useState(210);
//   const [scrollDir, setScrollDir] = useState("up"); // Added missing state

//   useEffect(() => {
//     const updateRadius = () => {
//       if (window.innerWidth < 480) {
//         setOrbitRadius(125);
//       } else if (window.innerWidth < 640) {
//         setOrbitRadius(145);
//       } else {
//         setOrbitRadius(215);
//       }
//     };

//     updateRadius();
//     window.addEventListener("resize", updateRadius);

//     return () => window.removeEventListener("resize", updateRadius);
//   }, []);

//   useGSAP(
//     () => {
//       const cards = toolCardsRef.current.filter(Boolean);
//       const iconInners = iconInnerRef.current.filter(Boolean);

//       gsap.set(cards, {
//         opacity: 0,
//         scale: 0.35,
//         filter: "blur(10px)",
//         willChange: "transform, opacity, filter",
//       });

//       const directions = [
//         { x: -260, y: -180, rotate: -20 },
//         { x: 260, y: -180, rotate: 20 },
//         { x: -280, y: 120, rotate: -16 },
//         { x: 280, y: 120, rotate: 16 },
//         { x: -180, y: -280, rotate: -12 },
//         { x: 180, y: 280, rotate: 12 },
//         { x: -360, y: 0, rotate: -20 },
//         { x: 360, y: 0, rotate: 20 },
//         { x: 0, y: -340, rotate: 10 },
//       ];

//       const textTl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 72%",
//           end: "top 30%",
//           scrub: 1.4,
//         },
//       });

//       textTl.from(".copy-animate", {
//         y: 45,
//         opacity: 0,
//         filter: "blur(8px)",
//         stagger: 0.12,
//         ease: "power3.out",
//       });

//       const entryTl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 45%",
//           end: "top 12%",
//           scrub: 2.5,
//           invalidateOnRefresh: true,
//         },
//       });

//       entryTl.fromTo(
//         cards,
//         {
//           x: (index) => directions[index]?.x || 0,
//           y: (index) => directions[index]?.y || 0,
//           rotate: (index) => directions[index]?.rotate || 0,
//           opacity: 0,
//           scale: 0.35,
//           filter: "blur(10px)",
//         },
//         {
//           x: 0,
//           y: 0,
//           rotate: 0,
//           opacity: 1,
//           scale: 1,
//           filter: "blur(0px)",
//           ease: "power2.out",
//           stagger: {
//             each: 0.08,
//             from: "center",
//           },
//         }
//       );

//       const orbitTween = gsap.to(orbitRef.current, {
//         rotate: 360,
//         duration: 85,
//         repeat: -1,
//         ease: "none",
//       });

//       const reverseOrbitTween = gsap.to(reverseOrbitRef.current, {
//         rotate: -360,
//         duration: 110,
//         repeat: -1,
//         ease: "none",
//       });

//       const iconTween = gsap.to(iconInners, {
//         rotate: -360,
//         duration: 85,
//         repeat: -1,
//         ease: "none",
//       });

//       return () => {
//         textTl.kill();
//         entryTl.kill();
//         orbitTween.kill();
//         reverseOrbitTween.kill();
//         iconTween.kill();
//       };
//     },
//     { scope: sectionRef }
//   );

//   return (
//     <section
//       ref={sectionRef}
//       className="relative min-h-screen overflow-hidden bg-black px-5 py-24  sm:py-28"
//     >
//       {/* Background Image Setup */}
//       <div className="absolute inset-0 z-0 overflow-hidden">
//         <img
//           src="/toolsbg.jpg" // Replace with your actual image path
//           alt="Background Gradient"
//           className="h-full w-full object-cover opacity-90"
//         />
//         {/* Optional dark overlay to ensure text remains readable */}
//         <div className="absolute inset-0 bg-black/40" />
//       </div>

//       {/* Top and Bottom Fade Overlays */}
//       <div className="absolute inset-x-0 top-0 z-0 h-40 bg-gradient-to-b from-black to-transparent" />
//       <div className="absolute inset-x-0 bottom-0 z-0 h-40 bg-gradient-to-t from-black to-transparent" />

//       {/* MAIN CONTAINER: Changed to Flex Column and Centered */}
//       <div className="container pt-25 md:pt-50 relative z-10 mx-auto flex flex-col items-center justify-center min-h-190 gap-16 lg:gap-20">
        
//         {/* Top Text Section (Centered horizontally) */}
//         <div className="relative w-full max-w-4xl overflow-hidden text-center text-gray-800/60 pt-10">
//           <h2 className="text-white text-4xl md:text-4xl leading-tight mb-4">
//              Our{" "}
              
//             <span className="cinzel-dceorative-regular text-[#E0A228]">
//             Creative  </span>Tech Stack 
//             </h2>
          
//           <h3
//   ref={textContainerRef}
//   className="flex flex-wrap justify-center gap-2 text-xl md:text-3xl leading-relaxed"
// >
//   {words.map((word, index) => (
//     <span
//       key={index}
//       className={`reveal-word ${
//         word.highlight
//           ? "cinzel-decorative-"
//           : "font-light text-white"
//       }`}
//     >
//       {word.text}
//     </span>
//   ))}
// </h3>

//         {/* <h3
//             ref={textContainerRef}
//             className="font- flex flex-wrap justify-center gap-x-[0.35rem] text-xl  leading-relaxed md:text-3xl"
//           >
//           {words.map((word, index) => (
//               <span key={index} className="reveal-word">
//                 {word}
//               </span>
//             ))}
//         </h3> */}
//         </div>

//         {/* Bottom Orbit Section */}
//         <div className="relative mx-auto flex h-[360px] w-[min(580px,92vw)] items-center justify-center sm:h-[500px] lg:h-[580px]">
//           {/* Glow */}
//           <div className="absolute h-[260px] w-[260px] rounded-full bg-white/[0.08] blur-[90px] sm:h-[420px] sm:w-[420px]" />

//           {/* Rings */}
//           <div className="absolute h-[180px] w-[180px] rounded-full border border-white/10 sm:h-[300px] sm:w-[300px]" />
//           <div className="absolute h-[260px] w-[260px] rounded-full border border-white/10 sm:h-[420px] sm:w-[420px]" />
//           <div className="absolute h-[330px] w-[330px] rounded-full border border-dashed border-white/15 sm:h-[540px] sm:w-[540px]" />

//           {/* Moving Dots */}
//           <div
//             ref={reverseOrbitRef}
//             className="absolute inset-0 z-10 flex items-center justify-center"
//           >
//             <span className="absolute left-1/2 top-1/2 h-3 w-3 rounded-full bg-white/80 shadow-[0_0_25px_rgba(255,255,255,0.6)] [transform:rotate(25deg)_translate(270px)]" />
//             <span className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-white/35 [transform:rotate(160deg)_translate(210px)]" />
//             <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 rounded-full bg-white/45 [transform:rotate(285deg)_translate(150px)]" />
//           </div>

//           {/* Center Logo */}
//           <div className="relative z-40 flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] p-4 text-center shadow-[0_35px_100px_rgba(255,255,255,0.12)] backdrop-blur-xl sm:h-40 sm:w-40">
//             <div className="absolute inset-2 rounded-full " />
//             <img
//               src="/logo.webp"
//               alt="Logo"
//               className="relative z-10 h-full w-full object-contain"
//             />
//           </div>

//           {/* Orbit Icons */}
//           <div
//             ref={orbitRef}
//             className="absolute inset-0 z-30 flex items-center justify-center"
//           >
//             {tools.map((tool, index) => {
//               const angle = (index / tools.length) * 360;
//               const name = tool.split(".")[0];

//               return (
//                 <div
//                   key={tool}
//                   className="absolute left-1/2 top-1/2"
//                   style={{
//                     transform: `rotate(${angle}deg) translate(${orbitRadius}px) rotate(-${angle}deg)`,
//                   }}
//                 >
//                   <div
//                     ref={(el) => {
//                       toolCardsRef.current[index] = el;
//                     }}
//                     className="-ml-8 -mt-8 h-16 w-16 sm:-ml-12 sm:-mt-12 sm:h-24 sm:w-24"
//                   >
//                     <div className="group relative flex h-full w-full cursor-pointer items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:scale-110 hover:border-white/30 hover:bg-white hover:shadow-[0_35px_100px_rgba(255,255,255,0.18)] sm:rounded-[1.7rem] sm:p-4">
//                       <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/15 via-white/5 to-transparent opacity-100 sm:rounded-[1.7rem]" />
//                       <div className="absolute inset-x-3 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

//                       <div
//                         ref={(el) => {
//                           iconInnerRef.current[index] = el;
//                         }}
//                         className="relative z-10 flex h-full w-full items-center justify-center"
//                       >
//                         <img
//                           src={`/tools/${tool}`}
//                           alt={name}
//                           className="h-full w-full object-contain transition-all duration-500 group-hover:scale-110"
//                           onError={(e) => {
//                             e.currentTarget.style.display = "none";
//                             const parent = e.currentTarget.parentElement;
//                             if (parent) {
//                               parent.innerHTML = `<span class="text-xs font-bold uppercase text-white">${name}</span>`;
//                             }
//                           }}
//                         />
//                       </div>

//                       <div className="pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black opacity-0 shadow-xl transition-all duration-300 group-hover:-bottom-12 group-hover:opacity-100">
//                         {name}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Tools;




"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef, useState, useEffect } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Tools = () => {
  const tools = [
    "js.webp",
    "node.webp",
    "react.webp",
    "php.webp",
    "laravel.webp",
    "sql.webp",
    "vscode.webp",
    "html.webp",
    "tailwind.webp",
  ];
  
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
      const words = textContainerRef.current.querySelectorAll(".reveal-word");

      gsap.fromTo(
        words,
        {
          color: "#63779a", // Starts as a light/medium gray
        },
        {
          // Dynamically grab the target color from the data attribute so highlights stay gold!
          color: (index, target) => target.dataset.color, 
          stagger: 0.1,
          scrollTrigger: {
            trigger: textContainerRef.current,
            start: "top 85%",
            end: "bottom 60%",
            scrub: 1,
          },
        }
      );
    }, textContainerRef);

    return () => {
      window.removeEventListener("scroll", onScroll);
      ctx.revert(); // Cleanup GSAP on unmount
    };
  }, []);

  // Text to be split and animated
  const words = [
    { text: "Powered", highlight: false },
    { text: "by", highlight: false },
    { text: "industry-leading", highlight: true },
    { text: "platforms,", highlight: true },
    { text: "creative", highlight: true },
    { text: "technologies,", highlight: true },
    { text: "and", highlight: false },
    { text: "advanced", highlight: true },
    { text: "automation", highlight: true },
    { text: "tools", highlight: true },
    { text: "that", highlight: false },
    { text: "help", highlight: false },
    { text: "businesses", highlight: true },
    { text: "scale", highlight: true },
    { text: "faster,", highlight: false },
    { text: "perform", highlight: true },
    { text: "better,", highlight: false },
    { text: "and", highlight: false },
    { text: "stay", highlight: false },
    { text: "ahead", highlight: true },
    { text: "in", highlight: false },
    { text: "a", highlight: false },
    { text: "rapidly", highlight: false },
    { text: "evolving", highlight: true },
    { text: "digital", highlight: true },
    { text: "landscape.", highlight: true },
  ];

  const sectionRef = useRef(null);
  const orbitRef = useRef(null);
  const reverseOrbitRef = useRef(null);
  const toolCardsRef = useRef([]);
  const iconInnerRef = useRef([]);

  const [orbitRadius, setOrbitRadius] = useState(210);
  const [scrollDir, setScrollDir] = useState("up"); 

  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 480) {
        setOrbitRadius(125);
      } else if (window.innerWidth < 640) {
        setOrbitRadius(145);
      } else {
        setOrbitRadius(215);
      }
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);

    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  useGSAP(
    () => {
      const cards = toolCardsRef.current.filter(Boolean);
      const iconInners = iconInnerRef.current.filter(Boolean);

      gsap.set(cards, {
        opacity: 0,
        scale: 0.35,
        filter: "blur(10px)",
        willChange: "transform, opacity, filter",
      });

      const directions = [
        { x: -260, y: -180, rotate: -20 },
        { x: 260, y: -180, rotate: 20 },
        { x: -280, y: 120, rotate: -16 },
        { x: 280, y: 120, rotate: 16 },
        { x: -180, y: -280, rotate: -12 },
        { x: 180, y: 280, rotate: 12 },
        { x: -360, y: 0, rotate: -20 },
        { x: 360, y: 0, rotate: 20 },
        { x: 0, y: -340, rotate: 10 },
      ];

      // Replaced the buggy scrubbed timeline with a smooth toggleActions timeline
      const entryTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          // Automatically plays the animation fluidly when scrolling in, and reverses when leaving
          toggleActions: "play reverse play reverse", 
        },
      });

      entryTl.fromTo(
        cards,
        {
          x: (index) => directions[index]?.x || 0,
          y: (index) => directions[index]?.y || 0,
          rotate: (index) => directions[index]?.rotate || 0,
          opacity: 0,
          scale: 0.35,
          filter: "blur(10px)",
        },
        {
          x: 0,
          y: 0,
          rotate: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          ease: "back.out(1.2)", // Nice subtle bounce as they slot into place
          duration: 1.2,
          stagger: {
            each: 0.08,
            from: "center",
          },
        }
      );

      const orbitTween = gsap.to(orbitRef.current, {
        rotate: 360,
        duration: 85,
        repeat: -1,
        ease: "none",
      });

      const reverseOrbitTween = gsap.to(reverseOrbitRef.current, {
        rotate: -360,
        duration: 110,
        repeat: -1,
        ease: "none",
      });

      const iconTween = gsap.to(iconInners, {
        rotate: -360,
        duration: 85,
        repeat: -1,
        ease: "none",
      });

      return () => {
        entryTl.kill();
        orbitTween.kill();
        reverseOrbitTween.kill();
        iconTween.kill();
      };
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-black px-5 py-24 sm:py-28"
    >
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/toolsbg.jpg" // Replace with your actual image path
          alt="Background Gradient"
          className="h-full w-full object-cover opacity-90"
        />
        {/* Optional dark overlay to ensure text remains readable */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Top and Bottom Fade Overlays */}
      <div className="absolute inset-x-0 top-0 z-0 h-40 bg-gradient-to-b from-black to-transparent" />
      <div className="absolute inset-x-0 bottom-0 z-0 h-40 bg-gradient-to-t from-black to-transparent" />

      {/* MAIN CONTAINER: Flex Column and Centered */}
      <div className="container pt-24 md:pt-32 relative z-10 mx-auto flex flex-col items-center justify-center min-h-[760px] gap-16 lg:gap-20">
        
        {/* Top Text Section (Centered horizontally) */}
        <div className="relative w-full max-w-4xl overflow-hidden text-center text-gray-800/60 pt-10">
          <h2 className="text-white text-4xl md:text-4xl leading-tight mb-4">
            Our{" "}
            <span className="cinzel-decorative-regular text-[#E0A228]">
              Creative{" "}
            </span>
            Tech Stack 
          </h2>
          
          <h3
            ref={textContainerRef}
            className="flex flex-wrap justify-center gap-2 text-xl md:text-3xl leading-relaxed mt-6"
          >
            {words.map((word, index) => (
              <span
                key={index}
                // Determine target color for GSAP to animate towards
                data-color={word.highlight ? "#E0A228" : "#ffffff"} 
                className={`reveal-word ${
                  word.highlight
                    ? "cinzel-decorative-regular font-bold"
                    : "font-light"
                }`}
              >
                {word.text}
              </span>
            ))}
          </h3>
        </div>

        {/* Bottom Orbit Section */}
        <div className="relative mx-auto flex h-[360px] w-[min(580px,92vw)] items-center justify-center sm:h-[500px] lg:h-[580px]">
          {/* Glow */}
          <div className="absolute h-[260px] w-[260px] rounded-full bg-white/[0.08] blur-[90px] sm:h-[420px] sm:w-[420px]" />

          {/* Rings */}
          <div className="absolute h-[180px] w-[180px] rounded-full border border-white/10 sm:h-[300px] sm:w-[300px]" />
          <div className="absolute h-[260px] w-[260px] rounded-full border border-white/10 sm:h-[420px] sm:w-[420px]" />
          <div className="absolute h-[330px] w-[330px] rounded-full border border-dashed border-white/15 sm:h-[540px] sm:w-[540px]" />

          {/* Moving Dots */}
          <div
            ref={reverseOrbitRef}
            className="absolute inset-0 z-10 flex items-center justify-center"
          >
            <span className="absolute left-1/2 top-1/2 h-3 w-3 rounded-full bg-white/80 shadow-[0_0_25px_rgba(255,255,255,0.6)] [transform:rotate(25deg)_translate(270px)]" />
            <span className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-white/35 [transform:rotate(160deg)_translate(210px)]" />
            <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 rounded-full bg-white/45 [transform:rotate(285deg)_translate(150px)]" />
          </div>

          {/* Center Logo */}
          <div className="relative z-40 flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] p-4 text-center shadow-[0_35px_100px_rgba(255,255,255,0.12)] backdrop-blur-xl sm:h-40 sm:w-40">
            <div className="absolute inset-2 rounded-full " />
            <img
              src="/logo.webp"
              alt="Logo"
              className="relative z-10 h-full w-full object-contain"
            />
          </div>

          {/* Orbit Icons */}
          <div
            ref={orbitRef}
            className="absolute inset-0 z-30 flex items-center justify-center"
          >
            {tools.map((tool, index) => {
              const angle = (index / tools.length) * 360;
              const name = tool.split(".")[0];

              return (
                <div
                  key={tool}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform: `rotate(${angle}deg) translate(${orbitRadius}px) rotate(-${angle}deg)`,
                  }}
                >
                  <div
                    ref={(el) => {
                      toolCardsRef.current[index] = el;
                    }}
                    className="-ml-8 -mt-8 h-16 w-16 sm:-ml-12 sm:-mt-12 sm:h-24 sm:w-24"
                  >
                    <div className="group relative flex h-full w-full cursor-pointer items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:scale-110 hover:border-white/30 hover:bg-white hover:shadow-[0_35px_100px_rgba(255,255,255,0.18)] sm:rounded-[1.7rem] sm:p-4">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/15 via-white/5 to-transparent opacity-100 sm:rounded-[1.7rem]" />
                      <div className="absolute inset-x-3 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

                      <div
                        ref={(el) => {
                          iconInnerRef.current[index] = el;
                        }}
                        className="relative z-10 flex h-full w-full items-center justify-center"
                      >
                        <img
                          src={`/tools/${tool}`}
                          alt={name}
                          className="h-full w-full object-contain transition-all duration-500 group-hover:scale-110"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                            const parent = e.currentTarget.parentElement;
                            if (parent) {
                              parent.innerHTML = `<span class="text-xs font-bold uppercase text-white">${name}</span>`;
                            }
                          }}
                        />
                      </div>

                      <div className="pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black opacity-0 shadow-xl transition-all duration-300 group-hover:-bottom-12 group-hover:opacity-100">
                        {name}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;





// "use client";

// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/all";
// import React, { useRef, useState, useEffect } from "react";

// gsap.registerPlugin(useGSAP, ScrollTrigger);

// const Tools = () => {
//   const tools = [
//     "js.webp",
//     "node.webp",
//     "react.webp",
//     "php.webp",
//     "laravel.webp",
//     "sql.webp",
//     "vscode.webp",
//     "html.webp",
//     "tailwind.webp",
//   ];
//   // Ref for the text we want to animate
//   const textContainerRef = useRef(null);

//   useEffect(() => {
//     // Original scroll direction logic
//     let lastScrollY = window.scrollY;
//     let ticking = false;

//     const updateScrollDir = () => {
//       const scrollY = window.scrollY;
//       if (Math.abs(scrollY - lastScrollY) < 5) {
//         ticking = false;
//         return;
//       }
//       setScrollDir(scrollY > lastScrollY ? "down" : "up");
//       lastScrollY = scrollY > 0 ? scrollY : 0;
//       ticking = false;
//     };

//     const onScroll = () => {
//       if (!ticking) {
//         window.requestAnimationFrame(updateScrollDir);
//         ticking = true;
//       }
//     };

//     window.addEventListener("scroll", onScroll);

//     // --- GSAP Text Reveal Animation ---
//     let ctx = gsap.context(() => {
//       // Grab all the individual word spans
//       const words = textContainerRef.current.querySelectorAll(".reveal-word");

//       gsap.fromTo(
//         words,
//         {
//           color: "#9ca3af", // Starts as a light/medium gray
//         },
//         {
//           color: "#ffffff", // Animates to pure white
//           stagger: 0.1,
//           scrollTrigger: {
//             trigger: textContainerRef.current,
//             start: "top 85%",
//             end: "bottom 60%",
//             scrub: 1,
//           },
//         }
//       );
//     }, textContainerRef);

//     return () => {
//       window.removeEventListener("scroll", onScroll);
//       ctx.revert(); // Cleanup GSAP on unmount
//     };
//   }, []);

//   // Text to be split and animated
//   const highlightText =
//     "We know what's going on. You need top-notch design to stand out in the tech world, but hiring in-house designers can be costly and time-consuming. That's where Atmos comes in.";
//   const words = highlightText.split(" ");

//   const sectionRef = useRef(null);
//   const orbitRef = useRef(null);
//   const reverseOrbitRef = useRef(null);
//   const toolCardsRef = useRef([]);
//   const iconInnerRef = useRef([]);

//   const [orbitRadius, setOrbitRadius] = useState(210);
//   const [scrollDir, setScrollDir] = useState("up"); // Added missing state

//   useEffect(() => {
//     const updateRadius = () => {
//       if (window.innerWidth < 480) {
//         setOrbitRadius(125);
//       } else if (window.innerWidth < 640) {
//         setOrbitRadius(145);
//       } else {
//         setOrbitRadius(215);
//       }
//     };

//     updateRadius();
//     window.addEventListener("resize", updateRadius);

//     return () => window.removeEventListener("resize", updateRadius);
//   }, []);

//   useGSAP(
//     () => {
//       const cards = toolCardsRef.current.filter(Boolean);
//       const iconInners = iconInnerRef.current.filter(Boolean);

//       gsap.set(cards, {
//         opacity: 0,
//         scale: 0.35,
//         filter: "blur(10px)",
//         willChange: "transform, opacity, filter",
//       });

//       const directions = [
//         { x: -260, y: -180, rotate: -20 },
//         { x: 260, y: -180, rotate: 20 },
//         { x: -280, y: 120, rotate: -16 },
//         { x: 280, y: 120, rotate: 16 },
//         { x: -180, y: -280, rotate: -12 },
//         { x: 180, y: 280, rotate: 12 },
//         { x: -360, y: 0, rotate: -20 },
//         { x: 360, y: 0, rotate: 20 },
//         { x: 0, y: -340, rotate: 10 },
//       ];

//       const textTl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 72%",
//           end: "top 30%",
//           scrub: 1.4,
//         },
//       });

//       textTl.from(".copy-animate", {
//         y: 45,
//         opacity: 0,
//         filter: "blur(8px)",
//         stagger: 0.12,
//         ease: "power3.out",
//       });

//       const entryTl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 45%",
//           end: "top 12%",
//           scrub: 2.5,
//           invalidateOnRefresh: true,
//         },
//       });

//       entryTl.fromTo(
//         cards,
//         {
//           x: (index) => directions[index]?.x || 0,
//           y: (index) => directions[index]?.y || 0,
//           rotate: (index) => directions[index]?.rotate || 0,
//           opacity: 0,
//           scale: 0.35,
//           filter: "blur(10px)",
//         },
//         {
//           x: 0,
//           y: 0,
//           rotate: 0,
//           opacity: 1,
//           scale: 1,
//           filter: "blur(0px)",
//           ease: "power2.out",
//           stagger: {
//             each: 0.08,
//             from: "center",
//           },
//         }
//       );

//       const orbitTween = gsap.to(orbitRef.current, {
//         rotate: 360,
//         duration: 85,
//         repeat: -1,
//         ease: "none",
//       });

//       const reverseOrbitTween = gsap.to(reverseOrbitRef.current, {
//         rotate: -360,
//         duration: 110,
//         repeat: -1,
//         ease: "none",
//       });

//       const iconTween = gsap.to(iconInners, {
//         rotate: -360,
//         duration: 85,
//         repeat: -1,
//         ease: "none",
//       });

//       return () => {
//         textTl.kill();
//         entryTl.kill();
//         orbitTween.kill();
//         reverseOrbitTween.kill();
//         iconTween.kill();
//       };
//     },
//     { scope: sectionRef }
//   );

//   return (
//     <section
//       ref={sectionRef}
//       className="relative min-h-screen overflow-hidden bg-black px-5 py-24 text-white sm:py-28"
//     >
//       {/* Background Video Setup
//         The 'scale-[1.8]' ensures the video covers the corners after being rotated 90 degrees.
//         If it's an image file (.webp), change <video> to <img> and remove autoPlay/muted/loop.
//       */}
//       {/* <div className="absolute inset-0 z-0 overflow-hidden opacity-50">
//         <video
//           src="/Videos/galaxy.mp4" 
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 rotate-90 scale-[1.8] object-cover "
//         />
//         <div className="absolute inset-0 bg-black/40" />
//       </div> */}

//       {/* Top and Bottom Fade Overlays */}
//       <div className="absolute inset-x-0 top-0 z-0 h-40 bg-gradient-to-b from-black to-transparent" />
//       <div className="absolute inset-x-0 bottom-0 z-0 h-40 bg-gradient-to-t from-black to-transparent" />

//       <div className="container relative z-10 mx-auto grid min-h-[760px] items-center gap-16 lg:grid-cols-[1fr_580px] lg:gap-10">
//         {/* Left Side Text */}
       
//         <div className="relative w-full max-w-2xl overflow-hidden text-start text-gray-800/60">
//           <h2
//             ref={textContainerRef}
//             className="cinzel-decorative-regular flex flex-wrap justify-start gap-x-[0.35rem] text-2xl font-medium leading-relaxed md:text-5xl"
//           >
//             {/* Map through the words array to render them individually */}
//             {words.map((word, index) => (
//               <span key={index} className="reveal-word">
//                 {word}
//               </span>
//             ))}
//           </h2>
//         </div>

//         {/* Right Side Orbit */}
//         <div className="relative mx-auto flex h-[360px] w-[min(580px,92vw)] items-center justify-center sm:h-[500px] lg:h-[580px]">
//           {/* Glow */}
//           <div className="absolute h-[260px] w-[260px] rounded-full bg-white/[0.08] blur-[90px] sm:h-[420px] sm:w-[420px]" />

//           {/* Rings */}
//           <div className="absolute h-[180px] w-[180px] rounded-full border border-white/10 sm:h-[300px] sm:w-[300px]" />
//           <div className="absolute h-[260px] w-[260px] rounded-full border border-white/10 sm:h-[420px] sm:w-[420px]" />
//           <div className="absolute h-[330px] w-[330px] rounded-full border border-dashed border-white/15 sm:h-[540px] sm:w-[540px]" />

//           {/* Moving Dots */}
//           <div
//             ref={reverseOrbitRef}
//             className="absolute inset-0 z-10 flex items-center justify-center"
//           >
//             <span className="absolute left-1/2 top-1/2 h-3 w-3 rounded-full bg-white/80 shadow-[0_0_25px_rgba(255,255,255,0.6)] [transform:rotate(25deg)_translate(270px)]" />
//             <span className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-white/35 [transform:rotate(160deg)_translate(210px)]" />
//             <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 rounded-full bg-white/45 [transform:rotate(285deg)_translate(150px)]" />
//           </div>

//           {/* Center Logo */}
//           <div className="relative z-40 flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] p-4 text-center shadow-[0_35px_100px_rgba(255,255,255,0.12)] backdrop-blur-xl sm:h-40 sm:w-40">
//             <div className="absolute inset-2 rounded-full " />
//             <img
//               src="/logo.webp"
//               alt="Logo"
//               className="relative z-10 h-full w-full object-contain"
//             />
//           </div>

//           {/* Orbit Icons */}
//           <div
//             ref={orbitRef}
//             className="absolute inset-0 z-30 flex items-center justify-center"
//           >
//             {tools.map((tool, index) => {
//               const angle = (index / tools.length) * 360;
//               const name = tool.split(".")[0];

//               return (
//                 <div
//                   key={tool}
//                   className="absolute left-1/2 top-1/2"
//                   style={{
//                     transform: `rotate(${angle}deg) translate(${orbitRadius}px) rotate(-${angle}deg)`,
//                   }}
//                 >
//                   <div
//                     ref={(el) => {
//                       toolCardsRef.current[index] = el;
//                     }}
//                     className="-ml-8 -mt-8 h-16 w-16 sm:-ml-12 sm:-mt-12 sm:h-24 sm:w-24"
//                   >
//                     <div className="group relative flex h-full w-full cursor-pointer items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:scale-110 hover:border-white/30 hover:bg-white hover:shadow-[0_35px_100px_rgba(255,255,255,0.18)] sm:rounded-[1.7rem] sm:p-4">
//                       <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/15 via-white/5 to-transparent opacity-100 sm:rounded-[1.7rem]" />
//                       <div className="absolute inset-x-3 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

//                       <div
//                         ref={(el) => {
//                           iconInnerRef.current[index] = el;
//                         }}
//                         className="relative z-10 flex h-full w-full items-center justify-center"
//                       >
//                         <img
//                           src={`/tools/${tool}`}
//                           alt={name}
//                           className="h-full w-full object-contain transition-all duration-500 group-hover:scale-110"
//                           onError={(e) => {
//                             e.currentTarget.style.display = "none";
//                             const parent = e.currentTarget.parentElement;
//                             if (parent) {
//                               parent.innerHTML = `<span class="text-xs font-bold uppercase text-white">${name}</span>`;
//                             }
//                           }}
//                         />
//                       </div>

//                       <div className="pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black opacity-0 shadow-xl transition-all duration-300 group-hover:-bottom-12 group-hover:opacity-100">
//                         {name}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Tools;