import Layout from "../components/layout/Layout";
import About from "../components/sections/About";
import Hero from "../components/sections/Hero";
import FeaturedProject from "../components/sections/FeaturedProject";
import Projects from "../components/sections/Projects";
import Dashboard from "../components/sections/Dashboard";
import Frames from "../components/sections/Frames";
import Contact from "../components/sections/Contact";
import GithubSection from "../components/sections/GithubSection";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Dashboard />
      <About />
      <FeaturedProject />
      <Projects />
      <GithubSection />
      <Frames />
      <Contact />
    </Layout>
  );
}
