'use client';
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaHeadset } from "react-icons/fa";

// Register ScrollTrigger outside the component to prevent re-registration
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CustomPlanSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      gsap.fromTo(
        headingRef.current,
        { 
          x: -250, // Starts off-screen to the left
          opacity: 0 
        },
        {
          x: 0,    // Moves to its natural position (slides right)
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",    // Animation starts when top of section hits 75% of viewport
            end: "bottom 25%",   // Triggers 'leave' when bottom of section hits 25% of viewport
            // play on enter, reverse on leave, play on enter back, reverse on leave back
            toggleActions: "play reverse play reverse", 
          },
        }
      );

    }, sectionRef);

    // Cleanup function
    return () => ctx.revert();
  }, []);

  // Data structure for the right side matching your reference image
const rightSideData = [
  {
    id: "who-we-are",
    title: "Who We Are",
    description:
      "Learn about our journey, core values, and the passion that fuels everything we create. We combine creativity, strategy, and innovation to help businesses build meaningful digital experiences and lasting connections.",
    image: "/Videos/website.mp4",
  },
  {
    id: "our-services",
    title: "Our Services",
    description:
      "From branding and website development to digital marketing and growth strategies, we deliver tailored solutions designed to elevate your brand, engage your audience, and drive measurable results.",
    image: "/Videos/website.mp4",
  },
  {
    id: "featured-projects",
    title: "Featured Projects",
    description:
      "Explore a selection of our latest work and success stories. See how we transform ideas into impactful digital products, helping businesses stand out, grow faster, and achieve their goals.",
    image: "/Videos/website.mp4",
  },
];

  return (
    <div ref={sectionRef} className="w-full bg-[#0a0a0a] py-20 overflow-hidden">
      <div className="mx-4 md:mx-12 lg:mx-24 xl:mx-40">
        
        {/* Changed to a 10-column grid on large screens */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 lg:gap-12 items-start">
          
          {/* Top Left: Heading & Button (30% Width -> col-span-3) */}
          <div 
            ref={headingRef} 
            className="xl:col-span-5 xl:sticky mb-10 xl:mb-0 z-10"
          >
            {/* Adjusted text sizing slightly so it fits beautifully in the narrower 30% column */}
            <h2 className="text-white text-4xl xl:text-6xl font-semibold leading-tight mb-4">
              Not the same Plan <br />
               for {" "}
            <span className="cinzel-decorative-regular text-[#E0A228]">Every  Campaign
              </span>
            </h2>
            <p className="text-lg text-white mb-8">
              Let us write a <span className="cinzel-decorative-regular text-3xl text-[#E0A228]">custom plan</span> for you
            </p>
          
            <button className="flex items-center gap-3 bg-white text-black px-5 py-3 rounded-md font-semibold hover:bg-gray-200 transition-colors text-sm xl:text-base">
              <FaHeadset className="text-xl shrink-0" />
              <span>TALK TO EXPERT</span>
            </button>
          </div>

          {/* Right Side: Image + Text List Layout (70% Width -> col-span-7) */}
          <div className="xl:col-span-7 flex flex-col w-full xl:pl-10">
            {rightSideData.map((item, index) => (
              <div
                key={item.id}
                className={`flex flex-col sm:flex-row gap-8 py-10 border-t border-white/10 ${
                  index === rightSideData.length - 1 ? "border-b" : ""
                }`}
              >
                {/* Video/Image Wrapper */}
                <div className="w-full sm:w-[260px] xl:w-[320px] shrink-0">
                  <div className="aspect-[16/9] w-full overflow-hidden bg-[#1a1a1a] rounded-sm">
                    <video
                      src={item.image}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 opacity-90 hover:opacity-100"
                      autoPlay
                      muted
                      loop
                      playsInline
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex flex-col justify-center py-2">
                  <h3 className="text-white text-xl md:text-2xl font-serif font-light mb-3 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-base leading-relaxed font-light max-w-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

// 'use client';
// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { FaHeadset, FaUsers, FaCheck } from "react-icons/fa";

// // Register ScrollTrigger outside the component to prevent re-registration
// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }

// export default function CustomPlanSection() {
//   const sectionRef = useRef(null);
//   const headingRef = useRef(null);

//   useEffect(() => {
//     // gsap.context ensures all animations are scoped to this component 
//     // and easily cleaned up when the component unmounts (crucial for Next.js)
//     let ctx = gsap.context(() => {
      
//       gsap.fromTo(
//         headingRef.current,
//         { 
//           x: -250, // Start 250px to the left
//           opacity: 0 
//         },
//         {
//           x: 0,    // Move to its natural, original position
//           opacity: 1,
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 80%",    // Animation starts when the top of the section hits 80% of viewport height
//             end: "center center", // Animation finishes when the section is centered in the viewport
//             scrub: 1,            // The magic property: 1 second of smoothing as it follows your scroll up/down
//           },
//         }
//       );

//     }, sectionRef);

//     // Cleanup function
//     return () => ctx.revert();
//   }, []);

//   const plans = [
//     {
//       id: "startup",
//       firstLetter: "S",
//       restWord: "tartup!",
//       teamSize: "10-50",
//       features: [
//         "Limited brand awareness & market penetration",
//         "Setting up realistic goals iOTA Infotech",
//         "Budget & resource constraints",
//         "Making the product market fit",
//         "Boosting customer value & retention with iOTA India",
//       ],
//       className: "lg:col-start-2",
//     },
//     {
//       id: "enterprise",
//       firstLetter: "E",
//       restWord: "nterprise!",
//       teamSize: "200 & Hiring",
//       features: [
//         "Maximising ROAS with iOTA Creative Agency",
//         "Market Saturation and Diminishing Growth Trajectory",
//         "Innovation Stagnation and Maintaining Competitive Edge",
//         "Safeguarding Brand Reputation and Fostering Customer Trust with iOTA India",
//       ],
//       className: "lg:col-start-1",
//     },
//     {
//       id: "growing",
//       firstLetter: "G",
//       restWord: "rowing ",
//       secondWord: "Business!",
//       secondWordHighlight: "B",
//       secondWordRest: "usiness!",
//       teamSize: "50-200",
//       features: [
//         "Competing against already setup brands",
//         "Facing scalability challenges",
//         "Expanding with new markets/modules",
//         "Maximising customer lifetime value & retention",
//         "Omni Channel customer experience",
//       ],
//       className: "lg:col-start-2",
//     },
//   ];

//   return (
//     <div ref={sectionRef} className="w-full bg-black py-16 overflow-hidden">
//       <div className="mx-4 md:mx-12 lg:mx-24 xl:mx-40">
        
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
//           {/* Top Left: Heading & Button (Targeted by GSAP) */}
//           <div 
//             ref={headingRef} 
//             className="lg:col-start-1 lg:sticky  mb-10 lg:mb-0"
//           >
//             <h2 className=" text-white text-5xl md:text-5xl font-bold leading-tight mb-4">
//               Not the same Plan <br />
//                for {" "}
//             <span className="cinzel-decorative-regular text-[#E0A228]">Every  Campaign
//               </span>
//             </h2>
//             <p className="text-xl text-white mb-8">
//               Let us write a <span className="cinzel-decorative-regular text-[#E0A228]">custom plan</span> for you
//             </p>
//             <button className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition-colors">
//               <FaHeadset className="text-xl" />
//               TALK TO INDUSTRY EXPERT
//             </button>
//           </div>

//           {/* Cards mapped dynamically (Static) */}
//       {/* Cards mapped dynamically (Minimalist / No Boxes) */}
//           {plans.map((plan) => (
//             <div
//               key={plan.id}
//               className={`relative pl-8 md:pl-10 py-4 group ${plan.className}`}
//             >
//               {/* Sleek animated accent line instead of a box border */}
//               <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-800/60 rounded-full overflow-hidden">
//                 <div className="w-full h-1/3 bg-gradient-to-b from-[#E0A228] to-transparent opacity-40 group-hover:opacity-100 group-hover:h-full transition-all duration-700 ease-out"></div>
//               </div>

//               {/* Heading */}
//               <h3 className="text-4xl md:text-4xl  mb-4 tracking-tight">
//                 <span className="text-[#E0A228]">{plan.firstLetter}</span>
//                 <span className="text-white">{plan.restWord}</span>
//                 {plan.secondWord && (
//                   <>
//                     <span className="text-[#E0A228] ml-2">{plan.secondWordHighlight}</span>
//                     <span className="text-white">{plan.secondWordRest}</span>
//                   </>
//                 )}
//               </h3>

//               {/* Team Size Tag */}
//               <div className="flex items-center gap-2 text-gray-500 mb-8 uppercase tracking-widest text-xs font-bold">
//                 <FaUsers className="text-[#E0A228] text-sm" />
//                 <span>Team Size: {plan.teamSize}</span>
//               </div>

//               {/* Features List */}
//               <ul className="">
//                 {plan.features.map((feature, idx) => (
//                   <li key={idx} className="flex items-start gap-4 group/item">
//                     {/* Stylized Checkmark */}
//                     <div className="mt-1 bg-[#E0A228]/10 p-1.5 rounded-full text-[#E0A228] group-hover/item:bg-[#E0A228] group-hover/item:text-white transition-colors duration-300">
//                       <FaCheck className="text-[10px]" />
//                     </div>
//                     {/* Text with slight hover translation */}
//                     <span className="text-gray-400 group-hover/item:text-gray-200 group-hover/item:translate-x-1 transition-all duration-300 text-sm font-medium leading-relaxed">
//                       {feature}
//                     </span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// }