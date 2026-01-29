"use client";

import { motion } from "framer-motion";
import { Armchair, Sparkles, PartyPopper, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Gestion de Terrasses",
    description: "Installation du mobilier • Rangement après service • Mise en place ouverture/fermeture.",
    icon: Armchair,
  },
  {
    title: "Nettoyage d'Établissements",
    description: "Restaurants, bars & clubs • Hygiène des espaces clients • Nettoyage avant/après service.",
    icon: Sparkles,
  },
  {
    title: "Plages Privées & Événementiel",
    description: "Mise en place transats • Transformation pour soirées DJ • Gestion Avant/Après événement.",
    icon: PartyPopper,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-terra-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-terra-brown mb-4 tracking-widest font-montserrat uppercase">
            NOS EXPERTISES
          </h2>
          <div className="w-24 h-1 bg-terra-gold mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mx-4 md:mx-0"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative bg-gradient-to-br from-white to-terra-sand/30 rounded-2xl p-8 pt-12 border border-terra-gold/30 shadow-xl hover:shadow-2xl hover:border-terra-gold transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center"
              >
                {/* Floating Icon Badge */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gradient-to-br from-terra-gold to-terra-brown p-4 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300 ring-4 ring-white">
                  <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>

                <h3 className="text-2xl font-bold text-terra-brown mb-4 font-montserrat mt-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
                  {service.description}
                </p>

                <a
                  href="/services"
                  className="inline-flex items-center text-terra-gold font-semibold uppercase tracking-wide text-sm border-b border-terra-gold pb-1 hover:text-terra-brown hover:border-terra-brown transition-all duration-300 group-hover:translate-x-1"
                >
                  En savoir plus
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
