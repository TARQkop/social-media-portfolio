import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";

function App() {
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


      </main>
    </>
  );
}

export default App;