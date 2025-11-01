"use client";


import NextHeroWithFramerMotion from "@/components/HeroSection";
import HeroSection from "@/components/HeroSection";
import Publications from "@/components/proud";



export default function Home() {
  // const [expanded, setExpanded] = useState(false);

  return (
    <div className=" ">
  
      {/* <Hero expanded={expanded} setExpanded={setExpanded} /> */}
      {/* <HeroSection></HeroSection> */}
         <NextHeroWithFramerMotion></NextHeroWithFramerMotion>
      <Publications></Publications>
   
    </div>
  );
}
