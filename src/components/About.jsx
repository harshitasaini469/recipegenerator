import React from "react";
import Navbar from "./Navbar";
const About = () => {
  return (
    <div id="about" className="">
      <section class="bg-white dark:bg-gray-900">
    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-green-700 dark:text-white">Revolutionizing Home Cooking, One Recipe at a Time.</h2>
            <p class="mb-4">At <span className="font-semibold">Food Fusion</span>, we're on a mission to transform the way you cook at home. Our innovative platform empowers you to create delicious meals effortlessly, using just the ingredients you have on hand. Say goodbye to recipe stress and hello to culinary creativity! Whether you're a seasoned chef or a kitchen novice, our user-friendly interface makes cooking fun and accessible for everyone. With a vast database of recipes and a smart algorithm that generates personalized suggestions, we're here to inspire your culinary adventures. Get ready to revolutionize your kitchen experience with Food Fusion!</p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
            <img class="w-full rounded-lg" src="./images/noodles.jpg" alt="noodles"/>
            <img class="mt-4 w-full lg:mt-10 rounded-lg" src="./images/pancake.jpg" alt="pancake"/>
        </div>
    </div>
</section>
    </div>
  );
};

export default About;
