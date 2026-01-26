import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Terrascape - Installation & Entretien de Mobilier de Terrasse | Côte d'Azur",
  description: "Spécialiste de l'installation et du nettoyage de mobilier de terrasse premium sur la Côte d'Azur. Service haut de gamme à Nice et ses environs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

