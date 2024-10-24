import React from "react";

function HeroSection() {
  return (
    <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('path-to-your-hero-image')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-5xl text-white font-bold">Wonder that is India</h1>
      </div>
    </div>
  );
}

export default HeroSection;
