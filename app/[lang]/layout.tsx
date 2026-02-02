import type { Metadata } from "next";
import "../globals.css";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import type { Locale } from "@/get-dictionary";

// OPTIMISATION SEO : Mots-clés stratégiques intégrés naturellement
export const metadata: Metadata = {
  title: {
    template: "%s | Terrascape - Services CHR Côte d'Azur",
    // Le titre par défaut doit être percutant
    default: "Terrascape | Nettoyage Terrasse Restaurant & Gestion de Stock Mobilier (06)",
  },
  description: "Solution complète pour Cafés, Hôtels & Restaurants. Nettoyage haute pression, Hivernage/Stockage de mobilier et Mise en place événementielle. Intervention 7j/7 de Monaco à Cannes.",
  // Bien que Google ignore souvent les keywords, on les garde pour les autres moteurs
  keywords: [
    "Nettoyage terrasse restaurant Nice", 
    "Gestion stock mobilier bar", 
    "Hivernage terrasse Cannes", 
    "Nettoyage haute pression CHR", 
    "Logistique événementielle Monaco", 
    "Terrascape"
  ],
  // Configuration pour que le partage sur Facebook/LinkedIn soit joli
  openGraph: {
    title: "Terrascape - L'expert des extérieurs CHR",
    description: "Nettoyage, Stockage et Logistique pour votre établissement.",
    url: 'https://www.terrascape06.com',
    siteName: 'Terrascape',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg', // Pensez à ajouter une image og-image.jpg dans le dossier public
        width: 1200,
        height: 630,
        alt: 'Terrascape Services',
      },
    ],
  },
  // Vérification Google (si vous avez le code)
  verification: {
    google: "votre-code-google-verification-ici",
  },
  alternates: {
    languages: {
      'fr': '/fr',
      'en': '/en',
    },
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  
  return (
    <html lang={lang}>
      <head>
        {/* Ajout du Schema "WebSite" pour forcer l'affichage du nom "Terrascape" sur Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Terrascape",
              "alternateName": ["Terrascape Azur", "Terrascape 06"],
              "url": "https://www.terrascape06.com"
            })
          }}
        />
      </head>
      <body className="antialiased">
        <LocalBusinessSchema />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
