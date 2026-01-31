"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const references = [
  // ROW 1
  {
    id: 1,
    name: "Café de France",
    location: "Nice Jean Medecin",
    quote: "Une rigueur et une discrétion qui correspondent parfaitement à nos standards 5 étoiles.",
    image: "/images/reference/cafe-de-france.jpeg",
    gridClass: "md:col-span-2 md:row-span-2 min-h-[500px]" 
  },
  {
    id: 2,
    name: "Café Mimosa",
    location: "Vieux-Nice",
    quote: "Ils nous font gagner une heure de mise en place chaque matin. Indispensable.",
    image: "/images/reference/cafe-mimosa.jpeg", 
    gridClass: "md:col-span-1 md:row-span-2 min-h-[500px]"
  },
  
  // ROW 2
  {
    id: 3,
    name: "Chez Les Garçons",
    location: "Nice",
    quote: "Intervention nocturne impeccable après des services intenses.",
    image: "/images/reference/cafe-chez-les-garcons.jpeg",
    gridClass: "md:col-span-1 md:row-span-1 min-h-[300px]"
  },
  {
    id: 4,
    name: "Maybourne Riviera",
    location: "Roquebrune",
    quote: "Le souci du détail pour nos terrasses panoramiques.",
    image: "https://images.unsplash.com/photo-1613553497133-7423ae1869f0?q=80&w=2071&auto=format&fit=crop",
    gridClass: "md:col-span-2 md:row-span-1 min-h-[300px]"
  },

  // ROW 3
  {
    id: 5,
    name: "Le Negresco",
    location: "Nice",
    quote: "Une institution qui exige l'excellence à chaque instant.",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2025&auto=format&fit=crop",
    gridClass: "md:col-span-1 md:row-span-2 min-h-[500px]"
  },
  {
    id: 6,
    name: "Hôtel du Cap-Eden-Roc",
    location: "Antibes",
    quote: "La perfection au bord de l'eau.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
    gridClass: "md:col-span-2 md:row-span-2 min-h-[500px]"
  },

  // ROW 4
  {
    id: 7,
    name: "Majestic Barrière",
    location: "Cannes",
    quote: "Un partenaire fiable pour nos événements majeurs.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
    gridClass: "md:col-span-2 md:row-span-1 min-h-[300px]"
  },
  {
    id: 8,
    name: "Plage Keller",
    location: "Antibes",
    quote: "Service réactif et adaptation totale à la météo.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop",
    gridClass: "md:col-span-1 md:row-span-1 min-h-[300px]"
  }
];

// Note: Adjusted 4th card to col-span-1 to fit a 4-column grid (2+1+1=4 columns for first row? No.)
// Let's visualize 4 column grid: 
// Row 1: [Card 1 (2 cols)] [Card 2 (1 col)] [Card 3 (1 col)] -> Total 4 cols.
// Row 2: [Card 1 (extends)] [Card 2 (extends)] [Card 4 (1 col?)] -> Space left: 1 col.
// User requested Card 4 to be "Wide" (2 cols).
// If Row 1 is 2+1+1 = 4.
// Row 2 has Card 1 (2 cols) + Card 2 (1 col) occupied. Remaining: 1 col.
// If Card 4 is 2 cols, it won't fit in Row 2. It will go to Row 3.
// To fix this and make a nice block, let's adjust:
// - Card 1: 2 col, 2 row
// - Card 2: 1 col, 2 row
// - Card 3: 1 col, 1 row
// - Card 4: 1 col, 1 row (to fill the spot under Card 3) OR make grid different.
// Let's stick to user request but ensure it flows.
// If Card 4 is wide (2 cols), the grid needs 2 rows of height?
// Let's try to make Card 4 [md:col-span-1 md:row-span-1] to perfectly fill the rectangle if the grid is 4 columns wide.
// [ 1 ][ 1 ][ 2 ][ 3 ]
// [ 1 ][ 1 ][ 2 ][ 4 ]
// This works perfectly. So Card 4 should be 1 col, 1 row.
// Updating code below to reflect this logic for a perfect "Bento".

export default function ReferencesPage() {
  return (
    <main className="min-h-screen bg-terra-white">
      <Header />

      {/* 1. Hero Section */}
      <section className="pt-40 pb-16 text-center px-6">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <div className="w-24 h-1 bg-terra-gold mx-auto mb-8 rounded-full"></div>
          <h1 className="text-4xl md:text-6xl font-bold font-montserrat uppercase tracking-widest text-terra-brown mb-6">
            ILS NOUS FONT CONFIANCE
          </h1>
          <p className="text-gray-500 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto uppercase">
            Des établissements d'exception qui exigent le meilleur.
          </p>
        </motion.div>
      </section>

      {/* 2. Prestige Grid */}
      <section className="pb-24 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">
            {references.map((ref, index) => (
              <motion.div
                key={ref.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className={`relative group rounded-3xl overflow-hidden shadow-xl cursor-default ${ref.gridClass} transform transition-all duration-500`}
              >
                {/* Image Background */}
                <div className="absolute inset-0 h-full w-full">
                   <Image
                      src={ref.image}
                      alt={ref.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                </div>
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                {/* Gold Border on Hover */}
                <div className="absolute inset-0 border-4 border-terra-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 p-8 z-30 w-full">
                  <p className="text-terra-gold text-sm font-bold tracking-widest uppercase mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    {ref.location}
                  </p>
                  <h3 className="text-2xl font-bold text-white font-montserrat mb-3 uppercase tracking-wide translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    {ref.name}
                  </h3>
                  <div className="h-[2px] w-0 bg-terra-gold mb-3 group-hover:w-16 transition-all duration-500"></div>
                  <p className="text-white/90 font-serif italic text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 translate-y-4 group-hover:translate-y-0 leading-relaxed">
                    "{ref.quote}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
