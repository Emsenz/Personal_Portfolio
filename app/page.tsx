import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollToTop from "@/components/ScrollToTop";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import CV from "@/components/CV";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <CV />
      <Contact />
    </main>
  );
}
