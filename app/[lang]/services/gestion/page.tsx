import { Metadata } from "next";
import GestionContent from "@/components/pages/services/GestionContent";
import { getDictionary } from "@/get-dictionary";

export const metadata: Metadata = {
  title: "Gestion & Installation de Mobilier de Terrasse | Terrascape",
  description: "Service quotidien de mise en place et rangement de terrasse pour restaurants et brasseries. Hivernage et maintenance du mobilier.",
};

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'fr' | 'en');
  
  return <GestionContent 
    navigationDict={dict.navigation} 
    footerDict={dict.footer}
    serviceDict={dict.service_gestion}
    lang={lang} 
  />;
}
