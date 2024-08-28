import React from "react";
import "./Style/content.css";
import Frame1 from "./Frame1";
import Frame2 from "./Frame2";
const Content = () => {
  return (
    <>
      <div className="content-container">
        <Frame1 />
        <Frame2 />
      </div>
    </>
  );
};

export default Content;
