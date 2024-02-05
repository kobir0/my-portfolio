import React from "react";
import { NavLink } from "react-router-dom";

const ProjectDetails2 = () => {
  const home = "< back";
  return (
    <div>
      <div className=" min-h-screen text-white">
        <div className="carousel mt-4 w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/n0y9R7d/Screenshot-72.png"
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
              src="https://i.ibb.co/McyFYyc/Screenshot-75.png"
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
              src="https://i.ibb.co/68XwFMj/Screenshot-73.png"
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
          <h1 className=" text-2xl font-bold my-2">Project Name: Medi Time</h1>
          Overview:
          <h1 className=" my-1 text-lg">
            ⚪ Initially six services about heart diseases.
          </h1>
          <h1 className=" my-1 text-lg">
            ⚪ To give a review ,modify a review ,delete a review,add a service.
          </h1>
          <h1 className=" my-1 text-lg">
            ⚪ Get an appointment , my appointments.
          </h1>
          <p className=" text-base mt-8">
            Tailwind Css, ReactJS,ExpressJS,NodeJS ,MongoDB,Firebase
            Authentication,Render.
          </p>
          <div className=" mb-20">
            <button className="btn btn-sm m-3">
              {" "}
              <a
                href="https://github.com/kobir0/medi-time-client"
                target="_blank"
              >
                GitHub Client
              </a>
            </button>
            <button className="btn btn-sm m-3">
              {" "}
              <a
                href="https://github.com/kobir0/medi-time-server"
                target="_blank"
              >
                GitHub Server
              </a>
            </button>
            <button className="btn btn-sm m-3">
              <a href="https://medi-time-1.web.app/" target="_blank">
                Live Website
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails2;
