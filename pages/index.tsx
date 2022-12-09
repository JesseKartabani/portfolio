import Head from "next/head";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import WorkExperience from "../components/WorkExperience";

export default function Home() {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory
     overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20
     scrollbar-thumb-[#F7AB0A]/80"
    >
      <Head>
        <title>Jesse Kartabani</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      {/* 
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>
      */}

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Footer />
    </div>
  );
}
