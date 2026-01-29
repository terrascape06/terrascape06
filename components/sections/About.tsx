"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  const checkmarks = [
    "Intervention 7j/7",
    "Discrétion Assurée",
    "Équipes Formées"
  ];

  return (
    <section id="apropos" className="py-24 bg-terra-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-4">
              <span className="text-terra-gold font-bold tracking-widest uppercase text-sm">
                NOTRE ADN
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-terra-brown font-montserrat mb-8 leading-tight">
              Plus qu'un service, un partenaire de l'ombre.
            </h2>

            <p className="text-terra-brown/80 text-lg mb-6 leading-relaxed">
              Terrascape est né d'une exigence : offrir aux établissements de la Côte d'Azur une logistique irréprochable.
            </p>
            <p className="text-terra-brown/80 text-lg mb-8 leading-relaxed">
              Nous sommes les mains invisibles qui rendent vos terrasses parfaites, chaque jour.
            </p>

             {/* Trust Values Checkmarks */}
             <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              {checkmarks.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-terra-gold/10 flex items-center justify-center">
                    <Check className="w-5 h-5 text-terra-gold" />
                  </div>
                  <span className="font-semibold text-terra-brown text-sm uppercase tracking-wide">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link 
              href="/about"
              className="inline-flex items-center gap-2 text-terra-brown border-b-2 border-terra-brown hover:text-terra-gold hover:border-terra-gold transition-colors pb-1 font-semibold group"
            >
              Découvrir notre histoire
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Right Column: Visual Authority */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            {/* Gold Frame Decoration */}
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-terra-gold rounded-xl z-0 hidden md:block" />

            {/* Main Image */}
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl h-[400px] md:h-[500px]">
              <Image 
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop"
                alt="Service professionnel en terrasse"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              {/* Optional overlay for better integration */}
              <div className="absolute inset-0 bg-terra-brown/10 hover:bg-transparent transition-colors duration-500" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
