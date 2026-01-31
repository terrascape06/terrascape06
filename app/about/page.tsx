import { Metadata } from "next";
import AboutContent from "@/components/pages/AboutContent";

export const metadata: Metadata = {
  title: "Notre Expertise & Zone d'Intervention | Terrascape",
};

export default function Page() {
  return <AboutContent />;
}
