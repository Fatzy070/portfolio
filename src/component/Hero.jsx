import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white text-black dark:bg-gray-900 dark:text-white px-4 transition-colors duration-300">
      <div className="text-center space-y-4 max-w-xl">
        <h1 className="text-4xl md:text-6xl font-bold">Hello, I'm Fatzy Faruk</h1>
        <p className="text-xl">Frontend Developer & JavaScript Enthusiast</p>
        <a href="#projects">
          <button className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition duration-300">
            View Projects
          </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
