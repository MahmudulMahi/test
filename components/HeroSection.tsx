"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export default function HeroSection() {
  const [clickStage, setClickStage] = useState(0);

  const handleClick = () => {
    setClickStage((prev) => (prev === 3 ? 0 : prev + 1));
  };

  return (
    <section
      onClick={handleClick}
      className="relative h-[700px] lg:h-[1200px] bg-[#E0D1BE] overflow-hidden flex items-center justify-start cursor-pointer px-4 md:px-6 lg:px-24"
    >
      {/* Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: clickStage === 3 ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0"
        style={{ pointerEvents: "none" }}
      >
        <Image
          src="/assets/Rectangle 34624798.png"
          alt="Background"
          fill
          className="object-cover object-center w-full h-full"
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        initial={{ x: 0, y: 0, opacity: 1 }}
        animate={
          clickStage === 1
            ? { x: 100, opacity: 1 }
            : clickStage === 2
            ? { x: 200, opacity: 1 }
            : clickStage === 3
            ? {
                x: 0,
                y: 0,
                left: 0,
                top: 0,
                position: "absolute",
                opacity: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
                textAlign: "center",
                color: "#fff",
              }
            : { x: 0, opacity: 1 }
        }
        transition={{ duration: 1, ease: "easeInOut" }}
        className="z-30"
      >
        <div className="flex flex-col items-center md:items-start gap-4">
          <h1 className="text-4xl md:text-6xl font-light leading-tight tracking-wide max-w-[700px]">
            RESULTS YOU <br /> CAN SEE PR <br /> YOU CAN TRUST.
          </h1>

          {/* Bottom content */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: clickStage === 3 ? 1 : 0,
              y: clickStage === 3 ? 0 : 100,
            }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center gap-2 justify-center text-center w-full"
          >
            <p className="uppercase font-medium text-2xl max-w-[600px] overflow-hidden">
              OUR SET OF EXPERIENCES IS BASED ON TRUST, SELL AND A COMMITMENT TO
              GREATNESS
            </p>
            <button className="bg-[#122620] text-white text-lg md:text-xl lg:text-2xl px-6 py-4 rounded-full hover:bg-[#10382a] transition flex items-center gap-3 group font-medium mt-4">
              explore our services
              <FiArrowUpRight className="text-2xl transition-transform duration-300 group-hover:rotate-45" />
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Image 1 */}
      <motion.div
        initial={{ scale: 1, opacity: 1 }}
        animate={
          clickStage === 1
            ? { scale: 1.2, opacity: 1, zIndex: 20 }
            : clickStage === 2
            ? { scale: 1.8, opacity: 1 }
            : clickStage === 3
            ? { scale: 4, opacity: 0 }
            : { scale: 1, opacity: 1 }
        }
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute top-0 right-6 md:right-96 pt-52 z-20 rounded-md overflow-hidden"
      >
        <Image
          src="/assets/Rectangle 34624798.png"
          alt="PR material"
          width={500}
          height={600}
        />
      </motion.div>

      {/* Image 2 */}
      <motion.div
        animate={{
          opacity: clickStage === 3 ? 0 : 1,
          y: clickStage >= 1 ? 10 : 0,
        }}
        transition={{ duration: 0.8 }}
        className="absolute bottom-60 left-0 md:left-96 shadow-md rounded-md overflow-hidden z-10"
      >
        <Image
          src="/assets/Rectangle 34624799.png"
          alt="Person photo"
          width={350}
          height={300}
          className="hidden md:block"
        />
      </motion.div>

      {/* Image 3 */}
      <motion.div
        animate={{
          opacity: clickStage === 3 ? 0 : 1,
          y: clickStage >= 1 ? 10 : 0,
        }}
        transition={{ duration: 0.8 }}
        className="absolute bottom-72 right-60 w-64 md:w-52 shadow-lg rounded-md overflow-hidden z-30"
      >
        <Image
          src="/assets/Rectangle 34624800.png"
          alt="Workspace"
          width={400}
          height={400}
          className="hidden lg:block"
        />
      </motion.div>

      {/* Rotating Scroller */}
      <motion.div
        animate={{
          opacity: clickStage === 3 ? 0 : 1,
          rotate: 360,
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute right-24 bottom-[600px] w-64 md:w-52 rounded-md overflow-hidden"
      >
        <Image
          src="/assets/Scroller.png"
          alt="Spinner"
          width={400}
          height={400}
          className="object-cover w-full h-full"
        />
      </motion.div>
    </section>
  );
}
