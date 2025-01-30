import React from "react";
import Header from "./components/Header";
import Hero from "./components/Home";
import Services from "./components/Services";
import HowWeWork from "./components/HowWeWork";
import AboutUs from "./components/AboutUs";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./index.css";

const App = () => (
  <>
    <Header />
    <Hero />
    <Services />
    <HowWeWork />
    <AboutUs />
    <Reviews />
    <Contact />
    <Footer />
  </>
);

export default App;
