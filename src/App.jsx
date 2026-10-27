import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import AboutGame from "./components/AboutGame";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Перейти к основному содержимому
      </a>
      <NavBar />
      <main id="main-content">
        <Hero />
        <AboutGame />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
