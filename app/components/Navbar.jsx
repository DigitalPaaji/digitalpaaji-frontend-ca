"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Animated gradient style block */}
      <style>{`
        @keyframes gradient-xy {
          0%, 100% {
            background-size: 400% 400%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        .animate-gradient-xy {
          animation: gradient-xy 3s ease infinite;
        }
      `}</style>

      {/* Fixed Wrapper to keep it sticky at the top */}
      <div className="absolute top-6 left-0 w-full flex justify-center h-[80px] z-50 ">
        
        {/* Main Navbar Container */}
        <nav className="px-5 mx-4 md:mx-12 lg:mx-24 xl:mx-40 bg-[#2a2a2a]/95 backdrop-blur-md border border-gray-700/50 rounded-2xl py-4 flex items-center justify-between w-full shadow-2xl relative">
          
  {/* Logo Section */}
<div className="flex items-center shrink-0">
  <Link href="/" className="flex items-center">
    <img
      src="/logowhite.png"
      alt="Spareon Logo"
      className="h-10 md:h-12 lg:h-14 w-auto object-contain"
    />
  </Link>
</div>

          {/* Desktop Navigation Links (Visible only xl and above) */}
          <ul className="hidden xl:flex items-center space-x-2 text-[15px] font-medium text-gray-300">
            <li>
              <Link href="/" className="inline-block bg-[#404040] text-white px-5 py-2 rounded-2xl hover:bg-gray-600 transition-colors">
                Home
              </Link>
            </li>
  
            {/* Services Dropdown (Desktop) - Uses hover state */}
            <li 
              className="relative"
              onMouseEnter={() => setIsDesktopServicesOpen(true)}
              onMouseLeave={() => setIsDesktopServicesOpen(false)}
            >
              <button  className="flex items-center px-4 py-2 rounded-2xl hover:text-white hover:bg-[#333333] transition-colors">
                Services 
                <FiChevronDown className={`ml-1.5 text-gray-400 transition-transform duration-300 ${isDesktopServicesOpen ? 'rotate-180 text-white' : ''}`} />
              </button>
              
              {/* Dropdown Menu Container */}
              <div 
                className={`absolute top-full left-0 pt-4 w-48 transition-all duration-300 z-50 ${
                  isDesktopServicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="bg-[#2a2a2a] border border-gray-700/50 rounded-xl shadow-xl flex flex-col overflow-hidden p-1">
                  <Link href="/services/web-dev" className="px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-[#333333] rounded-lg transition-colors">
                    Web Development
                  </Link>
                  <Link href="/services/app-dev" className="px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-[#333333] rounded-lg transition-colors">
                    App Development
                  </Link>
                  <Link href="/services/seo" className="px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-[#333333] rounded-lg transition-colors">
                    SEO & Marketing
                  </Link>
                </div>
              </div>
            </li>
          
            <li>
              <Link href="/about" className="inline-block px-4 py-2 rounded-2xl hover:text-white hover:bg-[#333333] transition-colors">
                About
              </Link>
            </li>
    
            <li>
              <Link href="/blogs" className="inline-block px-4 py-2 rounded-2xl hover:text-white hover:bg-[#333333] transition-colors">
                Blogs
              </Link>
            </li>
            
            <li>
              <Link href="/portfolio" className="inline-block px-4 py-2 rounded-2xl hover:text-white hover:bg-[#333333] transition-colors">
                Portfolio
              </Link>
            </li>
              
            <li>
              <Link href="/contact" className="inline-block px-4 py-2 rounded-2xl hover:text-white hover:bg-[#333333] transition-colors">
                Contact
              </Link>
            </li>
          </ul>

          {/* Desktop CTA Button (Visible only xl and above) */}
          <div className="hidden xl:block ml-auto xl:ml-4">
            <Link href="/contact" className="relative group p-[1.5px] rounded-2xl overflow-hidden bg-linear-to-r from-green-400 via-pink-500 to-blue-500 animate-gradient-xy inline-block">
              <span className="flex items-center justify-center bg-[#2a2a2a] text-white px-6 py-2 rounded-[14px] text-[15px] font-medium w-full h-full  transition-colors">
                Get in Touch
              </span>
            </Link>
          </div>

          {/* Mobile Hamburger Menu Icon (Visible below xl) */}
          <div className="xl:hidden flex items-center ml-auto">
            <button 
              onClick={toggleSidebar} 
              className="text-gray-300 hover:text-white focus:outline-none p-2"
            >
              <FiMenu size={28} />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-[60] xl:hidden backdrop-blur-sm transition-opacity"
          onClick={toggleSidebar}
        />
      )}

      {/* Mobile Sidebar */}
<div
  className={`fixed top-0 left-0 h-full w-72 bg-[#2a2a2a] border-r border-gray-700/50 shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out xl:hidden flex flex-col ${
    isOpen ? "translate-x-0" : "-translate-x-full"
  }`}
>
        {/* Sidebar Header with Close Button */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
              <div className="h-[50px] overflow-hidden">
            <Link href="/">
              <img src="/logowhite.png" alt="Logo" className="w-full h-full object-cover"/>
            </Link>
          </div>
          <button 
            onClick={toggleSidebar} 
            className="text-gray-400 hover:text-white focus:outline-none p-1 rounded-2xl hover:bg-[#333] transition-colors"
          >
            <FiX size={24} />
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col space-y-2">
          <Link href="/" onClick={toggleSidebar} className="w-full block bg-[#404040] text-white px-5 py-3 rounded-2xl transition-colors">
            Home
          </Link>
          
          {/* Mobile Services Accordion - Uses click state */}
          <div>
            <button 
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="w-full flex items-center justify-between text-gray-300 px-5 py-3 rounded-2xl hover:text-white hover:bg-[#333333] transition-colors"
            >
              Services 
              <FiChevronDown size={18} className={`transform transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180 text-white' : ''}`} />
            </button>
            
            {/* Collapsible Mobile Dropdown Items */}
            <div className={`flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${isMobileServicesOpen ? 'max-h-48 opacity-100 mt-2 space-y-1' : 'max-h-0 opacity-0'}`}>
              <Link href="/services/web-dev" onClick={toggleSidebar} className="pl-10 pr-5 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-[#333333] rounded-xl block">
                Web Development
              </Link>
              <Link href="/services/app-dev" onClick={toggleSidebar} className="pl-10 pr-5 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-[#333333] rounded-xl block">
                App Development
              </Link>
              <Link href="/services/seo" onClick={toggleSidebar} className="pl-10 pr-5 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-[#333333] rounded-xl block">
                SEO & Marketing
              </Link>
            </div>
          </div>
          
          <Link href="/about" onClick={toggleSidebar} className="w-full block text-gray-300 px-5 py-3 rounded-2xl hover:text-white hover:bg-[#333333] transition-colors">
            About
          </Link>
          
          <Link href="/blogs" onClick={toggleSidebar} className="w-full block text-gray-300 px-5 py-3 rounded-2xl hover:text-white hover:bg-[#333333] transition-colors">
            Blogs
          </Link>
          
          <Link href="/portfolio" onClick={toggleSidebar} className="w-full block text-gray-300 px-5 py-3 rounded-2xl hover:text-white hover:bg-[#333333] transition-colors">
            Portfolio
          </Link>
          
          <Link href="/contact" onClick={toggleSidebar} className="w-full block text-gray-300 px-5 py-3 rounded-2xl hover:text-white hover:bg-[#333333] transition-colors">
            Contact
          </Link>
        </div>

        {/* Sidebar Footer (CTA) */}
        <div className="p-6 border-t border-gray-700/50">
          <Link href="/contact" onClick={toggleSidebar} className="relative group p-[1.5px] rounded-2xl overflow-hidden bg-gradient-to-r from-green-400 via-pink-500 to-blue-500 animate-gradient-xy block">
            <span className="flex items-center justify-center bg-[#2a2a2a] text-white px-6 py-3 rounded-[14px] text-[15px] font-medium w-full h-full hover:bg-transparent transition-colors">
              Get in Touch
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;