import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const ContactMe = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !message) {
            alert("Please fill out both fields.");
            return;
        }

        setLoading(true);

        const templateParams = {
            from_email: email,
            message: message,
        };

        try {
            await emailjs.send(
                "service_unnc5n9", // Replace with your EmailJS service ID
                "template_swvrx2i", // Replace with your EmailJS template ID
                templateParams,
                "AoOzro68jbmWoNYxa" // Replace with your EmailJS public key
            );
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your message has been sent",
                showConfirmButton: false,
                timer: 1500
            });

            setEmail("");
            setMessage("");
        } catch (error) {
            console.error("Error sending email:", error);
            alert("Failed to send the message. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="">
            <div data-aos="fade-up"  className=" bg-white  rounded-lg p-8">
                <h2 className="text-2xl md:text-7xl font-extrabold text-gray-800 text-center">
                    Interested In <br />
                    Working Together? <br />
                    <span className="text-xl font-semibold">Drop me an email:</span>
                </h2>
                <form onSubmit={handleSubmit} className="mt-6 space-y-4 py-10 px-5 md:px-20 lg:px-40">
                    <div className="flex items-center border rounded-xl p-4 border-gray-300 py-2">
                        <HiOutlineMail className="text-xl text-gray-500" />
                        <input
                            type="email"
                            placeholder="Your Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full pl-3 bg-transparent outline-none"
                        />
                    </div>
                    <textarea
                        placeholder="Your Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows="5"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="w-full  text-black btn btn-outline font-semibold py-2 rounded-lg hover:bg-gray-600 transition duration-200"
                        disabled={loading}
                    >
                        {loading ? "Sending..." : "Send Email"}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactMe;
