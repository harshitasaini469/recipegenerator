import React from "react";

const Hero = () => {
  return <div className="">
    <section class="bg-white dark:bg-gray-900 h-[80vh]" style={{backgroundImage: "url(./images/bg5.jpg)"}}>

    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-6xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-dark ">Food Fusion</h1>
            <p class="max-w-2xl mb-6  lg:mb-8 md:text-lg lg:text-xl text-white">Discover the magic of cooking on the fly with <span className="font-style-script text-3xl">Food Fusion</span>. Let's turn your kitchen into a culinary playground. Ready to get started?</p>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900">
                Get started
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
        </div>                
    </div>
</section>
  </div>;
};

export default Hero;
