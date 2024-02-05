import React from "react";

const skillDocs = [
  {
    id: "1",
    img: "https://i.ibb.co/hRCWNQp/pngegg-5.png",
    title: "HTML",
    percent: "90",
  },
  {
    id: "2",
    img: "https://i.ibb.co/XjHqHKZ/pngegg-6.png",
    title: "CSS",
    percent: "85",
  },
  {
    id: "3",
    img: "https://i.ibb.co/GQt1vrn/Bootstrap-logo-svg.png",
    title: "Bootstrap",
    percent: "85",
  },
  {
    id: "4",
    img: "https://i.ibb.co/6PqVNd1/pngaaa-com-3920388.png",
    title: "Tailwind",
    percent: "85",
  },
  {
    id: "5",
    img: "https://i.ibb.co/brWLMTR/pngegg-7.png",
    title: "Javascript",
    percent: "80",
  },
  {
    id: "6",
    img: "https://i.ibb.co/x3cZHd7/pngegg-8.png",
    title: "React.js",
    percent: "80",
  },
  {
    id: "7",
    img: "https://i.ibb.co/XFPkmMV/pngegg-9.png",
    title: "Firebase",
    percent: "80",
  },
  {
    id: "8",
    img: "https://i.ibb.co/3fjKM97/pngegg-11.png",
    title: "Node.js",
    percent: "70",
  },
  {
    id: "9",
    img: "https://i.ibb.co/mHktBCK/erkxwhl1gd48xfhe2yld.png",
    title: "MongoDB",
    percent: "70",
  },
  {
    id: "10",
    img: "https://i.ibb.co/J2T7LZB/Expressjs.png",
    title: "Express.js",
    percent: "70",
  },
];
const Skills = () => {
  return (
    <div className=" mx-48 my-20  relative ">
      <h1 className=" text-3xl text-center text-white my-7">Skills</h1>
      <div className=" absolute right-72 top-0">
        <div className=" absolute  top-20  left-54 w-96 mix-blend-overly h-96 filter opacity-60 animate-blob  blur-3xl bg-pink-300 rounded-full"></div>
        <div className=" absolute  top-96  left-40 w-72 h-96 mix-blend-overly filter opacity-60 animate-blob  blur-3xl bg-purple-300 rounded-full"></div>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-2">
        {skillDocs.map((item) => (
          <h1>
            {" "}
            <div
              data-aos="fade-left"
              className=" my-1 flex justify-center items-center"
            >
              <img
                className=" h-8  lg:h-full lg:w-20 lg:p-2 lg:rounded-full "
                src={item.img}
                alt=""
              />
              <div className=" ml-3">
                <div className=" flex   text-white justify-between">
                  <h1>{item.title}</h1>
                  <p>{item.percent}%</p>
                </div>
                <progress
                  className="progress progress-primary bg-white w-56"
                  value={item.percent}
                  max="100"
                ></progress>
              </div>
            </div>
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Skills;
