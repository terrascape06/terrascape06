"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface IntroLoaderProps {
  children: React.ReactNode;
}

export default function IntroLoader({ children }: IntroLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = "hidden";

    // Set timer to end loading after 2.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "unset";
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

  const text = "TERRASCAPE";
  const letters = text.split("");

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
    exit: {
      y: "-100vh",
      transition: {
        duration: 0.8,
      },
    },
  };

  // Individual letter animation variants
  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-terra-white"
          >
            {/* Letter-by-letter text animation */}
            <motion.div
              className="flex space-x-1 md:space-x-2"
              variants={containerVariants}
            >
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className={`text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat tracking-widest ${
                    letter === "S" ? "text-terra-gold" : "text-terra-brown"
                  }`}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content - always rendered underneath */}
      {children}
    </>
  );
}
