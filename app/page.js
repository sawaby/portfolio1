
import HeroSection from './components/HeroSection';
import Navbar from './components/Header/Navbar';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/Projects/ProjectsSection';
import Footer from './components/Footer';
import Skills from './components/Skills';

export default function Home() {
  return (
  <main className="flex min-h-screen flex-col bg-gradient-to-tl from-pink-950 from-10% via-black via-50% to-[#060812] to-60%"> 
    <div className="container mt-24 mx-auto px-12 py-4">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Skills />
      <ProjectsSection />
      
    </div>
    <Footer />
  </main>
  ) 
}
