import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { AiOutlineArrowUp } from "react-icons/ai";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <section className=" py-8 px-4 md:px-0 lg:px-0">
            <div  className="flex flex-col md:flex-row justify-between items-center">
                {/* Left Section */}
                <div className="mb-6 md:mb-0 text-center md:text-left">
                    <h3 className="text-md font-md text-black">
                    Designed by: Mahfuj Ahmed
                    </h3>
                    <p className="text-black font-md">Built with: React js</p>
                </div>

                {/* Middle Section */}
                <div className="flex space-x-4">
                    <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:scale-110 transition-transform btn btn-outline  rounded-3xl"
                        aria-label="Facebook"
                    >
                        facebook
                    </a>
                    <a
                        href="https://www.twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black  hover:scale-110 transition-transform btn btn-outline  rounded-3xl"
                        aria-label="Twitter"
                    >
                        Github
                    </a>
                    <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:scale-110 transition-transform btn btn-outline rounded-3xl"
                        aria-label="Instagram"
                    >
                        Whatsapp
                    </a>
                    <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:scale-110 transition-transform btn btn-outline rounded-3xl"
                        aria-label="LinkedIn"
                    >
                        Linkdin
                    </a>
                </div>

                {/* Right Section */}
                <div className="mt-6 md:mt-0 text-center md:text-right flex flex-col md:flex-col justify-between items-center">
                    <button
                        onClick={scrollToTop}
                        className="flex items-center space-x-2 text-black transition-colors"
                    >
                        <span className="font-md">Back to Top</span>
                        <AiOutlineArrowUp className="text-2xl" />
                    </button>
                    <p className="text-black"> © {new Date().getFullYear()} Mahfuj Ahmed</p>
                </div>
            </div>
        </section>
    );
};

export default Footer;
