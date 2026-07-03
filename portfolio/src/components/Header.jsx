import React from 'react'

export default function Header() {
  return (
    <div className="h-20 flex justify-between items-center px-10 py-5 shadow-md sticky top-0 bg-white z-50">
      <div className="text-3xl font-bold text-[#000000]">
        Sahil<span className="text-[#f97316]">.</span>
      </div>
      <div>
        <ul className="flex gap-7 text-sm">
          <li className="text-[#5a6a8a] hover:text-[#f97316] cursor-pointer">Home</li>
          <li className="text-[#5a6a8a] hover:text-[#f97316] cursor-pointer">About</li>
          <li className="text-[#5a6a8a] hover:text-[#f97316] cursor-pointer">Skills</li>
          <li className="text-[#5a6a8a] hover:text-[#f97316] cursor-pointer">Projects</li>
          <li className="text-[#5a6a8a] hover:text-[#f97316] cursor-pointer">Experience</li>
          <li className="text-[#5a6a8a] hover:text-[#f97316] cursor-pointer">Education</li>
          <li className="text-[#5a6a8a] hover:text-[#f97316] cursor-pointer">Contact</li>
        </ul>
      </div>
      <div>
        <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded-2xl h-10 w-28">
          Hire ME
        </button>
      </div>
    </div>
  )
}
