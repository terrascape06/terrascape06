"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Une rigueur absolue. Notre terrasse est prête à 8h00 pétantes.",
    author: "Le Majestic Plage",
  },
  {
    text: "Plus besoin de gérer le personnel de ménage, Terrascape s'occupe de tout.",
    author: "La Môme",
  },
  {
    text: "Intervention invisible et résultat impeccable.",
    author: "Baoli",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000); // Slightly slower to let users read the "editorial" style

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-[#F9F8F6] relative overflow-hidden">
      {/* 1. Giant Watermark Quote */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <span className="text-9xl md:text-[20rem] font-serif text-terra-brown/5 leading-none">
          &rdquo;
        </span>
      </div>

      <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
        
        {/* Stars */}
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="flex justify-center gap-1 mb-12"
        >
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-terra-gold fill-current" />
          ))}
        </motion.div>

        {/* Carousel */}
        <div className="min-h-[300px] flex items-center justify-center relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              {/* The Quote */}
              <h3 className="text-2xl md:text-4xl font-serif font-light italic text-terra-brown leading-relaxed mb-8">
                &ldquo; {testimonials[index].text} &rdquo;
              </h3>

              {/* Decorative Line */}
              <div className="w-12 h-[1px] bg-terra-gold mb-8"></div>

              {/* The Author */}
              <p className="text-terra-gold text-sm md:text-base font-bold tracking-[0.2em] uppercase font-montserrat">
                {testimonials[index].author}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
