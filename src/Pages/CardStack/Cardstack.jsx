import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiDaisyui } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
const Cardstack = () => {
    const cards = [
        {
            id: 1,
            title: "Better Bites -Food Sharing Website",
            description:
                "This project connects food donors with those in need, enabling users to browse, request, and manage food donations, reducing food waste through a user-friendly web platform.",
            technologies: ["React", "Tailwind", "DaisyUI"],
            image: "https://i.ibb.co.com/Y7hkptW/989shots-so.png",
            liveLink: "https://food-sharing-platform.web.app/",
            githubLink: "https://github.com/programming-hero-web-course2/b10a11-server-side-mahfuzzahmed",
        },
        {
            id: 2,
            title: "Cine Verse -Movie Streaming Website",
            description:
                "CineVerse is a dynamic movie portal where users can explore, add, and curate favorite movies, featuring a rich library, personalized lists, and showcases of trending and featured films.",
            technologies: ["React", "Tailwind", "DaisyUI"],
            image: "https://i.ibb.co.com/jLBN11f/screenshot-rocks.png",
            liveLink: "https://movie-portal-6588d.web.app/",
            githubLink: "https://github.com/programming-hero-web-course2/b10-a10-client-side-mahfuzzahmed",
        },
        {
            id: 3,
            title: "Eco Adventure -Adventure Booking Portal",
            description:
                "his project showcases eco-friendly adventures like mountain treks and ocean dives, offering detailed information, expert consultation, and personalized experiences through user profiles and registration.",
            technologies: ["React", "Tailwind", "DaisyUI"],
            image: "https://i.ibb.co.com/93kp2PM/562shots-so.png",
            liveLink: "https://eco-adventure-experience-e7390.web.app/",
            githubLink: "https://github.com/programming-hero-web-course1/b10-a9-authentication-mahfuzzahmed",
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
        <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {cards.map((card) => (
                <div
                    key={card.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden border"
                >
                    <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <h2 className="text-lg font-extrabold">{card.title}</h2>
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
                            <a target="_blank"
                                href={card.liveLink}
                                className="text-blue-500 flex items-center gap-1"
                            >
                                <FiExternalLink size={16} />
                                Live Website
                            </a>
                            <a target="_blank"
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
