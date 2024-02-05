import React from "react";
import { NavLink } from "react-router-dom";

const ProjectDetails = () => {
  const home = "< back";
  return (
    <div className=" min-h-screen text-white">
      <div className="carousel mt-4 w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/KLx4ZHF/Screenshot-76.png"
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
            src="https://i.ibb.co/12gKm06/Screenshot-65.png"
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
            src="https://i.ibb.co/31qhSQ7/Screenshot-77.png"
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
        <h1 className=" text-2xl font-bold my-2">Project Name: Cell Cart</h1>
        Overview:
        <h1 className=" my-1 text-lg">
          ⚪ 3 brands for buyers to choice ,my orders ,international payment
          gateway.
        </h1>
        <h1 className=" my-1 text-lg">
          ⚪ Seller can add a product,see my products,advertise a product and
          can also delete his/her product.{" "}
        </h1>
        <h1 className=" my-1 text-lg">
          ⚪ Admin can moderate all buyers,all sellers,all products and verify a
          seller.{" "}
        </h1>
        <p className=" text-base mt-8">
          Used Technologies: Tailwind css, ReactJS,ExpressJS,NodeJS,JWT,Firebase
          Authentication,MongoDB,TanStack Query,Stripe,Render.
        </p>
        <div className=" mb-20">
          <button className="btn btn-sm m-3">
            {" "}
            <a
              href="https://github.com/kobir0/cell-cart-client"
              target="_blank"
            >
              GitHub Client
            </a>
          </button>
          <button className="btn btn-sm m-3">
            {" "}
            <a
              href="https://github.com/kobir0/cell-cart-server"
              target="_blank"
            >
              GitHub Server
            </a>
          </button>
          <button className="btn btn-sm m-3">
            <a href="https://cell-cart-0.web.app/" target="_blank">
              Live Website
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
