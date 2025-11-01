

"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FiChevronDown, FiMenu } from "react-icons/fi";
import { IoMenuSharp } from "react-icons/io5";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0  w-full z-50 shadow-sm backdrop-blur-sm transition-all duration-300 max-w-[1440px] mx-auto"
      style={{
        background: `linear-gradient(
          rgba(224, 209, 190, ${1 - Math.min(scrollY / 400, 0.4)}),
          rgba(224, 209, 190, ${0.95 - Math.min(scrollY / 400, 0.3)})
        )`,
      }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-3 flex items-center justify-between h-[80px] md:h-[98px]">
        
        <div className="flex items-center space-x-2">
          <Image
            src="/logo/logo.png"
            alt="Logo"
            width={188}
            height={32}
            className="w-[120px] sm:w-[150px] md:w-[188px] h-auto"
          />
        </div>

       
        <div className="hidden md:flex items-center space-x-6 text-[16px] text-gray-800 ">
          <button className="border border-gray-700 rounded-full px-3 py-1.5 hover:bg-gray-200 transition">
            HOME
          </button>

          <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-600">
            <span>SERVICES</span>
            <FiChevronDown className="text-xs" />
          </div>

          <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-600">
            <span>MORE</span>
            <FiChevronDown className="text-xs" />
          </div>
        </div>

       
        <div className="flex items-center space-x-3 sm:space-x-6">
          <button className="bg-[#122620] text-white px-4 py-2 rounded-full text-xs md:text-sm hover:bg-[#10382a] transition whitespace-nowrap">
            CONTACT US
          </button>

          
          <button
            className="p-2 border border-gray-700 rounded-full md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FiMenu />
          </button>

          
          <div className="hidden md:block border rounded-full p-2">
            <IoMenuSharp className="text-2xl" />
          </div>
        </div>
      </div>

     
      {menuOpen && (
        <div className="absolute top-[80px] right-4 bg-white border rounded-md shadow-md p-4 md:hidden w-[200px]">
          <div className="flex flex-col space-y-3 text-gray-800">
            <button className="border border-gray-700 rounded-full px-3 py-1.5">
              HOME
            </button>
            <span className="cursor-pointer">SERVICES</span>
            <span className="cursor-pointer">MORE</span>
          </div>
        </div>
      )}
    </nav>
  );
}

