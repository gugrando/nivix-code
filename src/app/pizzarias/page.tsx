import LandingPageTemplate from "@/components/Templates/LandingPageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nivix Lead Elite - Marketing para Pizzarias",
  description: "A melhor equipe de marketing para pizzarias do Brasil. Ative seu squad de performance e escale seu delivery.",
};

export default function PizzariasPage() {
  return <LandingPageTemplate niche="pizzarias" />;
}
