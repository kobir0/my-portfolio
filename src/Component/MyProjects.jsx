import React from "react";
import { NavLink } from "react-router-dom";

const MyProjects = () => {
  return (
    <div className=" text-white relative m-16">
      <div className=" absolute top-0">
        <div className=" absolute  top-20  left-54 w-96 mix-blend-overly h-96 filter opacity-60 animate-blob  blur-3xl bg-pink-300 rounded-full"></div>
        <div className=" absolute  top-96  left-40 w-72 h-96 mix-blend-overly filter opacity-60 animate-blob  blur-3xl bg-purple-300 rounded-full"></div>
      </div>

      <div className=" absolute    block lg:hidden  right-72 top-96">
        <div className=" absolute  top-full  left-54 w-96 mix-blend-overly h-96 filter opacity-60 animate-blob  blur-3xl bg-pink-300 rounded-full"></div>
        <div className=" absolute  top-96  left-40 w-72 h-96 mix-blend-overly filter opacity-60 animate-blob  blur-3xl bg-purple-300 rounded-full"></div>
      </div>
      <h1 className=" text-3xl text-center text-white ">My Recent Projects</h1>
      <div className="grid mt-16 gap-3 grid-cols-1 lg:grid-cols-3">
        <div
          data-aos="zoom-in"
          className="card w-68  cursor-pointer shadow-lg backdrop-blur-lg border border-violet-300"
        >
          <figure>
            <img
              src="https://i.ibb.co/12gKm06/Screenshot-65.png"
              alt="Cell-cart"
              className="h-48"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-center">Cell Cart</h2>
            <p className=" text-lg font-semibold ">
              Pre owned smartphone buy/sell platform.
            </p>

            <div className="card-actions justify-between">
              <NavLink to="/cellcart">
                <button className="btn btn-sm glass">Details</button>
              </NavLink>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          className="card w-68 cursor-pointer shadow-lg backdrop-blur-lg border border-violet-300"
        >
          <figure>
            <img
              src="https://i.ibb.co/jGx71KL/Screenshot-66.png"
              alt="Medi Time"
              className=" h-48"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-center">Medi Time</h2>
            <p className=" text-lg font-semibold ">A doctor's service.</p>

            <div className="card-actions justify-between">
              <NavLink to="/meditime">
                <button className="btn btn-sm glass">Details</button>
              </NavLink>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          className="card cursor-pointer w-68 shadow-lg backdrop-blur-lg border border-violet-300 "
        >
          <figure>
            <img
              src="https://i.ibb.co/MnMnDP8/Screenshot-67.png"
              alt="E Academy"
              className="h-48"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-center">E Academy</h2>
            <p className=" text-lg font-semibold ">
              Online based learning platform.
            </p>

            <div className="card-actions justify-between">
              <NavLink to="/eacademy">
                <button className="btn btn-sm glass">Details</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
