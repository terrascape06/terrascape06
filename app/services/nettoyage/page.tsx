import { Metadata } from "next";
import NettoyageContent from "@/components/pages/services/NettoyageContent";

export const metadata: Metadata = {
  title: "Nettoyage Professionnel Restaurant & Nuit | Terrascape",
  description: "Nettoyage haute pression, dégraissage sols et vitres pour établissements CHR. Intervention discrète de nuit ou matin.",
};

export default function Page() {
  return <NettoyageContent />;
}
