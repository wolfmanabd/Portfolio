
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="container">
        <About />
        <Skills />
        <Services />
        <CTA />
        <Portfolio />
        <Contact />
      </div>
    </>
  );
}
