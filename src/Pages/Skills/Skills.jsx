import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiFirebase } from "react-icons/si";

const Skills = () => {
    const skills = [
        { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" ,shadow: "shadow-orange-500",  gradient: "bg-gradient-to-r from-orange-500 to-red-500" },
        { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" ,shadow: "shadow-blue-500",  gradient: "bg-gradient-to-r from-blue-500 to-blue-300" },
        { name: "JavaScript", icon: <FaJs />, color: "text-blue-500" ,shadow: "shadow-blue-500" ,  gradient: "bg-gradient-to-r from-yellow-400 to-yellow-200" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "text-teal-500",shadow: "shadow-teal-500", gradient: "bg-gradient-to-r from-teal-500 to-teal-300"  },
        { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" ,shadow: "shadow-green-500" ,gradient: "bg-gradient-to-r from-green-500 to-green-300" },
        { name: "Firebase", icon: <SiFirebase />, color: "text-yellow-500" ,shadow: "shadow-yellow-500",  gradient: "bg-gradient-to-r from-yellow-500 to-orange-400" },
        { name: "Node.js", icon: <FaNodeJs />, color: "text-green-600" ,shadow: "shadow-green-600",  gradient: "bg-gradient-to-r from-green-600 to-green-400" },
    ];
    return (
        <div>
            <div data-aos="fade-up" className="flex flex-col md:flex-row py-6 gap-10  ">
                <div className='md:w-[350px]'>
                    <h1 className=" text-6xl md:text-7xl font-bold md:font-extrabold md:whitespace-nowrap ">Skills</h1>
                </div>
                <div className="flex flex-wrap justify-center gap-6 p-4 ">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className={`flex flex-col items-center  justify-center w-20 h-20 md:w-28 md:h-28 ${skill.color} border rounded-lg shadow-lg ${skill.shadow} bg-slate-950  hover:scale-110 transition-transform duration-300 relative group`}
                        >
                            {/* <div
                                className={`absolute inset-0 rounded-lg bg-gradient-to-r opacity-0 group-hover:opacity-100 blur-lg `}
                            >

                            </div> */}
                            <div className="relative z-10 text-4xl">{skill.icon}</div>
                            <p className="mt-2 text-sm text-white">{skill.name}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Skills;