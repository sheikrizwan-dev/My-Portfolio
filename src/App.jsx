import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Technology from "./components/Technology";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";



const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed inset-0 z-[-1] h-full w-full bg-neutral-950">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <div className="absolute top-[20%] left-[10%] h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[10%] h-[400px] w-[400px] rounded-full bg-cyan-600/20 blur-[120px] animate-pulse"></div>
      </div>
      <div className="relative min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 md:px-8 pt-20">
          <section id="home"><Hero /></section>
          <section id="about" className="scroll-mt-24"><About/></section>
          <section id="skills" className="scroll-mt-24"><Technology/></section>
          <section id="experience" className="scroll-mt-24"><Experience/></section>
          <section id="education" className="scroll-mt-24"><Education/></section>
          <section id="projects" className="scroll-mt-24"><Project/></section>
          <section id="contact" className="scroll-mt-24"><Contact/></section>
      
        </div>
      </div>
    </div>
  );
}

export default App;
