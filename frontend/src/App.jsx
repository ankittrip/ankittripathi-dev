import Navbar from "./components/common/Navbar.jsx";
import Footer from "./components/common/Footer.jsx";

import Hero from "./components/hero/Hero.jsx";
import About from "./components/about/About.jsx";
import Skills from "./components/skills/Skills.jsx";

import FeaturedProject from "./components/projects/FeaturedProject.jsx";

import ArchitectureSection from "./components/architecture/ArchitectureSection.jsx";

import Projects from "./components/projects/Projects.jsx";
import CaseStudies from "./components/caseStudies/CaseStudies.jsx";

import LearningNow from "./components/learning/LearningNow.jsx";
import GithubStats from "./components/github/GithubStats.jsx";
import Contact from "./components/contact/Contact.jsx";

import MainLayout from "./layouts/MainLayout.jsx";

export default function App() {
  return (
    <MainLayout>
      <Navbar />

      <main>
        <Hero />

        <About />

        <Skills />

        <FeaturedProject />

        <ArchitectureSection />

        <Projects />

        <CaseStudies />

        <LearningNow />

        <GithubStats />

        <Contact />
      </main>

      <Footer />
    </MainLayout>
  );
}