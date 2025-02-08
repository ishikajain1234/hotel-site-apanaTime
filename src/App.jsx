import { useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero/Hero";
import Rooms from "./Components/Rooms/Rooms";
import Kitchen from "./Components/Kitchen/Kitchen";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="rooms">
        <Rooms />
      </div>
      <div id="kitchen">
        <Kitchen />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
