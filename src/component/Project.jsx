import React from 'react';

const Projects = () => {
    const projectList = [
        {
            title: "Grocery List App",
            description: "Built with React and useState hook. Users can add and remove grocery items.",
            link: "#"
        },
        {
            title: "Business Website",
            description: "A responsive mini business website with contact form and product list.",
            link: "#"
        },
        {
            title: "MongoDB CRUD App",
            description: "Fullstack CRUD app using Node.js, Express, MongoDB, and EJS for views.",
            link: "#"
        }
    ];

    return (
        <section className="bg-gray-100 dark:bg-gray-900 px-6 py-16 transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
                    My Projects
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projectList.map((project, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                            <a href={project.link} className="text-blue-600 dark:text-blue-400 hover:underline">
                                View Project
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
