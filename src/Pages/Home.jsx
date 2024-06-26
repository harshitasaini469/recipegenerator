import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
