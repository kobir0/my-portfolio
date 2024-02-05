import React from "react";

const Background = () => {
  return (
    <div className="">
      {" "}
      <svg
        id="visual"
        viewBox="0 0 1366 768"
        width="1366"
        height="768"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <defs>
          <filter id="blur1" x="-10%" y="-10%" width="120%" height="120%">
            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              stdDeviation="233"
              result="effect1_foregroundBlur"
            ></feGaussianBlur>
          </filter>
        </defs>
        <rect width="1366" height="768" fill="#000000"></rect>
        <g filter="url(#blur1)">
          <circle cx="1064" cy="315" fill="#00e8ae" r="517"></circle>
          <circle cx="572" cy="518" fill="#000000" r="517"></circle>
          <circle cx="128" cy="348" fill="#00e8ae" r="517"></circle>
          <circle cx="246" cy="658" fill="#00e8ae" r="517"></circle>
          <circle cx="908" cy="687" fill="#000000" r="517"></circle>
          <circle cx="773" cy="111" fill="#00e8ae" r="517"></circle>
        </g>
      </svg>
    </div>
  );
};

export default Background;
