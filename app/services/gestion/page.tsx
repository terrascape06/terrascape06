import { Metadata } from "next";
import GestionContent from "@/components/pages/services/GestionContent";

export const metadata: Metadata = {
  title: "Gestion & Installation de Mobilier de Terrasse | Terrascape",
  description: "Service quotidien de mise en place et rangement de terrasse pour restaurants et brasseries. Hivernage et maintenance du mobilier.",
};

export default function Page() {
  return <GestionContent />;
}
