import type { Metadata } from "next";
import "./globals.css";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";

export const metadata: Metadata = {
  title: {
    template: "%s | Terrascape - Logistique & Nettoyage CHR",
    default: "Terrascape - Gestion de Terrasses & Nettoyage Pro sur la Côte d'Azur",
  },
  description: "Expert en logistique de terrasse, nettoyage professionnel (HACCP) et aménagement événementiel pour restaurants, hôtels et plages privées. Intervention 7j/7 de Monaco à Cannes.",
  keywords: ["Nettoyage restaurant Nice", "Gestion terrasse Cannes", "Logistique événementielle Monaco", "Nettoyage plage privée", "Hivernage mobilier terrasse", "Terrascape"],
  openGraph: {
    title: "Terrascape - Gestion de Terrasses & Nettoyage Pro",
    description: "Expert en logistique de terrasse et nettoyage professionnel CHR sur la Côte d'Azur.",
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <LocalBusinessSchema />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}

