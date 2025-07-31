'use client';

import Header from "../components/Header/Header";
import Headline from "../components/Headline";
import FormContainer from "../components/Form/FormContainer";
import ClientsCarousel from "../components/ClientsForm";
import OurWork from "../components/OurWork";
import Footer from "../components/Footer";
import Exclusivist from "../components/Exclusivist";
import ClientVideos from "../components/ClientVideos";

const Home = () => {
  return (
    <main className="w-full h-fit bg-[#1c1c1c] relative">
      <section className="w-full h-fit relative">
        <div className="absolute top-[49%] md:top-[60%] left-1/2 w-[380px] h-[600px] md:w-[600px] lg:w-[1000px] md:h-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full z-0 pointer-events-none blur-2xl bg-[radial-gradient(circle,rgba(255,180,0,0.4)_0%,rgba(255,180,0,0.05)_50%,rgba(255,180,0,0)_90%)]" />
        <div className="relative z-10">
          <Header />
          <Headline />
        </div>
      </section>
      <section>
        <FormContainer />
      </section>
      <section className="w-full h-fit flex flex-col items-center">
        <ClientsCarousel />
      </section>
      <section>
        <ClientVideos />
      </section>
      <section>
        <OurWork />
      </section>
      
        <Exclusivist />
        <Footer />
    </main>
  );
}

export default Home;