import React from "react";
import "./Style/librarylistitem.css";
import { PiCaretCircleDoubleDownBold } from "react-icons/pi";
import VideoListItem from "./VideoListItem";

const LibraryListItem = ({ title, videos }) => {
  console.log(videos);
  return (
    <>
      <li className="library-list-item">
        <div className="library-list-header">
          <div className="list-title">{title}</div>
          <div className="open-icon">
            <PiCaretCircleDoubleDownBold />
          </div>
        </div>
        <div className="videos-list-items">
          {videos.map((ele) => (
            <VideoListItem
              key={ele._id}
              videoName={ele.videoName}
              src={ele.videoLink}
            />
          ))}
        </div>
      </li>
    </>
  );
};

export default LibraryListItem;
