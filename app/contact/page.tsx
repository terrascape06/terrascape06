import { Metadata } from "next";
import ContactContent from "@/components/pages/ContactContent";

export const metadata: Metadata = {
  title: "Demander un Devis Gratuit | Terrascape",
};

export default function Page() {
  return <ContactContent />;
}
