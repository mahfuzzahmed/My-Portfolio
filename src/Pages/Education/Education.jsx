import { FaUniversity, FaGraduationCap, FaCalendarAlt } from "react-icons/fa";
import { BsFillBarChartFill } from "react-icons/bs";
import { MdOutlineCreditScore } from "react-icons/md";
import { FaBook } from "react-icons/fa";
const Education = () => {
    return (


        <div data-aos="fade-up" className="py-6 lg:py-6">
            <div className=" flex flex-col gap-16 md:flex-row ">
                {/* Title */}
                <h2 className="text-3xl lg:text-7xl font-bold md:font-extrabold  text-gray-800 text-center mb-8">
                    Education
                </h2>

                {/* Grid Layout */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* University */}
                    <div className="flex items-center bg-white shadow-lg rounded-lg p-4 hover:scale-105 hover:shadow-xl transition-transform duration-300">
                        <FaUniversity className="text-blue-500 text-3xl mr-4" />
                        <div>
                            <p className="text-lg font-semibold text-gray-800">North South University</p>
                            <p className="text-sm text-gray-600">Bachelor of Business Administration</p>
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="flex items-center bg-white shadow-lg rounded-lg p-4 hover:scale-105 hover:shadow-xl transition-transform duration-300">
                        <FaCalendarAlt className="text-yellow-500 text-3xl mr-4" />
                        <div>
                            <p className="text-lg font-semibold text-gray-800">Timeline</p>
                            <p className="text-sm text-gray-600">2022 - Present</p>
                        </div>
                    </div>

                    {/* Major */}
                    <div className="flex items-center bg-white shadow-lg rounded-lg p-4 hover:scale-105 hover:shadow-xl transition-transform duration-300">
                        <FaGraduationCap className="text-green-500 text-3xl mr-4" />
                        <div>
                            <p className="text-lg font-semibold text-gray-800">Majoring In</p>
                            <p className="text-sm text-gray-600">Finance</p>
                        </div>
                    </div>

                    {/* CGPA */}
                    <div className="flex items-center bg-white shadow-lg rounded-lg p-4 hover:scale-105 hover:shadow-xl transition-transform duration-300">
                        <BsFillBarChartFill className="text-purple-500 text-3xl mr-4" />
                        <div>
                            <p className="text-lg font-semibold text-gray-800">CGPA</p>
                            <p className="text-sm text-gray-600">3.52</p>
                        </div>
                    </div>

                    {/* Credits Passed */}
                    <div className="flex items-center bg-white shadow-lg rounded-lg p-4 hover:scale-105 hover:shadow-xl transition-transform duration-300">
                        <MdOutlineCreditScore className="text-red-500 text-3xl mr-4" />
                        <div>
                            <p className="text-lg font-semibold text-gray-800">Credits Passed</p>
                            <p className="text-sm text-gray-600">75</p>
                        </div>
                    </div>

                    {/* Semester */}
                    <div className="flex items-center bg-white shadow-lg rounded-lg p-4 hover:scale-105 hover:shadow-xl transition-transform duration-300">
                        <FaBook className="text-indigo-500 text-3xl mr-4" />
                        <div>
                            <p className="text-lg font-semibold text-gray-800">Semester</p>
                            <p className="text-sm text-gray-600">Currently in 8th Semester</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;