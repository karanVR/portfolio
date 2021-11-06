import React from "react";
import { BsCode, BsCodeSlash, BsChevronLeft, BsChevronRight, BsSlashLg } from "react-icons/bs";

const About = () => {
  return (
    <div className="md:flex justify-between items-center px-10 py-16 text-center items-center">
      <div className="md:w-1/2 mb-4 lg:mb-0">

        {/* <BsChevronLeft className='text-3xl inline' /><a className='m-4 text-purple-800 hover:text-black px-4 py-2 bg-purple-400 hover:bg-white rounded font-semibold transition ease-in duration-150' href="https://github.com/karanVR/portfolio">See source code for this site</a>
        <BsSlashLg className='text-3xl inline'/><BsChevronRight className='text-3xl inline' /> */}
        
        <h1 className="text-6xl lg:text-7xl text-white font-semibold">
        <BsCode className='sm:text-3xl text-6xl inline'/> Hi! I am Karan.
        </h1>
        <h1 className="sm:text-2xl text-4xl text-white font-semibold mb-6">
          I am a frontend Developer and I love to build amazing apps <BsCodeSlash className='sm:text-3xl text-6xl inline'/>
        </h1>
        <p className="mb-6">
          I am a software developer specializing in frontend Development, This
          is my developer portfolio website
       </p>

        <a
          className="sm:mb-2 px-4 py-2 mr-4 bg-purple-300 hover:bg-purple-200 rounded text-purple-800 hover:text-purple-900 text-xl transition ease-in duration-150"
          href="#contact"
        >
          Work with me
        </a>

        <a
          className="sm:mb-2 px-4 py-2  bg-gray-700 hover:bg-gray-600 rounded text-gray-300 hover:text-gray-50 text-xl transition ease-in duration-150"
          href="#projects"
        >
          See my past work
        </a>
      </div>

      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 items-center">
        <img
            className="object-cover object-center rounded"
            alt="hero"
            src='./IMG_3345.JPG'
          />
      </div>
    </div>
  );
};

export default About;
