import React from 'react';

const About = () => {
  return (
    <section className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white px-6 py-16 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">About Me</h2>
        <p className="text-lg leading-relaxed">
          I'm <strong>Fatzy Faruk</strong>, a passionate <span className="font-semibold">full-stack developer</span> with solid knowledge in HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. I love building user-friendly and scalable web apps, and I'm always eager to learn new things.
      </p>
        <p className="text-lg leading-relaxed mt-4">
          When I'm not coding, I’m probably watching tech videos, learning backend stuff, or tweaking designs. I believe consistency and learning by doing is the key to being great at anything.
        </p>
      </div>
    </section>
  );
};

export default About;
