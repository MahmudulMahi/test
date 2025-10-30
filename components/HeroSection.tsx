"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [clickStage, setClickStage] = useState(0);

  // 0 = normal, 1 = zoom medium, 2 = zoom large, 3 = full background
  const handleClick = () => {
    setClickStage((prev) => (prev === 3 ? 0 : prev + 1));
  };

  return (
    <section
      onClick={handleClick}
      className="relative h-[1200px] bg-[#E0D1BE] overflow-hidden flex items-center justify-start cursor-pointer"
    >
      {/* Background Image (visible at stage 3) */}
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

      {/* Left Text */}
      {/* <motion.div
        initial={{ x: 0, y: 0, opacity: 1 }}
        animate={
          clickStage === 3
            ? {
                x: "50%",
                y: "-50%",
                left: "50%",
                top: "50%",
                position: "absolute",
                opacity: 1,
                textAlign: "center",
                color: "#fff",
              }
            : {
                x: 0,
                y: 0,
                left: "0%",
                top: "auto",
                position: "relative",
                opacity: 1,
                color: "#1a2a1f",
              }
        }
        transition={{ duration: 1, ease: "easeInOut" }}
        className="text-center md:text-left mb-10 md:mb-0 pt-72 pl-16 z-30"
      >
        <h1 className="text-4xl md:text-6xl font-light leading-tight tracking-wide">
          RESULTS YOU <br /> CAN SEE PR <br /> YOU CAN TRUST.
        </h1>
      </motion.div> */}
<motion.div
  initial={{ x: 0, y: 0, opacity: 1 }}
  animate={
    clickStage === 3
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
      : {
          x: 0,
          y: 0,
          left: "0%",
          top: "auto",
          position: "relative",
          opacity: 1,
          textAlign: "left",
          color: "#1a2a1f",
        }
  }
  transition={{ duration: 1, ease: "easeInOut" }}
  className="z-30"
>
  <div className="flex flex-col items-center md:items-start gap-4">
    <h1 className="text-4xl md:text-6xl font-light leading-tight tracking-wide w-[700px] pl-11">
      RESULTS YOU <br /> CAN SEE PR <br /> YOU CAN TRUST.
    </h1>

    {/* Fade in subtitle & button only at stage 3 */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: clickStage === 3 ? 1 : 0, y: clickStage === 3 ? 0 : 10 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="flex flex-col items-center  gap-2  justify-center text-center w-full"
    >
      <p>set our business</p>
      <button className="bg-[#122620] text-white px-4 py-2 rounded-full text-xs md:text-sm hover:bg-[#10382a] transition">
        explore our services
      </button>
    </motion.div>
  </div>
</motion.div>


      {/* Top Image */}
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
        className="absolute top-0 right-6 md:right-96 pt-52 z-20 rounded-md overflow-hidden "
      >
        <Image
          src="/assets/Rectangle 34624798.png"
          alt="PR material"
          width={500}
          height={600}
        />
      </motion.div>

      {/* Middle Image */}
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
        />
      </motion.div>

      {/* Bottom Image */}
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
        />
      </motion.div>

      {/* Circular Spinner */}
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
