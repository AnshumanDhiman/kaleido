import React from "react";

const About = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-16 bg-gray-100">
      <h1 className="text-center text-4xl font-extrabold text-[#4caf50] mb-8">
        About Kaleido UX
      </h1>
      <p className="text-lg text-gray-700 text-center">
        Kaleido UX is a cutting-edge platform offering a diverse range of GSAP
        React components, designed to enhance web development with seamless,
        responsive animations and intuitive user interfaces. Whether you're a
        developer, designer, or enthusiast, Kaleido UX empowers you to create
        dynamic, visually stunning experiences with ease.
      </p>
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-center text-[#4caf50]">
          Our Mission
        </h2>
        <p className="text-center text-gray-600 mt-4">
          Our goal is to make web design accessible and engaging for everyone by
          providing high-quality, reusable components that unlock creative
          potential and streamline the development process.
        </p>
      </div>
    </div>
  );
};

export default About;
