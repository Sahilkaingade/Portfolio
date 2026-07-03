import React from "react";
import { FiAward } from "react-icons/fi";

const education = [
  {
    institute: "Vidyalankar School of Information Technology",
    degree: "Bachelor of Science in Information Technology (BSc IT)",
    score: "CGPA: 9.42",
    year: "2023 – 2026",
    highlight: true,
  },
  {
    institute: "Sanpada College of Commerce and Science",
    degree: "Higher Secondary Certificate (HSC) in Science",
    score: "59.33%",
    year: "2021 – 2023",
  },
  {
    institute: "Padua High School",
    degree: "Secondary School Certificate (SSC)",
    score: "77.60%",
    year: "2021",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="bg-[#f7f8fc] py-20 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-7 h-[2px] bg-[#ff6b00]"></span>

            <p className="uppercase tracking-[3px] text-[#ff6b00] text-xs font-semibold">
              Academic
            </p>
          </div>

          <h2 className="text-4xl font-bold text-[#0B1E59]">
            Education
          </h2>
        </div>

        {/* Cards */}
        <div className="space-y-7">

          {education.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl p-7 flex justify-between items-start border shadow-sm hover:shadow-md transition-all duration-300
              ${
                item.highlight
                  ? "border-orange-300"
                  : "border-gray-200"
              }`}
            >
              <div className="flex gap-5">

                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center shrink-0">
                  <FiAward className="text-[#ff6b00] text-xl" />
                </div>

                {/* Content */}
                <div>
                  <p className="text-[16px] text-[#5B6B92] mb-1">
                    {item.institute}
                  </p>

                  <h3 className="text-[18px] font-bold text-[#0B1E59] mb-3">
                    {item.degree}
                  </h3>

                  <p
                    className={`font-semibold text-base ${
                      item.highlight
                        ? "text-[#ff6b00]"
                        : "text-[#5B6B92]"
                    }`}
                  >
                    {item.score}
                  </p>
                </div>
              </div>

              {/* Year */}
              <p className="text-[#5B6B92] text-base whitespace-nowrap ml-5">
                {item.year}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Education;