import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Formation from "@/components/portfolio/Formation";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Veille from "@/components/portfolio/Veille";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <Hero />
    <About />
    <Formation />
    <Skills />
    <Projects />
    <Veille />
    <Contact />
    <Footer />
  </div>
);

export default Index;
