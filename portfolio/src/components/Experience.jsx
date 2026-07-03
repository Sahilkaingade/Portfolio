import React from "react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-[#f7f8fc] py-20 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-7 h-[2px] bg-[#ff6b00]"></span>

            <p className="uppercase tracking-[3px] text-[#ff6b00] text-xs font-semibold">
              CAREER
            </p>
          </div>

          <h2 className="text-4xl font-bold text-[#0B1E59]">
            Professional Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative pl-10">

          {/* Vertical Line */}
          <div className="absolute left-0 top-2 bottom-0 w-[2px] bg-orange-200"></div>

          {/* Timeline Dot */}
          <div className="absolute left-[-8px] top-2 w-5 h-5 rounded-full bg-[#ff6b00] border-4 border-[#f7f8fc]"></div>

          {/* Experience Card */}
          <div className="bg-white border border-gray-200 rounded-3xl p-7 shadow-sm hover:shadow-md transition-all duration-300 max-w-3xl">

            {/* Company + Date */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-5">

              <div>
                <h3 className="text-2xl font-bold text-[#0B1E59]">
                  Maxval Technologies
                </h3>

                <p className="text-[#ff6b00] text-lg font-medium mt-1">
                  HTML Intern — New Plans Team
                </p>
              </div>

              <span className="px-4 py-1 rounded-full bg-gray-100 text-[#5B6B92] text-sm whitespace-nowrap">
                11 May, 2026 – Present
              </span>

            </div>

            {/* Description */}
            <p className="text-gray-500 leading-8 text-[16px]">
              Working as an HTML Intern handling web-related tasks,
              HTML content formatting, quality checking, and learning
              frontend workflow processes in a professional production
              environment.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;