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

  const sectionRef = useRef(null);
  const orbitRef = useRef(null);
  const reverseOrbitRef = useRef(null);
  const toolCardsRef = useRef([]);
  const iconInnerRef = useRef([]);

  const [orbitRadius, setOrbitRadius] = useState(210);

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

      const textTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          end: "top 30%",
          scrub: 1.4,
        },
      });

      textTl.from(".copy-animate", {
        y: 45,
        opacity: 0,
        filter: "blur(8px)",
        stagger: 0.12,
        ease: "power3.out",
      });

      const entryTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 45%",
          end: "top 12%",
          scrub: 2.5,
          invalidateOnRefresh: true,
          // markers: true,
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
          ease: "power2.out",
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
        textTl.kill();
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
      className="relative min-h-screen overflow-hidden bg-black px-5 py-24 text-white sm:py-28"
    >
      {/* Premium Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_45%,rgba(255,255,255,0.13),transparent_34%),radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.08),transparent_30%)]" />
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.035] blur-[130px]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />

      <div className="container relative z-10 mx-auto grid min-h-[760px] items-center gap-16 lg:grid-cols-[1fr_580px] lg:gap-10">
        {/* Left Side Text */}
        <div className="max-w-2xl">
          <div className="copy-animate mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.9)]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.32em] text-white/70">
              Technology Stack
            </span>
          </div>

          <h2 className="copy-animate text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Tools That Build
            <span className="block bg-gradient-to-r from-white via-white/80 to-white/35 bg-clip-text text-transparent">
              Premium Products.
            </span>
          </h2>

          <p className="copy-animate mt-7 max-w-xl text-base leading-8 text-white/62 sm:text-lg">
            We use modern, scalable and battle-tested technologies to craft
            fast websites, powerful dashboards, smooth animations and reliable
            backend systems.
          </p>

          <div className="copy-animate mt-9 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl">
              <h3 className="text-3xl font-black">9+</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/45">
                Core Tools
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl">
              <h3 className="text-3xl font-black">Full</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/45">
                Stack
              </p>
            </div>

            <div className="col-span-2 rounded-3xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl sm:col-span-1">
              <h3 className="text-3xl font-black">Fast</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/45">
                Delivery
              </p>
            </div>
          </div>

          <div className="copy-animate mt-9 flex flex-wrap gap-3">
            {["Frontend", "Backend", "Database", "Animation", "Deployment"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white/55"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>

        {/* Right Side Orbit */}
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
            <div className="absolute inset-2 rounded-full bg-black" />
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