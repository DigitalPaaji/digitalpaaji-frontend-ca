"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef, useState } from "react";
import {
  FiArrowUpRight,
  FiCheck,
  FiClock,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {
  const sectionRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (status === "submitting") return;

    setStatus("submitting");

    try {
      // Replace this delay with your API request.
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setStatus("idle");
      }, 4000);
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("idle");
    }
  };

  useGSAP(
    () => {
      gsap.from(".contact-badge", {
        y: 25,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".contact-heading-line", {
        y: 90,
        opacity: 0,
        rotateX: -25,
        stagger: 0.12,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".contact-description", {
        y: 35,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
        },
      });

      gsap.from(".contact-info-card", {
        x: -60,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-content",
          start: "top 78%",
        },
      });

      gsap.from(".contact-form-card", {
        x: 70,
        opacity: 0,
        rotateY: -6,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".contact-content",
          start: "top 78%",
        },
      });

      gsap.to(".contact-orb-one", {
        x: 50,
        y: -35,
        scale: 1.15,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".contact-orb-two", {
        x: -45,
        y: 40,
        scale: 0.9,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".floating-dot", {
        y: -16,
        duration: 2,
        stagger: {
          each: 0.3,
          repeat: -1,
          yoyo: true,
        },
        ease: "sine.inOut",
      });
    },
    {
      scope: sectionRef,
    }
  );

  const contactItems = [
    {
      icon: FiMail,
      label: "Send an email",
      title: "hello@yourwebsite.com",
      description: "For projects, proposals and general enquiries.",
      href: "mailto:hello@yourwebsite.com",
    },
    {
      icon: FiPhone,
      label: "Call our team",
      title: "+1 (555) 123-4567",
      description: "Monday to Friday, 9:00 AM to 6:00 PM.",
      href: "tel:+15551234567",
    },
    {
      icon: FiMapPin,
      label: "Visit our office",
      title: "San Francisco, California",
      description: "123 Tech Boulevard, CA 94105.",
      href: "https://maps.google.com",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full overflow-hidden bg-[#07090d] py-20 text-white sm:py-24 lg:py-32"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      {/* Background glow */}
      <div className="contact-orb-one pointer-events-none absolute -left-32 top-20 h-[400px] w-[400px] rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="contact-orb-two pointer-events-none absolute -right-32 bottom-0 h-[450px] w-[450px] rounded-full bg-violet-600/20 blur-[130px]" />

      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      {/* Floating decorative dots */}
      <div className="floating-dot absolute left-[7%] top-[25%] hidden h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_20px_rgba(96,165,250,0.8)] lg:block" />

      <div className="floating-dot absolute right-[8%] top-[35%] hidden h-3 w-3 rounded-full bg-violet-400 shadow-[0_0_20px_rgba(192,132,252,0.8)] lg:block" />

      <div className="floating-dot absolute bottom-[15%] left-[42%] hidden h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(103,232,249,0.8)] lg:block" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="mb-14 grid gap-8 lg:mb-20 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <div className="contact-badge mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 backdrop-blur-xl">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>

              <span className="text-xs font-medium uppercase tracking-[0.22em] text-white/70">
                Available for new projects
              </span>
            </div>

            <div className="overflow-hidden">
              <h2 className="contact-heading-line text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                Have an idea?
              </h2>
            </div>

            <div className="overflow-hidden">
              <h2 className="contact-heading-line bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-transparent sm:text-6xl lg:text-7xl">
                Let&apos;s build it.
              </h2>
            </div>
          </div>

          <p className="contact-description max-w-xl text-base leading-7 text-white/55 sm:text-lg">
            Tell us about your project, product or business challenge. Our team
            will review your message and respond with the right next steps.
          </p>
        </div>

        <div className="contact-content grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          {/* Contact details */}
          <div className="space-y-4">
            {contactItems.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="contact-info-card group flex items-start gap-5 rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.07] sm:p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-blue-300 transition-all duration-500 group-hover:rotate-6 group-hover:border-blue-400/30 group-hover:bg-blue-500/15 group-hover:text-blue-200">
                    <Icon size={21} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="mb-1 text-xs font-medium uppercase tracking-[0.18em] text-white/40">
                      {item.label}
                    </p>

                    <h3 className="break-words text-base font-medium text-white sm:text-lg">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-white/45">
                      {item.description}
                    </p>
                  </div>

                  <FiArrowUpRight className="mt-1 shrink-0 text-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-300" />
                </a>
              );
            })}

            <div className="contact-info-card rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-violet-500/10 p-6 backdrop-blur-xl">
              <div className="mb-4 flex items-center gap-3">
                <FiClock className="text-blue-300" size={20} />

                <span className="font-medium text-white">
                  Fast response guaranteed
                </span>
              </div>

              <p className="text-sm leading-6 text-white/50">
                We normally respond within one business day with answers,
                recommendations and the next steps for your project.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="contact-form-card relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.055] p-1 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
            <div className="pointer-events-none absolute left-0 top-0 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative rounded-[24px] border border-white/[0.06] bg-[#0d1016]/90 p-6 sm:p-8 lg:p-10">
              <div className="mb-8">
                <p className="mb-2 text-sm font-medium text-blue-300">
                  Start a conversation
                </p>

                <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Tell us about your project
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormInput
                    label="Full name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    autoComplete="name"
                  />

                  <FormInput
                    label="Email address"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    autoComplete="email"
                  />
                </div>

                <FormInput
                  label="Project subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Website development"
                />

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-white/70"
                  >
                    Your message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your goals, requirements and timeline..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/25 hover:border-white/20 focus:border-blue-400/60 focus:bg-white/[0.07] focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-white px-6 py-4 text-sm font-semibold text-black transition-all duration-500 hover:bg-blue-300 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  {status === "submitting" ? (
                    <>
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-black/25 border-t-black" />
                      Sending message...
                    </>
                  ) : status === "success" ? (
                    <>
                      <FiCheck size={19} />
                      Message sent successfully
                    </>
                  ) : (
                    <>
                      Send message
                      <FiSend className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                <p className="text-center text-xs leading-5 text-white/35">
                  By submitting this form, you agree that we may contact you
                  regarding your enquiry.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>Have something urgent? Call our team directly.</p>

          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-400">
              <FiCheck size={13} />
            </span>
            Secure and confidential communication
          </div>
        </div>
      </div>
    </section>
  );
};

const FormInput = ({
  label,
  name,
  type,
  value,
  onChange,
  placeholder,
  autoComplete,
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-white/70"
      >
        {label}
      </label>

      <input
        id={name}
        type={type}
        name={name}
        required
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/25 hover:border-white/20 focus:border-blue-400/60 focus:bg-white/[0.07] focus:ring-4 focus:ring-blue-500/10"
      />
    </div>
  );
};

export default ContactUs;