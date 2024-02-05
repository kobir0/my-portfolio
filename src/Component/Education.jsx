import React from "react";
import webdev from "../webdev.json";
import Lottie from "lottie-react";
const Education = () => {
  return (
    <div className=" my-20 ">
      <h1 className=" text-3xl text-center text-white my-7">About Me</h1>

      <div className=" lg:flex  lg:justify-center lg:items-center">
        <div className="">
          <Lottie
            className=" w-92% lg:w-5/6 rounded-lg   mx-auto my-auto"
            data-aos="fade-right"
            animationData={webdev}
          ></Lottie>
        </div>

        <div data-aos="fade-left" className="  w-full lg:my-0">
          <p className=" text-sm px-10">
            I have more than a year of experience as a MERN Stack developer . I
            have developed some projects using MERN stack technology .I have
            also included those projects details in my resume you can check it
            out . These are very easy to use and user friendly websites and also
            focused on user experience.
          </p>

          <div className=" grid m-10  grid-cols-3 gap-2">
            <div className="  ">
              <div className=" ">
                <h1 className=" text-white text-4xl font-bold">01+</h1>
                <p className="text-violet-400">year of experience </p>
              </div>
            </div>
            <div className="   ">
              <div className=" ">
                <h1 className=" text-white text-4xl font-bold">10+</h1>
                <p className="text-violet-400">projects completed </p>
              </div>
            </div>
            <div className="   ">
              <div className=" ">
                <h1 className=" text-white text-4xl font-bold">01</h1>
                <p className="text-violet-400">course completed</p>
              </div>
            </div>
          </div>

          <div className=" m-10 gap-5 grid grid-cols-2">
            <div>
              <h1 className=" text-2xl   text-violet-400  ">Education</h1>
              <h1 className=" text-lg">Rajshahi Polytechnic Institute </h1>
              <p className=" text-base">Diploma in Computer Science</p>
              <p className="text-sm"> (Jun 2019-present)</p>
            </div>
            <div>
              <h1 className=" text-2xl   text-violet-400  ">
                Extra Curricular
              </h1>

              <h1 className=" text-lg">Natore Youth Blood Donor Group </h1>
              <p className=" text-base">Volunteer -Central Unit</p>
              <p className="text-sm">Aug 2019 - Present </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
