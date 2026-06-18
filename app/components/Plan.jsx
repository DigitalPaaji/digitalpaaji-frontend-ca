'use client';
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaHeadset, FaUsers, FaCheck } from "react-icons/fa";

// Register ScrollTrigger outside the component to prevent re-registration
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CustomPlanSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    // gsap.context ensures all animations are scoped to this component 
    // and easily cleaned up when the component unmounts (crucial for Next.js)
    let ctx = gsap.context(() => {
      
      gsap.fromTo(
        headingRef.current,
        { 
          x: -250, // Start 250px to the left
          opacity: 0 
        },
        {
          x: 0,    // Move to its natural, original position
          opacity: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",    // Animation starts when the top of the section hits 80% of viewport height
            end: "center center", // Animation finishes when the section is centered in the viewport
            scrub: 1,            // The magic property: 1 second of smoothing as it follows your scroll up/down
          },
        }
      );

    }, sectionRef);

    // Cleanup function
    return () => ctx.revert();
  }, []);

  const plans = [
    {
      id: "startup",
      firstLetter: "S",
      restWord: "tartup!",
      teamSize: "10-50",
      features: [
        "Limited brand awareness & market penetration",
        "Setting up realistic goals iOTA Infotech",
        "Budget & resource constraints",
        "Making the product market fit",
        "Boosting customer value & retention with iOTA India",
      ],
      className: "lg:col-start-2",
    },
    {
      id: "enterprise",
      firstLetter: "E",
      restWord: "nterprise!",
      teamSize: "200 & Hiring",
      features: [
        "Maximising ROAS with iOTA Creative Agency",
        "Market Saturation and Diminishing Growth Trajectory",
        "Innovation Stagnation and Maintaining Competitive Edge",
        "Safeguarding Brand Reputation and Fostering Customer Trust with iOTA India",
      ],
      className: "lg:col-start-1",
    },
    {
      id: "growing",
      firstLetter: "G",
      restWord: "rowing ",
      secondWord: "Business!",
      secondWordHighlight: "B",
      secondWordRest: "usiness!",
      teamSize: "50-200",
      features: [
        "Competing against already setup brands",
        "Facing scalability challenges",
        "Expanding with new markets/modules",
        "Maximising customer lifetime value & retention",
        "Omni Channel customer experience",
      ],
      className: "lg:col-start-2",
    },
  ];

  return (
    <div ref={sectionRef} className="w-full bg-black py-16 overflow-hidden">
      <div className="mx-4 md:mx-12 lg:mx-24 xl:mx-40">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Top Left: Heading & Button (Targeted by GSAP) */}
          <div 
            ref={headingRef} 
            className="lg:col-start-1 lg:sticky  mb-10 lg:mb-0"
          >
            <h2 className="cinzel-decorative-regular text-white text-5xl md:text-5xl font-bold leading-tight mb-4">
              Not the same <br />
              Plan for Every <br />
              Campaign
            </h2>
            <p className="text-xl text-white mb-8">
              Let us write a <span className="text-[#E0A228]">custom plan</span> for you
            </p>
            <button className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition-colors">
              <FaHeadset className="text-xl" />
              TALK TO INDUSTRY EXPERT
            </button>
          </div>

          {/* Cards mapped dynamically (Static) */}
      {/* Cards mapped dynamically (Minimalist / No Boxes) */}
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative pl-8 md:pl-10 py-4 group ${plan.className}`}
            >
              {/* Sleek animated accent line instead of a box border */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-800/60 rounded-full overflow-hidden">
                <div className="w-full h-1/3 bg-gradient-to-b from-[#E0A228] to-transparent opacity-40 group-hover:opacity-100 group-hover:h-full transition-all duration-700 ease-out"></div>
              </div>

              {/* Heading */}
              <h3 className="text-4xl md:text-4xl  mb-4 tracking-tight">
                <span className="text-[#E0A228]">{plan.firstLetter}</span>
                <span className="text-white">{plan.restWord}</span>
                {plan.secondWord && (
                  <>
                    <span className="text-[#E0A228] ml-2">{plan.secondWordHighlight}</span>
                    <span className="text-white">{plan.secondWordRest}</span>
                  </>
                )}
              </h3>

              {/* Team Size Tag */}
              <div className="flex items-center gap-2 text-gray-500 mb-8 uppercase tracking-widest text-xs font-bold">
                <FaUsers className="text-[#E0A228] text-sm" />
                <span>Team Size: {plan.teamSize}</span>
              </div>

              {/* Features List */}
              <ul className="space-y-5">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-4 group/item">
                    {/* Stylized Checkmark */}
                    <div className="mt-1 bg-[#E0A228]/10 p-1.5 rounded-full text-[#E0A228] group-hover/item:bg-[#E0A228] group-hover/item:text-white transition-colors duration-300">
                      <FaCheck className="text-[10px]" />
                    </div>
                    {/* Text with slight hover translation */}
                    <span className="text-gray-400 group-hover/item:text-gray-200 group-hover/item:translate-x-1 transition-all duration-300 text-sm font-medium leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}