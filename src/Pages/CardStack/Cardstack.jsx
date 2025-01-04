import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiDaisyui } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
const Cardstack = () => {
    const cards = [
        {
            id: 1,
            title: "E-Commerce Dashboard",
            description:
                "A comprehensive dashboard for managing online store inventory, sales analytics, and customer data.",
            technologies: ["React", "Tailwind", "DaisyUI"],
            image: "https://i.ibb.co.com/Y7hkptW/989shots-so.png",
            liveLink: "https://project1.demo",
            githubLink: "https://github.com/demo/project1",
        },
        {
            id: 2,
            title: "Social Media Platform",
            description:
                "Modern social networking application with real-time messaging, post sharing, and user interactions.",
            technologies: ["React", "Tailwind", "DaisyUI"],
            image: "https://i.ibb.co.com/jLBN11f/screenshot-rocks.png",
            liveLink: "https://project2.demo",
            githubLink: "https://github.com/demo/project2",
        },
        {
            id: 3,
            title: "Task Management App",
            description:
                "Collaborative task management tool with drag-and-drop interface, task prioritization, and team collaboration.",
            technologies: ["React", "Tailwind", "DaisyUI"],
            image: "https://i.ibb.co.com/93kp2PM/562shots-so.png",
            liveLink: "https://project3.demo",
            githubLink: "https://github.com/demo/project3",
        },
    ];

    const getTechIcon = (tech) => {
        switch (tech) {
            case "React":
                return <FaReact className="w-4 h-4" />;
            case "Tailwind":
                return <SiTailwindcss className="w-4 h-4" />;
            case "DaisyUI":
                return <SiDaisyui className="w-4 h-4" />;
            default:
                return null;
        }
    };

    return (
        <div data-aos="fade-up"  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {cards.map((card) => (
                <div
                    key={card.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                    <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <h2 className="text-lg font-bold">{card.title}</h2>
                        <p className="text-sm text-gray-600">{card.description}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {card.technologies.map((tech) => (
                                <div
                                    key={tech}
                                    className="flex items-center gap-2 bg-gray-200 rounded-full px-3 py-1 text-sm"
                                >
                                    {getTechIcon(tech)}
                                    <span>{tech}</span>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-4 mt-4">
                            <a
                                href={card.liveLink}
                                className="text-blue-500 flex items-center gap-1"
                            >
                                <FiExternalLink size={16} />
                                Live Website
                            </a>
                            <a
                                href={card.githubLink}
                                className="text-gray-600 flex items-center gap-1"
                            >
                                <FaGithub size={16} />
                                GitHub
                            </a>
                            <button
                                className="flex items-center gap-1 text-black btn btn-outline px-4 py-2 rounded-lg hover:bg-gray-700  transition-colors"
                            >
                                <BsInfoCircle size={16} />
                                View Details
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cardstack;
