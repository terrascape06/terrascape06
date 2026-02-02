import { Metadata } from "next";
import NettoyageContent from "@/components/pages/services/NettoyageContent";
import { getDictionary } from "@/get-dictionary";

export const metadata: Metadata = {
  title: "Nettoyage Professionnel Restaurant & Nuit | Terrascape",
  description: "Nettoyage haute pression, dégraissage sols et vitres pour établissements CHR. Intervention discrète de nuit ou matin.",
};

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'fr' | 'en');
  
  return <NettoyageContent 
    navigationDict={dict.navigation} 
    footerDict={dict.footer}
    serviceDict={dict.service_nettoyage}
    lang={lang} 
  />;
}
