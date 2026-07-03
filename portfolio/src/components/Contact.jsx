import React from "react";
import {
  FiMail,
  FiGithub,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#f7f8fc] py-24 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <div className="flex justify-center items-center gap-3 mb-4">
          <span className="w-8 h-[2px] bg-[#ff6b00]"></span>

          <p className="uppercase tracking-[3px] text-[#ff6b00] text-xs font-semibold">
            Get In Touch
          </p>

          <span className="w-8 h-[2px] bg-[#ff6b00]"></span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-[#0B1E59] mb-6">
          Contact Me
        </h2>

        <p className="text-gray-500 text-lg leading-8 max-w-xl mx-auto">
          I'm open to new opportunities and collaborations.
          Feel free to reach out anytime.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-5 mt-12">

          <a
            href="mailto:kaingadesahil841@gmail.com"
            className="flex items-center justify-center gap-3 bg-[#ff6b00] hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-xl transition"
          >
            <FiMail size={20} />
            Send an Email
          </a>

          <a
            href="https://github.com/Sahilkaingade/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-3 border border-gray-300 bg-white hover:border-[#ff6b00] hover:text-[#ff6b00] text-[#0B1E59] font-semibold px-8 py-4 rounded-xl transition"
          >
            <FiGithub size={20} />
            GitHub Profile
          </a>

        </div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row justify-center gap-10 mt-12 text-[#5B6B92]">

          <div className="flex items-center justify-center gap-2">
            <FiPhone />
            <span>+91 7021418973</span>
          </div>

          <div className="flex items-center justify-center gap-2">
            <FiMapPin />
            <span>Mumbai, Maharashtra</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;