'use client';
import { useEffect } from "react";
import Header from "../Header/Header";
import Headline from "../Headline";
import FormContainer from "../Form/FormContainer";
import ClientsCarousel from "../ClientsForm";
import OurWork from "../OurWork";
import Footer from "../Footer";
import ClientVideos from "../ClientVideos";
import Team from "../Team";
import Plano from "../Plano";
import Ecosystem360 from "../Ecosystem360";
import FinalCTA from "../FinalCTA";
import { NicheType, nicheData } from "../../data/niches";

interface LandingPageTemplateProps {
  niche: NicheType;
}

const LandingPageTemplate = ({ niche }: LandingPageTemplateProps) => {
  const data = nicheData[niche];

  useEffect(() => {
    if (navigator.userAgent.includes("Chrome") && !navigator.userAgent.includes("Edg")) {
      document.documentElement.classList.add("is-chrome");
    }
  }, []);

  return (
    <main className="w-full h-fit bg-[#101010] relative">
      <Header />
      <Headline data={data.hero} />
      <FormContainer data={{ ...data.form, ...data.method }} />
      <ClientVideos />
      <ClientsCarousel />
      <Ecosystem360 data={data.ecosystem} />
      <Plano data={data.plano} />
      <Team data={data.team} />
      <OurWork />
      <FinalCTA data={data.finalCTA} />
      <Footer />
    </main>
  );
}

export default LandingPageTemplate;
