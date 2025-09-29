import React from "react";
const Hero = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 bg-blue-50">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Achieve Your <span className="text-blue-600">Dream IELTS Band</span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Join our expert-led IELTS preparation programs designed to help you
            score higher and study abroad confidently.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>

        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=800&q=80"
            alt="IELTS Preparation"
            className="rounded-2xl shadow-lg"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
