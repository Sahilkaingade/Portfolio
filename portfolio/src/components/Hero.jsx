import React from "react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f8fafc]">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Left Blur */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-blue-200/30 blur-[120px]" />

      {/* Right Blur */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-orange-200/30 blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Top Text */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-[2px] bg-orange-500" />
          <span className="text-orange-500 font-semibold tracking-[3px] text-sm uppercase">
            I Am Web Developer
          </span>
          <div className="w-16 h-[2px] bg-orange-500" />
        </div>

        {/* Heading */}
        <h1 className="text-[3rem] md:text-[4rem] font-bold leading-none text-[#08153f]">
          Hi, I'm <span className="text-orange-500">Sahil</span>
          <br />
          Kaingade
        </h1>

        {/* Description */}
        <p className="max-w-3xl mx-auto mt-10 text-lg leading-relaxed text-slate-600">
          Full-stack web developer passionate about building responsive,
          user-friendly applications. Currently interning at Maxval
          Technologies and completing a BSc IT with a 9.42 CGPA.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-5 mt-12">
          {/* Download CV */}
          <a
            href="/Resume_Sahil_Developer.pdf"
            download
            className="flex items-center justify-center px-8 py-4 bg-orange-500 text-white rounded-xl font-semibold text-lg shadow-lg hover:bg-orange-600 transition"
          >
            Download My CV
          </a>
          {/* View Projects  */}
          <a
            href="#projects"
            className="flex items-center justify-center px-8 py-4 border border-gray-300 rounded-xl font-semibold text-[#08153f] hover:bg-white transition"
          >
            View Projects
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-12 md:gap-20 mt-12">
          <div>
            <h3 className="text-2xl font-bold text-orange-500">9.42</h3>
            <p className="text-slate-500 mt-2">CGPA</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-orange-500">10+</h3>
            <p className="text-slate-500 mt-2">Projects</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-orange-500">Intern</h3>
            <p className="text-slate-500 mt-2">@ Maxval Tech</p>
          </div>
        </div>
      </div>
    </section>
  );
}