"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    establishment: "",
    phone: "",
    serviceType: "installation",
    message: ""
  });

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Intervenez-vous le dimanche ?",
      answer: "Oui, nous assurons un service 7j/7, y compris les jours fériés pour les établissements saisonniers. Nous savons que votre activité ne s'arrête pas."
    },
    {
      question: "Quelle est votre zone d'intervention ?",
      answer: "Notre zone principale s'étend de Monaco à Cannes, incluant Antibes, Juan-les-Pins, Nice, Villefranche-sur-Mer et Saint-Jean-Cap-Ferrat."
    },
    {
      question: "Faites-vous uniquement le nettoyage ?",
      answer: "Non, nous proposons une gestion complète : mise en place matinale (tables, chaises, parasols), rangement nocturne, nettoyage haute-pression, et même la décoration événementielle."
    }
  ];

  return (
    <main className="min-h-screen bg-terra-white">
      <Header />
      
      {/* 1. Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1621293954908-907159247fc8?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Réception établissement de luxe"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-bold font-montserrat uppercase tracking-wider text-white mb-4"
          >
            PARLONS DE VOTRE PROJET.
          </motion.h1>
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.8, delay: 0.3 }}
             className="text-white/90 text-lg md:text-xl font-medium tracking-wide"
          >
            Une question ? Un devis ? Notre équipe est à votre écoute.
          </motion.div>
        </div>
      </section>

      {/* 2. Main Content */}
      <section className="py-16 md:py-24 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left Column: Contact Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
               <h2 className="text-3xl font-bold text-terra-brown mb-8 font-montserrat">
                Nos Coordonnées
              </h2>
              <div className="space-y-8 mb-12">
                <a href="tel:+33766025027" className="flex items-center group">
                  <div className="w-14 h-14 bg-terra-gold/10 rounded-full flex items-center justify-center mr-6 group-hover:bg-terra-gold transition-colors duration-300">
                    <Phone className="w-6 h-6 text-terra-gold group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-terra-brown/60 text-sm uppercase tracking-widest mb-1">Téléphone</p>
                    <p className="text-2xl font-bold text-terra-brown group-hover:text-terra-gold transition-colors">
                      +33 7 66 02 50 27
                    </p>
                  </div>
                </a>

                <a href="mailto:contact@terrascape.fr" className="flex items-center group">
                  <div className="w-14 h-14 bg-terra-gold/10 rounded-full flex items-center justify-center mr-6 group-hover:bg-terra-gold transition-colors duration-300">
                    <Mail className="w-6 h-6 text-terra-gold group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-terra-brown/60 text-sm uppercase tracking-widest mb-1">Email</p>
                    <p className="text-xl text-terra-brown group-hover:text-terra-gold transition-colors">
                      terrascape06@gmail.com
                    </p>
                  </div>
                </a>
              </div>

               {/* New Zone d'Intervention Block */}
               <div className="bg-terra-sand/10 rounded-2xl p-8 border border-terra-gold/20">
                  <h3 className="text-xl font-bold text-terra-brown mb-2 font-montserrat">
                    Zone d'Intervention Exclusive
                  </h3>
                  <p className="text-gray-500 mb-6 font-medium">
                    Nous nous déplaçons directement sur site.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-4">
                    {[
                      "Monaco", 
                      "Nice", 
                      "Cannes", 
                      "Antibes / Juan-les-Pins", 
                      "Saint-Jean-Cap-Ferrat", 
                      "Eze"
                    ].map((city, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-terra-gold flex-shrink-0" />
                        <span className="text-terra-brown font-medium text-sm">{city}</span>
                      </div>
                    ))}
                  </div>
               </div>

            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-terra-brown mb-6 font-montserrat">
                  Envoyez-nous un message
                </h3>
                 <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-terra-brown font-semibold mb-2 ml-1 text-sm uppercase tracking-wide">
                      Nom & Prénom
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-terra-gold focus:ring-1 focus:ring-terra-gold focus:outline-none transition-all duration-300"
                      placeholder="Votre nom complet"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="establishment" className="block text-terra-brown font-semibold mb-2 ml-1 text-sm uppercase tracking-wide">
                      Nom de l'établissement
                    </label>
                    <input
                      type="text"
                      id="establishment"
                      name="establishment"
                      value={formData.establishment}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-terra-gold focus:ring-1 focus:ring-terra-gold focus:outline-none transition-all duration-300"
                      placeholder="Restaurant, Plage, Club..."
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-terra-brown font-semibold mb-2 ml-1 text-sm uppercase tracking-wide">
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-terra-gold focus:ring-1 focus:ring-terra-gold focus:outline-none transition-all duration-300"
                          placeholder="06..."
                          required
                        />
                      </div>
                      
                      <div>
                         <label htmlFor="serviceType" className="block text-terra-brown font-semibold mb-2 ml-1 text-sm uppercase tracking-wide">
                          Type de prestation
                        </label>
                        <div className="relative">
                          <select
                            id="serviceType"
                            name="serviceType"
                            value={formData.serviceType}
                            onChange={handleChange}
                             className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-terra-gold focus:ring-1 focus:ring-terra-gold focus:outline-none transition-all duration-300 appearance-none text-gray-700"
                          >
                            <option value="installation">Installation & Rangement</option>
                            <option value="nettoyage">Nettoyage Haute-Pression</option>
                            <option value="evenementiel">Événementiel & Décoration</option>
                            <option value="autre">Autre demande</option>
                          </select>
                           <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>
                      </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-terra-brown font-semibold mb-2 ml-1 text-sm uppercase tracking-wide">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-terra-gold focus:ring-1 focus:ring-terra-gold focus:outline-none resize-none transition-all duration-300"
                      placeholder="Détaillez votre besoin..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-terra-brown text-white py-4 rounded-xl hover:bg-terra-gold shadow-lg hover:shadow-xl transition-all duration-300 font-bold text-lg uppercase tracking-wide flex items-center justify-center gap-2 group"
                  >
                    Envoyer ma demande
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
           <div className="text-center mb-16">
             <span className="text-terra-gold font-bold tracking-widest uppercase text-sm mb-4 block">
                INFORMATIONS
             </span>
             <h2 className="text-3xl md:text-4xl font-bold text-terra-brown font-montserrat">
               Questions Fréquentes
             </h2>
           </div>

           <div className="space-y-4">
             {faqs.map((faq, index) => (
               <div 
                 key={index} 
                 className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer"
                 onClick={() => toggleFaq(index)}
               >
                 <div className="p-6 flex justify-between items-center hover:bg-gray-50 transition-colors">
                   <h3 className="font-bold text-terra-brown text-lg">{faq.question}</h3>
                   {openFaqIndex === index ? (
                     <ChevronUp className="w-5 h-5 text-terra-gold" />
                   ) : (
                     <ChevronDown className="w-5 h-5 text-terra-brown/50" />
                   )}
                 </div>
                 
                 <motion.div
                   initial={false}
                   animate={{ height: openFaqIndex === index ? "auto" : 0, opacity: openFaqIndex === index ? 1 : 0 }}
                   transition={{ duration: 0.3 }}
                   className="overflow-hidden"
                 >
                   <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mt-2 pt-4">
                     {faq.answer}
                   </div>
                 </motion.div>
               </div>
             ))}
           </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
