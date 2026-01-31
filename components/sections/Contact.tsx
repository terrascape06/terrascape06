"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Loader2 } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    establishment: "",
    email: "",
    phone: "",
    message: ""
  });
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", establishment: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="pt-16 pb-20 md:pt-24 md:pb-32 bg-terra-brown relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: The Hook */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-12"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6 leading-tight">
                Prêt à sublimer votre établissement ?
              </h2>
              <p className="text-xl text-white/80 font-medium">
                Devis gratuit et réponse sous 24h.
              </p>
            </div>

            <div className="space-y-8">
              <a href="tel:+33766025027" className="flex items-center group">
                <div className="w-14 h-14 bg-terra-gold/10 rounded-full flex items-center justify-center mr-6 group-hover:bg-terra-gold transition-colors duration-300">
                  <Phone className="w-6 h-6 text-terra-gold group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-white/60 text-sm uppercase tracking-widest mb-1">Téléphone</p>
                  <p className="text-3xl font-bold text-terra-gold group-hover:text-white transition-colors">
                    +33 7 66 02 50 27
                  </p>
                </div>
              </a>

              <a href="mailto:contact@terrascape.fr" className="flex items-center group">
                <div className="w-14 h-14 bg-terra-gold/10 rounded-full flex items-center justify-center mr-6 group-hover:bg-terra-gold transition-colors duration-300">
                  <Mail className="w-6 h-6 text-terra-gold group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-white/60 text-sm uppercase tracking-widest mb-1">Email</p>
                  <p className="text-xl text-white group-hover:text-terra-gold transition-colors">
                    terrascape06@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-center">
                <div className="w-14 h-14 bg-terra-gold/10 rounded-full flex items-center justify-center mr-6">
                  <MapPin className="w-6 h-6 text-terra-gold" />
                </div>
                <div>
                  <p className="text-white/60 text-sm uppercase tracking-widest mb-1">Zone d'intervention</p>
                  <p className="text-xl text-white">
                    Nice • Cannes • Monaco • Antibes
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: The Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-8 bg-white/5 p-8 md:p-10 rounded-3xl border border-white/10 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-terra-gold/50 py-3 text-white placeholder-transparent focus:outline-none focus:border-terra-gold transition-colors"
                    placeholder="Nom & Prénom"
                    required
                  />
                  <label 
                    htmlFor="name" 
                    className={`absolute left-0 transition-all duration-300 pointer-events-none ${formData.name ? '-top-6 text-sm text-terra-gold' : 'top-3 text-white/50'}`}
                  >
                    Nom & Prénom
                  </label>
                </div>

                <div className="relative group">
                  <input
                    type="text"
                    id="establishment"
                    name="establishment"
                    value={formData.establishment}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-terra-gold/50 py-3 text-white placeholder-transparent focus:outline-none focus:border-terra-gold transition-colors"
                    placeholder="Nom de l'établissement"
                    required
                  />
                  <label 
                    htmlFor="establishment" 
                    className={`absolute left-0 transition-all duration-300 pointer-events-none ${formData.establishment ? '-top-6 text-sm text-terra-gold' : 'top-3 text-white/50'}`}
                  >
                    Nom de l'établissement
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-terra-gold/50 py-3 text-white placeholder-transparent focus:outline-none focus:border-terra-gold transition-colors"
                    placeholder="Téléphone"
                    required
                  />
                  <label 
                    htmlFor="phone" 
                    className={`absolute left-0 transition-all duration-300 pointer-events-none ${formData.phone ? '-top-6 text-sm text-terra-gold' : 'top-3 text-white/50'}`}
                  >
                    Téléphone
                  </label>
                </div>

                <div className="relative group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-terra-gold/50 py-3 text-white placeholder-transparent focus:outline-none focus:border-terra-gold transition-colors"
                    placeholder="Email"
                    required
                  />
                  <label 
                    htmlFor="email" 
                    className={`absolute left-0 transition-all duration-300 pointer-events-none ${formData.email ? '-top-6 text-sm text-terra-gold' : 'top-3 text-white/50'}`}
                  >
                    Email
                  </label>
                </div>
              </div>



              <div className="relative group">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-transparent border-b border-terra-gold/50 py-3 text-white placeholder-transparent focus:outline-none focus:border-terra-gold transition-colors resize-none"
                  placeholder="Message"
                  required
                />
                <label 
                  htmlFor="message" 
                  className={`absolute left-0 transition-all duration-300 pointer-events-none ${formData.message ? '-top-6 text-sm text-terra-gold' : 'top-3 text-white/50'}`}
                >
                  Message
                </label>
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-terra-gold text-white py-4 rounded-full font-bold uppercase tracking-wide hover:bg-white hover:text-terra-brown transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Envoi...
                  </>
                ) : (
                  <>
                    Envoyer ma demande
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              {status === "success" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-center text-white"
                >
                  <p>Message envoyé avec succès ! Nous vous répondrons sous 24h.</p>
                </motion.div>
              )}
              
              {status === "error" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-center text-white"
                >
                  <p>Une erreur est survenue. Veuillez réessayer.</p>
                </motion.div>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
