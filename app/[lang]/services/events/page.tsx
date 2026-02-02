import { Metadata } from "next";
import EventsContent from "@/components/pages/services/EventsContent";
import { getDictionary } from "@/get-dictionary";

export const metadata: Metadata = {
  title: "Logistique Événementielle & Plages Privées | Terrascape",
  description: "Aménagement éphémère pour soirées, gestion de transats et nettoyage après-événement sur la Côte d'Azur.",
};

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'fr' | 'en');
  
  return <EventsContent 
    navigationDict={dict.navigation} 
    footerDict={dict.footer}
    serviceDict={dict.service_events}
    lang={lang} 
  />;
}
