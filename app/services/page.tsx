"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Armchair, 
  Sparkles, 
  PartyPopper, 
  ArrowRight,
  ClipboardCheck,
  CalendarClock,
  UserCheck,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Analyse",
    description: "Étude de vos contraintes : horaires, surface, affluence.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Organisation",
    description: "Passages sur-mesure selon votre rythme et vos pics d'activité.",
    icon: CalendarClock,
  },
  {
    number: "03",
    title: "Intervention",
    description: "Discrète : tôt le matin, entre deux services ou après fermeture.",
    icon: UserCheck,
  },
  {
    number: "04",
    title: "Contrôle & Suivi",
    description: "Garantie : terrasse prête à l'heure, espace propre, image irréprochable.",
    icon: ShieldCheck,
  },
];

const services = [
  {
    title: "Gestion de Terrasses",
    description: "Installation du mobilier • Rangement après service • Mise en place ouverture/fermeture.",
    details: "Un service clé en main pour garantir que votre terrasse est toujours prête à accueillir vos clients.",
    
    image: "https://plus.unsplash.com/premium_photo-1724754742948-ba73240d9ab9?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Nettoyage d'Établissements",
    description: "Restaurants, bars & clubs • Hygiène des espaces clients • Nettoyage avant/après service.",
    details: "Nettoyage approfondi des sols, vitres et surfaces pour une hygiène irréprochable.",
    
    image: "https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Plages Privées & Événementiel",
    description: "Mise en place transats • Transformation pour soirées DJ • Gestion Avant/Après événement.",
    details: "Flexibilité totale pour accompagner vos événements et saisons.",
    
    image: "https://images.unsplash.com/photo-1628551019360-66eddc7f61ab?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
];

const benefits = [
  "Gain de temps précieux",
  "Moins de stress opérationnel",
  "Personnel en moins à gérer",
  "Image haut de gamme garantie"
];

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <main className="min-h-screen bg-terra-white">
      <Header />
      
      {/* 1. Immersive Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1554149082-75d460afced3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Atmosphère luxe en soirée"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-terra-white"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-6xl font-bold font-montserrat uppercase tracking-wider text-white mb-6"
          >
            Nos Solutions & Méthodologie
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="h-1 bg-terra-gold mx-auto rounded-full"
          />
        </div>
      </section>

      {/* 2. Vertical Timeline Methodology */}
      <section ref={containerRef} className="py-16 md:py-24 px-6 relative overflow-hidden bg-terra-white">
        <div className="container mx-auto relative z-10 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-terra-brown mb-4 font-montserrat">
              NOTRE MÉTHODE EN 4 ÉTAPES
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Une rigueur absolue pour une tranquillité d'esprit totale.
            </p>
          </motion.div>

          <div className="relative">
            {/* Central Vertical Line (Desktop) */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px] bg-terra-gold/20 hidden md:block">
              <motion.div 
                style={{ height: lineHeight }} 
                className="w-full bg-terra-gold origin-top"
              />
            </div>
            
            {/* Mobile Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-terra-gold/20 md:hidden"></div>

            <div className="space-y-12 md:space-y-24">
              {steps.map((step, index) => {
                const isEven = index % 2 === 1;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`flex flex-col md:flex-row items-center relative ${isEven ? 'md:flex-row-reverse' : ''}`}
                  >
                    {/* Content */}
                    <div className="w-full md:w-5/12 pl-20 md:pl-0 md:text-right md:pr-12 md:group-odd:text-left md:group-odd:pl-12">
                       <div className={`p-8 bg-white rounded-2xl shadow-xl border border-terra-sand/30 hover:border-terra-gold transition-colors duration-300 relative ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                          <div className={`text-4xl font-bold text-terra-gold/20 absolute top-4 ${isEven ? 'right-6 md:left-6' : 'right-6'} font-montserrat`}>
                            {step.number}
                          </div>
                          <h3 className="text-xl font-bold text-terra-brown mb-3 font-montserrat relative z-10">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm relative z-10">
                            {step.description}
                          </p>
                       </div>
                    </div>

                    {/* Central Node */}
                    <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-terra-gold border-4 border-terra-white z-20 shadow-md flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full border border-terra-gold/30 absolute animate-pulse"></div>
                    </div>

                    {/* Empty Space for alignment */}
                    <div className="w-full md:w-5/12 hidden md:block"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Services (Zig-Zag Layout) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-3xl md:text-5xl font-bold text-center text-terra-brown mb-20 font-montserrat"
          >
            NOS SERVICES DÉTAILLÉS
          </motion.h2>

          <div className="space-y-24">
            {services.map((service, index) => {
              const isEven = index % 2 === 1;
              
              return (
                <div key={index} className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
                  {/* Image Block */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="w-full lg:w-1/2 relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl group"
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-terra-brown/60 to-transparent opacity-60"></div>
                  </motion.div>

                  {/* Content Block */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full lg:w-1/2"
                  >
                    
                    <h3 className="text-3xl md:text-4xl font-bold text-terra-brown mb-6 font-montserrat">
                      {service.title}
                    </h3>
                    <p className="text-lg text-terra-brown/80 font-medium mb-4 italic border-l-4 border-terra-gold pl-4">
                      {service.description}
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                       {service.details}
                    </p>
                    
                    {/* Optional: Add tailored benefits per service here if dynamic, otherwise generic list below */}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Glassmorphism "Why Choose Us" */}
      <section className="py-16 md:py-24 relative overflow-hidden flex items-center justify-center">
         {/* Background Texture */}
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 z-0"></div>
         <div className="absolute inset-0 bg-gradient-to-br from-terra-sand/20 to-terra-white z-0"></div>

         <div className="container mx-auto px-6 relative z-10 max-w-6xl">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="backdrop-blur-md bg-white/40 border border-white/50 rounded-3xl p-10 md:p-16 shadow-2xl ring-1 ring-terra-gold/20"
           >
             <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-1/2 text-center lg:text-left">
                   <h2 className="text-3xl md:text-5xl font-bold text-terra-brown mb-6 font-montserrat">
                     L'EXCELLENCE COMME STANDARD.
                   </h2>
                   <p className="text-xl text-gray-700 mb-8">
                     Nous ne faisons pas que nettoyer ou installer. Nous préservons l'image de marque de votre établissement.
                   </p>
                   <a
                    href="/contact"
                    className="inline-flex items-center gap-3 bg-terra-brown text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-terra-gold transition-colors duration-300 shadow-xl"
                  >
                    Demander un Devis
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>

                <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-4 bg-white/60 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="bg-terra-gold/20 p-2 rounded-full">
                        <CheckCircle2 className="w-5 h-5 text-terra-gold" />
                      </div>
                      <span className="font-semibold text-terra-brown">{benefit}</span>
                    </div>
                  ))}
                </div>
             </div>
           </motion.div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
