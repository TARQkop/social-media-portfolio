import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Testimonials from "./components/sections/Testimonials";
import { useScrollReveal } from "./hooks/useScrollReveal";

function App() {
  useScrollReveal();

  return (
    <>
      {/* ==================================================
          # NAVBAR
      ================================================== */}
      <Navbar />

      {/* ==================================================
          # MAIN CONTENT
      ================================================== */}
      <main>
        {/* # Hero Section */}
        <Hero />

      {/* # About Section */}
        <About />

        {/* # Services Section */}
        <Services />

        {/* # Testimonials Section */}
        <Testimonials />

      </main>
    </>
  );
}

export default App;