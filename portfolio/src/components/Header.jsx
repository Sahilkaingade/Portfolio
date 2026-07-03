import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-5 sm:px-8 lg:px-10">
        
        {/* Logo */}
        <a
          href="#home"
          className="text-3xl font-bold text-black"
        >
          Sahil<span className="text-orange-500">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-gray-600 hover:text-orange-500 transition duration-300 font-medium"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <a href="#contact">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full transition duration-300">
              Hire Me
            </button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          {isOpen ? (
            <X size={30} className="text-black" />
          ) : (
            <Menu size={30} className="text-black" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white shadow-md ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-center py-4">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-500 transition"
            >
              {item.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-4"
          >
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-2 rounded-full transition duration-300">
              Hire Me
            </button>
          </a>
        </nav>
      </div>
    </header>
  );
}