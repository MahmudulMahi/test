"use client";
import { useState } from "react";
import Image from "next/image";
import { FiChevronDown, FiMenu } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#d8c7b2] px-6 md:px-16 py-3 flex items-center justify-between shadow-sm">
      {/* Left: Logo */}
      <div className="flex items-center space-x-2">
        <Image
          src="/logoipsum-logo.png" // Replace with your logo path
          alt="Logo"
          width={35}
          height={35}
        />
        <span className="font-semibold text-gray-800 text-sm md:text-base">Logoipsum</span>
      </div>

      {/* Middle: Nav Links */}
      <div className="hidden md:flex items-center space-x-6 text-sm text-gray-800">
        <button className="border border-gray-700 rounded-full px-3 py-1 hover:bg-gray-200 transition">
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

      {/* Right: Contact + Menu */}
      <div className="flex items-center space-x-3">
        <button className="bg-[#0c2a1f] text-white px-4 py-2 rounded-full text-xs md:text-sm hover:bg-[#10382a] transition">
          CONTACT US
        </button>
        <button
          className="p-2 border border-gray-700 rounded-full md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FiMenu />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-14 right-6 bg-white border rounded-md shadow-md p-4 md:hidden">
          <div className="flex flex-col space-y-3 text-gray-800">
            <button className="border border-gray-700 rounded-full px-3 py-1">
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
