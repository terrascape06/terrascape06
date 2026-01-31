"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, PartyPopper, Calendar, Hammer, Sun, Moon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function EventsContent() {
  return (
    <main className="min-h-screen bg-terra-white">
      <Header />
      
      {/* 1. Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1628551019360-66eddc7f61ab?q=80&w=2340&auto=format&fit=crop"
            alt="Plages Privées & Events"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-terra-white"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-7xl font-bold font-montserrat uppercase tracking-wider text-white mb-6 leading-tight"
          >
            Plages Privées & Événementiel
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-terra-gold text-xl md:text-2xl font-light tracking-widest uppercase mb-8"
          >
            Saison estivale – Événements – Soirées DJ
          </motion.p>
        </div>
      </section>

      {/* 2. Objectif Section */}
      <section className="py-20 px-6 bg-white relative">
        <div className="container mx-auto max-w-4xl text-center">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="relative z-10"
           >
              <div className="w-20 h-1 bg-terra-gold mx-auto mb-10 rounded-full"></div>
              <h2 className="text-2xl md:text-4xl font-medium text-terra-brown leading-relaxed font-montserrat">
                "Offrir une plage parfaitement organisée de l’ouverture jusqu’à la fermeture, <br className="hidden md:block"/> <span className="text-terra-gold font-bold">y compris lors d’événements festifs.</span>"
              </h2>
           </motion.div>
        </div>
      </section>

      {/* 3. Mode de Fonctionnement (Workflow) - 4 Columns */}
      <section className="py-20 px-6 bg-terra-white relative overflow-hidden">
        <div className="container mx-auto max-w-7xl">
           <div className="text-center mb-16">
             <h3 className="text-3xl md:text-5xl font-bold text-terra-brown font-montserrat uppercase tracking-wider">
               Logistique Plage & Soirions
             </h3>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Step 1 */}
              <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.1 }}
                 className="bg-white p-6 rounded-2xl shadow-xl border-t-4 border-terra-gold relative group hover:-translate-y-2 transition-transform duration-300"
              >
                 <div className="mt-4 mb-4 flex justify-center">
                    <div className="p-3 bg-terra-gold/10 rounded-full">
                       <Sun className="w-6 h-6 text-terra-gold" />
                    </div>
                 </div>
                 <h4 className="text-xl font-bold text-terra-brown text-center mb-4 uppercase">Avant Ouverture</h4>
                 <ul className="space-y-2 text-gray-600">
                    <li className="flex gap-2 text-sm"><span className="text-terra-gold">•</span> Mise en place transats</li>
                    <li className="flex gap-2 text-sm"><span className="text-terra-gold">•</span> Alignement parasols</li>
                    <li className="flex gap-2 text-sm"><span className="text-terra-gold">•</span> Installation tables & VIP</li>
                    <li className="flex gap-2 text-sm"><span className="text-terra-gold">•</span> Vérification propreté sable</li>
                 </ul>
              </motion.div>

              {/* Step 2 */}
              <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
                 className="bg-white p-6 rounded-2xl shadow-xl border-t-4 border-terra-brown relative group hover:-translate-y-2 transition-transform duration-300"
              >
                 <div className="mt-4 mb-4 flex justify-center">
                    <div className="p-3 bg-terra-brown/10 rounded-full">
                       <Sun className="w-6 h-6 text-terra-brown" />
                    </div>
                 </div>
                 <h4 className="text-xl font-bold text-terra-brown text-center mb-4 uppercase">Journée</h4>
                 <ul className="space-y-2 text-gray-600">
                    <li className="flex gap-2 text-sm"><span className="text-terra-brown">•</span> Réajustement transats</li>
                    <li className="flex gap-2 text-sm"><span className="text-terra-brown">•</span> Remise en ordre continue</li>
                    <li className="flex gap-2 text-sm"><span className="text-terra-brown">•</span> Intervention discrète</li>
                    <li className="flex gap-2 text-sm"><span className="text-terra-brown">•</span> Soutien logistique</li>
                 </ul>
              </motion.div>

              {/* Step 3 */}
              <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.3 }}
                 className="bg-white p-6 rounded-2xl shadow-xl border-t-4 border-terra-gold relative group hover:-translate-y-2 transition-transform duration-300"
              >
                 <div className="mt-4 mb-4 flex justify-center">
                    <div className="p-3 bg-terra-gold/10 rounded-full">
                       <Moon className="w-6 h-6 text-terra-gold" />
                    </div>
                 </div>
                 <h4 className="text-xl font-bold text-terra-brown text-center mb-4 uppercase">Après Fermeture</h4>
                 <ul className="space-y-2 text-gray-600">
                    <li className="flex gap-2 text-sm"><span className="text-terra-gold">•</span> Rangement complet</li>
                    <li className="flex gap-2 text-sm"><span className="text-terra-gold">•</span> Nettoyage plage</li>
                    <li className="flex gap-2 text-sm"><span className="text-terra-gold">•</span> Sécurisation matériel</li>
                    <li className="flex gap-2 text-sm"><span className="text-terra-gold">•</span> Préparation lendemain</li>
                 </ul>
              </motion.div>

              {/* Step 4 */}
              <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.4 }}
                 className="bg-terra-brown text-white p-6 rounded-2xl shadow-xl border-t-4 border-terra-gold relative group hover:-translate-y-2 transition-transform duration-300"
              >
                 <div className="mt-4 mb-4 flex justify-center">
                    <div className="p-3 bg-white/10 rounded-full">
                       <PartyPopper className="w-6 h-6 text-terra-gold" />
                    </div>
                 </div>
                 <h4 className="text-xl font-bold text-terra-gold text-center mb-4 uppercase">Soirées / Events</h4>
                 <ul className="space-y-2 text-white/80">
                    <li className="flex gap-2 text-sm"><span className="text-terra-gold">•</span> Transformation espace</li>
                    <li className="flex gap-2 text-sm"><span className="text-terra-gold">•</span> Déplacement mobilier</li>
                    <li className="flex gap-2 text-sm"><span className="text-terra-gold">•</span> Installation tables hautes</li>
                    <li className="flex gap-2 text-sm"><span className="text-terra-gold">•</span> Remise configuration plage</li>
                 </ul>
              </motion.div>
           </div>
        </div>
      </section>

      {/* 4. Technical Section */}
      <section className="py-20 px-6 bg-white relative">
         <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               {/* Left: Matériel */}
               <motion.div 
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="bg-terra-sand/10 p-10 rounded-3xl"
               >
                  <h3 className="text-2xl font-bold text-terra-brown mb-8 flex items-center gap-3 font-montserrat">
                    <Hammer className="text-terra-gold h-8 w-8" />
                    Matériel Spécifique
                  </h3>
                  <ul className="space-y-4">
                     {[
                       "Chariots plage renforcés",
                       "Équipements sable & terrasse",
                       "Produits résistants milieu marin",
                       "Éclairage mobile",
                       "Matériel manutention"
                     ].map((item, i) => (
                       <li key={i} className="flex items-center gap-4 text-gray-700 font-medium">
                         <div className="h-2 w-2 bg-terra-gold rounded-full"></div>
                         {item}
                       </li>
                     ))}
                  </ul>
               </motion.div>

               {/* Right: Mode de Travail */}
               <motion.div 
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="bg-terra-sand/10 p-10 rounded-3xl"
               >
                  <h3 className="text-2xl font-bold text-terra-brown mb-8 flex items-center gap-3 font-montserrat">
                    <Calendar className="text-terra-gold h-8 w-8" />
                    Expertise Saisonnnière
                  </h3>
                  <ul className="space-y-4">
                     {[
                       "Personnel habitué milieu plage",
                       "Travail rapide et efficace",
                       "Adaptation météo & affluence",
                       "Respect image haut de gamme",
                       "Grande discrétion"
                     ].map((item, i) => (
                       <li key={i} className="flex items-center gap-4 text-gray-700 font-medium">
                         <div className="h-2 w-2 bg-terra-brown rounded-full"></div>
                         {item}
                       </li>
                     ))}
                  </ul>
               </motion.div>
            </div>
         </div>
      </section>

      {/* 5. Promise / Result */}
      <section className="py-24 px-6 bg-terra-brown relative overflow-hidden text-center text-white">
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold font-montserrat mb-12">VOTRE PARTENAIRE ESTIVAL</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              "Plage toujours impeccable",
              "Installation rapide",
              "Organisation fluide",
              "Client final satisfait"
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-4"
              >
                <CheckCircle className="w-12 h-12 text-terra-gold" />
                <span className="text-lg font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>

          <Link
            href="/contact?subject=events"
            className="inline-flex items-center gap-3 bg-terra-gold text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-terra-brown transition-all duration-300 shadow-xl"
          >
             Planifier votre saison
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
