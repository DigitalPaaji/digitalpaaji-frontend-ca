"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
import ContactUs from "./ContactUs";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const OurClients = () => {
const clients = [

  "begums.png",
  "born16.webp",
 
  "ellementco.webp",

  "neemli.webp",
  "nourish.webp",
 
 
  "secretalchemist.webp",
  "softbird.png",
  "wildwolf.webp",
];
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const contactRef = useRef(null);

  useGSAP(
    () => {

      gsap.set(cardRef.current, {
        xPercent: 120,
        y: 120,
        rotateZ: 8,
        scale: 0.92,
        opacity: 1,
        transformOrigin: "bottom left",
      });

      gsap.set(contactRef.current, {
        xPercent: 120,
        opacity: 0,
        scale: 0.94,
        filter: "blur(12px)",
      });

      gsap.set([titleRef.current, textRef.current, ], {
        opacity: 0,
        y: 45,
        filter: "blur(10px)",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=260%",
          scrub: 1.4,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          // markers: true,
        },
      });

      tl.to(cardRef.current, {
        xPercent: 0,
        y: 0,
        rotateZ: 0,
        scale: 1,
        ease: "power3.out",
        duration: 1,
      })
        .to(
          titleRef.current,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            ease: "power3.out",
            duration: 0.6,
          },
          "-=0.45"
        )
        .to(
          textRef.current,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            ease: "power3.out",
            duration: 0.6,
          },
          "-=0.45"
        )
        

        // small hold
        .to({}, { duration: 0.45 })

        // clients card exit
        .to(cardRef.current, {
          xPercent: -115,
          y: -40,
          rotateZ: -28,
          scale: 0.9,
          opacity: 0,
          ease: "power2.inOut",
          duration: 1,
        })

        // contact enter
        .to(
          contactRef.current,
          {
            xPercent: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            ease: "power3.out",
            duration: 1,
          },
          "-=0.65"
        );

      return () => {
        tl.kill();
      };
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden px-4 text-white sm:px-6 "
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(226,185,98,0.22),transparent_34%),radial-gradient(circle_at_85%_75%,rgba(255,255,255,0.08),transparent_36%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:70px_70px] opacity-35" />
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E2B962]/10 blur-[140px]" />

      <div className="relative my-16 z-10 flex min-h-screen items-center justify-center overflow-hidden py-16">
        {/* Clients Card */}
        <div
          ref={cardRef}
          className="absolute w-full container overflow-hidden rounded-[2rem] border border-white/20 bg-[#e0a328c5] px-5 py-10 text-black shadow-[0_45px_160px_rgba(226,185,98,0.25)] sm:rounded-[2.5rem] sm:px-10 sm:py-12 lg:px-16"
        >
          {/* Card Glow */}
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/35 blur-[90px]" />
          <div className="absolute -bottom-28 -left-28 h-80 w-80 rounded-full bg-black/15 blur-[100px]" />

          <div className="relative z-10">
            {/* Header */}
            <div className="mb-10 flex flex-col items-start justify-between gap-6 md:mb-14 md:flex-row md:items-end">
              <div>
                <p className="mb-4 text-xs font-black uppercase tracking-[0.42em] text-black/45">
                  Trusted Partners
                </p>

                <h2
                  ref={titleRef}
                  className="max-w-4xl text-4xl font- uppercase leading-[0.88] tracking-tight sm:text-7xl lg:text-6xl"
                >
                  Our <span className="cinzel-decorative-regular">
                    Clients

                    </span>
                </h2>
              </div>

              <p
                ref={textRef}
                className="max-w-md font-semibold leading-7 text-black/55 sm:text-base"
              >
                We build premium websites, dashboards and digital products for
                modern brands, startups and growing businesses.
                  We build premium websites, dashboards and digital products for
                modern brands, startups and growing businesses.
              </p>
            </div>

            {/* Logos */}
            <div className="flex items-center justify-center flex-wrap max-w-5xl mx-auto gap-4">
              {clients.map((img, index) => (
                <div
                  key={img}
                 

                  className="group flex items-center justify-center  rounded-[1.6rem] l transition-all duration-500 hover:-translate-y-2 hover:rotate-1  sm:h-36 sm:rounded-[2rem] sm:p-6"
                >
                  <img
                    src={`/logo/${img}`}
                    alt="Client logo"
                    className="max-h-12  overflow-hidden object-contain grayscale"
                  />
                </div>
              ))}
            </div>

            {/* Bottom */}
            <div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-black/10 pt-7 sm:mt-12 sm:flex-row sm:items-center sm:pt-8">
              <p className="text-xs font-black uppercase tracking-[0.35em] text-black/45">
                Selected Work
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="rounded-full border border-black/10 bg-black px-5 py-2 text-xs font-bold uppercase tracking-widest text-white">
                  Websites
                </span>

                <span className="rounded-full border border-black/10 bg-white/40 px-5 py-2 text-xs font-bold uppercase tracking-widest text-black/65">
                  SEO
                </span>

                <span className="rounded-full border border-black/10 bg-white/40 px-5 py-2 text-xs font-bold uppercase tracking-widest text-black/65">
                  Digital Marketing
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div
          ref={contactRef}
          className="absolute w-full max-w-6xl rounded-[2rem] my-36"
        >
          <ContactUs />
        </div>
      </div>
    </section>
  );
};

export default OurClients;