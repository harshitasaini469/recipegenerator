import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import RecipeGenerator from "../components/RecipeGenerator";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <RecipeGenerator />
    </div>
  );
};

export default Home;
