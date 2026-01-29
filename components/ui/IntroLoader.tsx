"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function IntroLoader({ children }: { children: React.ReactNode }) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
        document.body.style.overflow = "unset";
        setShowContent(true);
    }, 2300); // Wait for full animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {!showContent && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-terra-sand"
            exit={{ y: "-100vh", transition: { duration: 0.8, ease: "easeInOut" } }}
          >
            <div className="flex items-center font-montserrat font-bold tracking-widest relative">

              {/* LEFT: TERRA + Line */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: -10 }} // Move UP
                transition={{ delay: 0.8, duration: 0.8, ease: "anticipate" }}
                className="flex flex-col justify-end items-end mr-1" // Added margin for spacing
              >
                <div className="flex overflow-hidden">
                  {["T", "E", "R", "R", "A"].map((letter, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        delay: i * 0.05, 
                        duration: 0.4,
                        ease: "easeOut" 
                      }}
                      className="text-terra-brown text-2xl md:text-5xl leading-none inline-block font-montserrat font-bold tracking-widest"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </div>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.6, duration: 0.6, ease: "easeOut" }}
                  style={{ originX: 1 }} // Grows from Center outwards
                  className="w-full h-[3px] bg-terra-brown mt-[-2px]"
                />
              </motion.div>

              {/* CENTER: S */}
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1.5 }}
                transition={{
                    opacity: { delay: 0.25, duration: 0.4 }, // Appears after TERRA
                    scale: { delay: 0.8, duration: 0.8, ease: "anticipate" }
                }}
                className="text-terra-gold text-3xl md:text-6xl mx-2 pb-2 leading-none font-montserrat font-bold"
              >
                S
              </motion.span>

              {/* RIGHT: Line + CAPE */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: 10 }} // Move DOWN
                transition={{ delay: 0.8, duration: 0.8, ease: "anticipate" }}
                className="flex flex-col justify-start items-start ml-1" // Added margin for spacing
              >
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.6, duration: 0.6, ease: "easeOut" }}
                  style={{ originX: 0 }} // Grows from Center outwards
                  className="w-full h-[3px] bg-terra-brown mb-[-2px]"
                />
                <div className="flex overflow-hidden">
                  {["C", "A", "P", "E"].map((letter, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        delay: 0.3 + (i * 0.05), // Starts after S (approx)
                        duration: 0.4,
                        ease: "easeOut" 
                      }}
                      className="text-terra-brown text-2xl md:text-5xl leading-none inline-block font-montserrat font-bold tracking-widest"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}
