

"use client";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative text-white py-20 px-4  md:px-6 lg:px-24 overflow-hidden">
      {/* Gradient Background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 0%, rgba(136,158,149,0.08) 0%, transparent 60%),
            radial-gradient(circle at 50% 0%, rgba(136,158,149,0.08) 0%, transparent 60%),
            radial-gradient(circle at 80% 0%, rgba(136,158,149,0.08) 0%, transparent 60%),
            #0E221C
          `,
        }}
      ></div>


      {/* Content */}
      <div className="relative z-10 text-center md:text-left">
        {/* Heading */}
        <h2 className="text-[50px] sm:text-[60px] md:text-[60px] lg:text-[160px] font-serif tracking-wide mb-12 leading-tight lg:text-nowrap">
          GET IN TOUCH
        </h2>

        <div className="lg:flex justify-between pr-60 hidden">
          <h3 className="text-sm font-semibold tracking-widest mb-4">
            NEWSLETTER
          </h3>
          <h3 className="text-sm font-semibold tracking-widest mb-4">
            SOCIAL MEDIA
          </h3>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-600 pt-8">
          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest mb-4 lg:hidden">
              NEWSLETTER
            </h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              STAY CONNECTED WITH BOND & VALE. SUBSCRIBE TO OUR NEWSLETTER FOR
              THE LATEST UPDATES, EXCLUSIVE OFFERS AND INSPIRING CONTENT
              DELIVERED STRAIGHT TO YOUR INBOX
            </p>

            <div
              className="flex items-center gap-2 border border-gray-600 rounded-full overflow-hidden w-full max-w-[290px] sm:max-w-sm"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(41, 85, 71, 0.6), rgba(25, 53, 45, 0.08), transparent 70%)",
              }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent text-gray-300 px-4 py-2 flex-grow outline-none text-sm m-1.5 w-[166px] md:w-full"
              />
              <button className="bg-[#f3d9b0] text-black px-4 py-3 rounded-full text-sm font-semibold hover:bg-[#e6c89b] transition ">
                Subscribe
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 md:mt-0">
            <h3 className="text-sm font-semibold tracking-widest mb-4 lg:hidden">
              CONTACT
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Meydan Office, Meydan, Dubai, United Arab Emirates
            </p>
            <p className="text-gray-400 text-sm mt-4">+91 8598389898</p>
            <p className="text-gray-400 text-sm mt-2">admin@bondandvale.com</p>
          </div>

          {/* Social Media */}
          <div className="mt-12 md:mt-0">
            <h3 className="text-sm font-semibold tracking-widest mb-4 lg:hidden">
              SOCIAL MEDIA
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              {[
                { icon: <FaFacebookF />, label: "FACEBOOK" },
                { icon: <FaTwitter />, label: "TWITTER" },
                { icon: <FaLinkedinIn />, label: "LINKEDIN" },
                { icon: <FaInstagram />, label: "INSTAGRAM" },
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex justify-between border-b border-gray-700 pb-2 hover:text-white cursor-pointer transition"
                >
                  <span className="flex items-center gap-2">
                    {item.icon} {item.label}
                  </span>
                  <span>↗</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 text-gray-400 text-sm space-y-2">
          <p>ALL RIGHTS RESERVED TO BOND & VALE 2025</p>
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-4 text-xs text-gray-500">
            <p>©2024 BOND & VALE ALL RIGHTS RESERVED</p>
            <div className="flex gap-4 mt-2 md:mt-0 flex-wrap justify-center md:justify-start">
              <a href="#" className="hover:text-white">
                TERMS OF USE
              </a>
              <a href="#" className="hover:text-white">
                PRIVACY POLICY
              </a>
              <a href="#" className="hover:text-white">
                BACK TO TOP
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
