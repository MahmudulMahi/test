"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React from "react";

interface HeroProps {
  expanded: boolean;
  setExpanded: (v: boolean) => void;
}

const Hero: React.FC<HeroProps> = ({ expanded, setExpanded }) => {
  return (
    <div
      className="relative h-screen cursor-pointer overflow-hidden"
      onClick={() => setExpanded(true)}
    >
      {/* Background transition */}
      <AnimatePresence mode="wait">
        {!expanded ? (
          <motion.div
            key="first"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src="/assets/Rectangle 34624798.png"
              alt="First hero"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-[#2a2a2a]">
              <h1 className="text-4xl md:text-6xl font-serif leading-tight text-center">
                RESULTS YOU <br /> CAN SEE PR <br /> YOU CAN TRUST.
              </h1>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="second"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src="/assets/Rectangle 34624798.png"
              alt="Second hero"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
              <h1 className="text-4xl md:text-6xl font-serif leading-tight">
                RESULTS YOU <br /> CAN SEE PR <br /> YOU CAN TRUST.
              </h1>
              <p className="mt-4 max-w-xl text-sm md:text-base text-gray-300">
                OUR SET OF EXPERIENCES IS BASED ON TRUST, SELL AND A COMMITMENT
                TO GREATNESS
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="mt-8 px-8 py-3 bg-[#1c1c1c]/90 text-white rounded-full text-sm hover:bg-[#000] transition-all duration-300"
              >
                Explore Our Services →
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;
