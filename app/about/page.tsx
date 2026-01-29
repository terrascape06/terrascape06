"use client";

import { motion } from "framer-motion";
import { 
  Clock, 
  EyeOff, 
  Gem, 
  ArrowRight,
  MapPin
} from "lucide-react";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  const values = [
    {
      title: "Fiabilité",
      description: "Nous sommes là, qu'il pleuve, qu'il vente, ou qu'il soit 5h du matin.",
      icon: Clock,
    },
    {
      title: "Discrétion",
      description: "Intervention silencieuse, tenue impeccable. Vos clients ne nous voient pas, ils voient le résultat.",
      icon: EyeOff,
    },
    {
      title: "Exigence",
      description: "Le souci du détail est notre standard. Rien n'est laissé au hasard.",
      icon: Gem,
    },
  ];

  const cities = ["Nice", "Cannes", "Antibes", "Juan-les-Pins", "Monaco"];

  return (
    <main className="min-h-screen bg-terra-white">
      <Header />
      
      {/* 1. Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1694725330422-64ed85b9f26e?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Côte d'Azur Coastline"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-bold font-montserrat uppercase tracking-wider text-white mb-4"
          >
            L'EXCELLENCE AU SERVICE DE LA RIVIERA.
          </motion.h1>
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.8, delay: 0.3 }}
             className="text-white/90 text-lg md:text-xl font-medium tracking-wide"
          >
            Nice • Cannes • Antibes • Monaco
          </motion.div>
        </div>
      </section>

      {/* 2. Mission Section (Storytelling) */}
      <section className="py-16 md:py-24 px-6">
        <div className="container mx-auto max-w-3xl text-center">
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
           >
             <span className="text-terra-gold font-bold tracking-widest uppercase text-sm mb-4 block">
                NOTRE MISSION
             </span>
             <h2 className="text-3xl md:text-4xl font-bold text-terra-brown mb-8 font-montserrat">
               Préparer la scène pour votre succès.
             </h2>
             <p className="text-xl text-gray-700 leading-relaxed mb-6">
               Terrascape est né d'un constat simple : la logistique des extérieurs est un casse-tête pour les restaurateurs exigeants. 
               Entre la gestion du personnel, le service client et la qualité de la cuisine, l'entretien de la terrasse passe souvent au second plan.
             </p>
             <p className="text-xl text-terra-brown font-medium italic leading-relaxed border-l-4 border-terra-gold pl-6 py-2 mx-auto inline-block text-left">
               "Votre métier est d'accueillir. Le nôtre est de préparer la scène."
             </p>
           </motion.div>
        </div>
      </section>

      {/* 3. Our Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-terra-white mb-6 group-hover:scale-110 transition-transform duration-300 border border-terra-gold/20">
                    <Icon className="w-10 h-10 text-terra-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-terra-brown mb-4 font-montserrat">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Zone d'Intervention */}
      <section className="py-16 md:py-24 bg-terra-brown text-white relative overflow-hidden">
        {/* Abstract Pattern */}
        <div className="absolute inset-0 opacity-5">
           <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0 100 L100 0 L100 100 Z" fill="white" />
           </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            
            {/* Left Content */}
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-8 font-montserrat">
                ZONE D'INTERVENTION
              </h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                Nos équipes mobiles sillonnent la côte chaque jour pour garantir la propreté et la mise en place de vos établissements.
                Une réactivité totale, de Monaco à Cannes.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {cities.map((city, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-terra-gold" />
                    <span className="font-medium text-lg">{city}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Real Image Visual */}
            <motion.div 
              className="md:w-1/2 relative h-[300px] md:h-[400px]"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Cadre décoratif doré en arrière-plan (Décalé) */}
              <div className="absolute top-4 right-4 w-full h-full border-2 border-terra-gold/30 rounded-2xl z-0"></div>

              {/* Conteneur de l'image */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl z-10 border border-terra-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1544196036-3f1e110d9af5?q=80&w=2833&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Vue aérienne de la Côte d'Azur"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                
                {/* Petit dégradé pour l'ambiance */}
                <div className="absolute inset-0 bg-gradient-to-t from-terra-brown/60 to-transparent"></div>

                {/* Badge Flottant "Riviera" */}
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full shadow-lg border border-terra-gold/20">
                  <span className="text-terra-brown font-bold text-sm tracking-widest uppercase">Riviera Française</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. CTA Footer Overlay */}
      <section className="bg-terra-sand/30 py-20 text-center">
         <div className="container mx-auto px-6">
           <h2 className="text-3xl font-bold text-terra-brown mb-8 font-montserrat">
             Prêt à travailler avec nous ?
           </h2>
           <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-terra-brown text-white px-8 py-4 rounded-full font-bold hover:bg-terra-gold transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Contactez-nous
              <ArrowRight className="w-5 h-5" />
            </a>
         </div>
      </section>

      <Footer />
    </main>
  );
}
