import { Metadata } from "next";
import EventsContent from "@/components/pages/services/EventsContent";

export const metadata: Metadata = {
  title: "Logistique Événementielle & Plages Privées | Terrascape",
  description: "Aménagement éphémère pour soirées, gestion de transats et nettoyage après-événement sur la Côte d'Azur.",
};

export default function Page() {
  return <EventsContent />;
}
