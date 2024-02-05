import React from "react";
import { Typewriter } from "react-simple-typewriter";
const Banner = () => {
  return (
    <div className="relative ">
      <div className="">
        <div className=" absolute  top-0  left-0  mix-blend-overlay w-72 h-72 opacity-70 animate-blob  filter blur-2xl bg-violet-300 rounded-full"></div>
        <div className=" absolute  top-24  left-40 w-96 mix-blend-overly h-96 filter opacity-70 animate-blob  blur-2xl bg-pink-300 rounded-full"></div>
        <div className=" absolute  top-20  left-10 w-72 h-72 mix-blend-overly filter opacity-70 animate-blob  blur-2xl bg-purple-300 rounded-full"></div>
      </div>

      <div className=" absolute right-72 top-68">
        <div className=" absolute  top-44  left-0  mix-blend-overlay w-96 h-96 opacity-70 animate-blob  filter blur-2xl bg-violet-300 rounded-full"></div>
        <div className=" absolute  top-0  left-54 w-72 mix-blend-overly h-72 filter opacity-70 animate-blob  blur-2xl bg-pink-300 rounded-full"></div>
        <div className=" absolute  top-48  left-40 w-72 h-72 mix-blend-overly filter opacity-70 animate-blob  blur-2xl bg-purple-300 rounded-full"></div>
      </div>

      <div id="banner" className="hero lg:min-h-screen  lg:mt-0 ">
        <div className="hero-content flex-col">
          <img
            data-aos="zoom-in"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            src="https://i.ibb.co/FJ1hX7t/Kobir.jpg"
            alt=""
            className="max-w-sm  w-72 lg:w-full shadow-lg rounded-lg  mask mask-squircle"
          />
          <div className="text-white text-center">
            <h1 data-aos="fade-right" className="text-4xl font-bold">
              Welcome To
              <span className="text-violet-600">
                {" "}
                <Typewriter
                  words={["Kobir's Portfolio."]}
                  loop={4}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>

            <p data-aos="fade-left" className="  text-xl font-bold  ">
              {" "}
              <Typewriter
                words={["I'm a MERN Stack Developer."]}
                loop={3}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </p>

            <button
              data-aos="zoom-in"
              className="btn hover:shadow-amber-50 shadow my-3 btn-primary"
            >
              <a
                href="https://drive.google.com/file/d/1FzhJ2UWJa6Cp5cHAJeJUuAikMry3CQ8d/view?usp=sharing"
                target="_blank"
              >
                Resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
