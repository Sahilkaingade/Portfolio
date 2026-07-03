import React from "react";
import {
  FiFolder,
  FiGithub,
  FiExternalLink,
  FiCode,
} from "react-icons/fi";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#f7f8fc] py-20 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-7 h-[2px] bg-[#ff6b00]"></span>

            <p className="uppercase tracking-[3px] text-[#ff6b00] text-xs font-semibold">
              MY WORK
            </p>
          </div>

          <h2 className="text-4xl font-bold text-[#0B1E59]">
            Relevant Projects
          </h2>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Project Card */}
          <div className="bg-white border border-gray-200 rounded-3xl p-7 shadow-sm hover:shadow-lg transition-all duration-300">

            {/* Top */}
            <div className="flex justify-between items-start mb-8">

              <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center">
                <FiFolder className="text-[#ff6b00] text-3xl" />
              </div>

              <div className="flex gap-4 text-[#5B6B92]">

                <a href="#" className="hover:text-[#ff6b00]">
                  <FiGithub size={21} />
                </a>

                <a href="#" className="hover:text-[#ff6b00]">
                  <FiExternalLink size={21} />
                </a>

              </div>

            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold text-[#0B1E59] mb-4">
              Travel Planner Web Application
            </h3>

            <p className="text-gray-500 leading-8 text-[16px] mb-6">
              A responsive web-based travel planner with user
              authentication, CRUD operations via MongoDB, and
              user-friendly validated forms. Implemented
              full-stack concepts from frontend to database
              layer.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">

              {[
                "React.js",
                "Tailwind CSS",
                "MongoDB",
                "JavaScript",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-1.5 rounded-full bg-orange-50 text-[#ff6b00] text-sm font-medium"
                >
                  {tech}
                </span>
              ))}

            </div>

          </div>

          {/* Coming Soon */}
          <div className="border border-dashed border-gray-300 rounded-3xl bg-white flex flex-col justify-center items-center min-h-[320px]">

            <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mb-6">
              <FiCode className="text-3xl text-[#5B6B92]" />
            </div>

            <h3 className="text-2xl font-semibold text-[#40517A] mb-2">
              More projects coming soon
            </h3>

            <p className="text-gray-400 text-center">
              Currently building exciting new things
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;