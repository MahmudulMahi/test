
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const publications = [
  { id: 1, title: "Newsweek", img: "/grid/1.png" },
  { id: 2, title: "WSJ", img: "/grid/2.png" },
  { id: 3, title: "Entrepreneur", img: "/grid/3.png" },
  { id: 4, title: "Magazine", img: "/grid/4.png" },
  { id: 5, title: "International Business Times", img: "/grid/5.png" },
  { id: 6, title: "Grazia", img: "/grid/6.png" },
  { id: 7, title: "Forbes", img: "/grid/7.png" },
  { id: 8, title: "Forbes Paper", img: "/grid/8.png" },
  { id: 9, title: "Business Insider", img: "/grid/9.png" },
  { id: 10, title: "Table Layout", img: "/grid/10.png" },
];

export default function Publications() {
  const [items, setItems] = useState(publications);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prev) => {
        const newOrder = [...prev];
        
        const i = Math.floor(Math.random() * newOrder.length);
        let j = Math.floor(Math.random() * newOrder.length);
        while (j === i) j = Math.floor(Math.random() * newOrder.length);
    
        [newOrder[i], newOrder[j]] = [newOrder[j], newOrder[i]];
        return newOrder;
      });
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#E0D1BE] text-[#1c1c1c] py-10 px-4  md:px-6 lg:px-24 overflow-hidden">
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-serif leading-tight max-w-4xl mb-12">
        WE'RE PROUD TO BE <br />
        INDUSTRY LEADER, WITH <br />
        FEATURES IN SEVERAL TOP <br />
        PUBLICATIONS
      </h2>

      {/* Animated Grid */}
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8"
      >
        <AnimatePresence>
          {items.map((item) => (
            <motion.div
              layout
              key={item.id}
              className="aspect-square flex items-center justify-center overflow-hidden group cursor-pointer hover:shadow-md border border-[#12262066]"
              transition={{ duration: 2 }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
