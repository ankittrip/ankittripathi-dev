import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import FeaturedProject from "../components/projects/FeaturedProject";
import Projects from "../components/projects/Projects";
import CaseStudies from "../components/caseStudies/CaseStudies";
import Contact from "../components/contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <FeaturedProject />
      <Projects />
      <CaseStudies />
      <Contact />
    </>
  );
}