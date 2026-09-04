import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";

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
      </main>
    </>
  );
}

export default App;