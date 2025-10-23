import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import Hero from "@/components/Hero";
import Announcements from "@/components/Announcements";
import About from "@/components/About";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Values from "@/components/Values";
import Partners from "@/components/Partners";
import Technologies from "@/components/Technologies";
import History from "@/components/History";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingBackground from "@/components/FloatingBackground";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <FloatingBackground />
      <div className="relative z-10">
        <Header />
        <HeroBanner />
        <Hero />
        <Announcements />
        <About />
        <Mission />
        <Services />
        <Projects />
        <Values />
        <Partners />
        <Technologies />
        <History />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
