import React from "react";
import { NavLink } from "react-router-dom";

const ProjectDetails3 = () => {
  const home = "< back";
  return (
    <div>
      <div className=" min-h-screen text-white">
        <div className="carousel mt-4 w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/3m7bCSn/Screenshot-69.png"
              className="w-3/4   mx-auto"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/rdkW8jw/Screenshot-70.png"
              className="w-3/4  mx-auto"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/nbw3kXV/Screenshot-71.png"
              className="w-3/4   mx-auto"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
        <NavLink to="../">
          <button className=" btn btn-sm mt-3">{home} </button>
        </NavLink>
        <div className=" text-center">
          <h1 className=" text-2xl font-bold my-2">Project Name: E Academy </h1>
          Overview:
          <h1 className=" my-1 text-lg">⚪ Online courses in 6 category .</h1>
          <h1 className=" my-1 text-lg">
            ⚪ Private check out page only registered user can buy courses .
          </h1>
          <h1 className=" my-1 text-lg">
            ⚪ User can log in via Google and GitHub or Email and Password and
            also have a registration form.
          </h1>
          <p className=" text-base mt-8">
            ReactJS, ExpressJs ,NodeJS,Firebase Authentication,Vercel.
          </p>
          <div className=" mb-20">
            <button className="btn btn-sm m-3">
              {" "}
              <a
                href="https://github.com/kobir0/e-academy-client"
                target="_blank"
              >
                GitHub Client
              </a>
            </button>
            <button className="btn btn-sm m-3">
              {" "}
              <a
                href="https://github.com/kobir0/e-academy-server"
                target="_blank"
              >
                GitHub Server
              </a>
            </button>
            <button className="btn btn-sm m-3">
              <a href="https://e-academy-bd492.web.app/" target="_blank">
                Live Website
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails3;
