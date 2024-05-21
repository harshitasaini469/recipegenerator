import React from "react";
import RecipeGenerator from "../components/RecipeGenerator";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Recipe = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <RecipeGenerator />
      <Footer />
    </div>
  );
};

export default Recipe;
