import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar backdrop-blur-md bg-white/30  fixed   z-40 rounded-xl top-3 ">
      <div className="flex-none ml-0 lg:ml-5">
        {/* <button className="btn text-white p-2 py-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button> */}
      </div>
      <div className="flex-1">
        <button>
          <a href="/" className="  btn-wide">
            {" "}
            <h1
              className="text-black btn btn-ghost normal-case text-base
          "
            >
              Kobir's <span className="text-violet-800"> Portfolio</span>
            </h1>
          </a>
        </button>
      </div>
      <div className=" lg:navbar-end lg:mr-10 text-black">
        <a
          href="/#email"
          className="btn btn-xs mx-1 btn-outline text-violet-800"
        >
          Contact Me
        </a>
        <NavLink to="blog" className="btn  btn-xs btn-outline text-violet-800">
          <button>BLOG</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
