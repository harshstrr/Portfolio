import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
        
       I am a full stack web developer, working across both frontend and backend development. I’m focused on continuously improving my skills and learning modern technologies while building real-world applications. I’m open to working with different web stacks and currently take on freelance and personal projects.
       I enjoy building things from scratch and turning ideas into functional, polished products. I care about clean code, performance, and creating experiences that feel natural to use. If you have an idea or a project in mind, I enjoy collaborating to bring it to life.<br /><br />
       I value minimal design, clear structure, and thoughtful user experience. My goal is to build applications that not only look good but also communicate clearly and work smoothly across devices.
       <br />
       I also enjoy shaping a strong digital identity for products and services, improving visibility through modern web practices, and helping projects reach the right audience through clean architecture and smart presentation.</p>
      </div>
    </div>
  );
};

export default About;
