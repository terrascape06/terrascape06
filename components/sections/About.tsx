"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

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
                QUI SOMMES-NOUS ?
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-terra-brown font-montserrat mb-8 leading-tight">
              Le Partenaire Logistique des Établissements de la Côte d&apos;Azur.
            </h2>

            <p className="text-terra-brown/80 text-lg mb-6 leading-relaxed">
              Spécialistes de l&apos;aménagement et de l&apos;entretien, nous comprenons les exigences 
              du monde de la nuit et de la restauration.
            </p>
            <p className="text-terra-brown/80 text-lg mb-10 leading-relaxed">
              De la mise en place matinale au rangement nocturne, Terrascape assure une gestion 
              impeccable de vos extérieurs, permettant à votre équipe de se concentrer sur l&apos;essentiel : 
              le service client.
            </p>

            {/* Trust Values Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
              <img 
                src="https://i.pinimg.com/736x/41/0e/d5/410ed579e4861fe327e1f505105824a9.jpg"
                alt="Terrasse de restaurant de luxe"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
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
