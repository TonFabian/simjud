import React from "react";
import Footer from "./components/Footer";
import Analytics from "./components/Analytics";
import Cards from "./components/Cards";
import Newsletter from "./components/Newsletter";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
