import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Footer from "../components/layout/Footer";
import Projects from "../components/sections/Projects";
import FeaturedProject from "../components/sections/FeaturedProject";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />

      <FeaturedProject />

      <Projects />

      <Footer />
    </>
  );
}