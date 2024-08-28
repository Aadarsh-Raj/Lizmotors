import React from "react";
import "./Style/frame2.css";
import { StroreFunction } from "../Store/store";
const Frame2 = () => {
  const { videoSrc } = StroreFunction();
  
  return (
    <>
      <div className="frame2-box">
        <video src={videoSrc} controls width={"100%"} height={"auto"} ></video>
      </div>
    </>
  );
};

export default Frame2;
