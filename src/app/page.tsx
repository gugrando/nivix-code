'use client';
import { useEffect } from "react";
import Header from "../components/Header/Header";
import Headline from "../components/Headline";
import FormContainer from "../components/Form/FormContainer";
import ClientsCarousel from "../components/ClientsForm";
import OurWork from "../components/OurWork";
import Footer from "../components/Footer";
import ClientVideos from "../components/ClientVideos";
import Team from "../components/Team";
import Plano from "../components/Plano";

const Home = () => {
  useEffect(() => {
    if (navigator.userAgent.includes("Chrome") && !navigator.userAgent.includes("Edg")) {
      document.documentElement.classList.add("is-chrome");
    }
  }, []);

  return (
    <main className="w-full h-fit bg-[#101010] relative">
       

          <Header />
          <Headline />


        <FormContainer />
        <ClientVideos />
        <ClientsCarousel />
        <Plano />
        {/* <Team /> */}
        <OurWork />
        <Footer />

    </main>
  );
}

export default Home;