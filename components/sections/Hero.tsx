"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/image-parasol-plage.jpg"
          alt="page de la cote d'azur ensoleillée"
          layout="fill"
          objectFit="cover"
          priority
          className="select-none"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32 pt-40">
        <div className="max-w-4xl">
          {/* Main Tagline */}
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight font-montserrat uppercase"
          >
            L'EXPERT LOGISTIQUE & NETTOYAGE DE TERRASSES
          </motion.h1>

          {/* Sub-text: Context & Hook */}
          <div className="mb-8 space-y-4">
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl md:text-2xl text-terra-sand font-medium"
            >
              Spécialiste pour l'hivernage, le stockage de mobilier et la remise en état . Intervention de Monaco à Cannes.
            </motion.h2>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-lg md:text-xl text-terra-gold italic font-medium"
            >
              "Concentrez-vous sur vos clients, TERRASCAPE s'occupe du reste."
            </motion.p>
          </div>

          {/* Key Features (Badges) */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-wrap gap-3 mb-8"
          >
            <span className="flex items-center gap-2 text-white/90 font-medium text-sm md:text-base bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
              <span className="text-terra-gold">•</span> Intervention 7j/7
            </span>
            <span className="flex items-center gap-2 text-white/90 font-medium text-sm md:text-base bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
              <span className="text-terra-gold">•</span> Matin, Journée & Nuit
            </span>
            <span className="flex items-center gap-2 text-white/90 font-medium text-sm md:text-base bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
              <span className="text-terra-gold">•</span> Service Discret
            </span>
          </motion.div>

          {/* CTA Button */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <a
              href="/contact"
              className="inline-block bg-terra-gold text-white px-10 py-4 rounded-full hover:bg-terra-brown transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Devis Professionnel Gratuit
            </a>
          </motion.div>

          {/* Trust Badge / Location Info */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            className="flex items-center gap-2 text-white/80"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <p className="text-sm md:text-base font-medium">
              Nice • Cannes • Monaco • Antibes • Saint-Jean-Cap-Ferrat
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

