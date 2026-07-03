import React from "react";

const skillsLeft = [
  {
    name: "HTML",
    percentage: 90,
  },
  {
    name: "JavaScript",
    percentage: 80,
  },
  {
    name: "Tailwind CSS",
    percentage: 85,
  },
];

const skillsRight = [
  {
    name: "CSS",
    percentage: 85,
  },
  {
    name: "React.js",
    percentage: 78,
  },
  {
    name: "MongoDB",
    percentage: 70,
  },
];

const technologies = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Tailwind CSS",
  "MongoDB",
  "Git",
  "GitHub",
  "REST APIs",
  "CRUD Operations",
];

const SkillBar = ({ skill }) => (
  <div className="mb-10">
    <div className="flex justify-between items-center mb-2">
      <h3 className="text-[17px] font-medium text-[#0B1E59]">
        {skill.name}
      </h3>

      <span className="text-[16px] font-semibold text-[#ff6b00]">
        {skill.percentage}%
      </span>
    </div>

    <div className="w-full h-[8px] rounded-full bg-gray-200 overflow-hidden">
      <div
        className="h-full bg-[#ff6b00] rounded-full"
        style={{ width: `${skill.percentage}%` }}
      ></div>
    </div>
  </div>
);

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-[#f7f8fc] py-20 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-7 h-[2px] bg-[#ff6b00]"></span>

            <p className="uppercase tracking-[3px] text-[#ff6b00] text-xs font-semibold">
              WHAT I KNOW
            </p>
          </div>

          <h2 className="text-4xl font-bold text-[#0B1E59]">
            Areas of Expertise
          </h2>
        </div>

        {/* Skills */}
        <div className="grid md:grid-cols-2 gap-x-10">

          <div>
            {skillsLeft.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>

          <div>
            {skillsRight.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>

        </div>

        {/* Technology Pills */}
        <div className="flex flex-wrap gap-4 mt-8">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="
                px-6
                py-2
                rounded-full
                bg-white
                border
                border-gray-200
                text-gray-600
                text-[15px]
                shadow-sm
                hover:border-[#ff6b00]
                hover:text-[#ff6b00]
                transition-all
                duration-300
                cursor-pointer
              "
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;