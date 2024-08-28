import React, { useEffect, useState } from "react";
import "./Style/frame1.css";
import LibraryListItem from "./LibraryListItem";
const Frame1 = () => {
  const [libraryList, setLibraryList] = useState([]);
  useEffect(() => {
    fetchLibrary();
  }, []);
  const fetchLibrary = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/library/all");
      const data = await response.json();
      setLibraryList(data.library);
      console.log(libraryList);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="frame1-box">
        <div className="frame1-header">
          <div className="library-header">Library</div>
          <div className="progress-header">Progress</div>
        </div>
        <div className="frame1-content-box">
          {libraryList.map((ele, index) => (
            <LibraryListItem
              key={ele._id}
              title={ele.name}
              videos={ele.videos}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Frame1;
