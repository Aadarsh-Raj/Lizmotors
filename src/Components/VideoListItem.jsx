import React from "react";
import { MdOndemandVideo } from "react-icons/md";
import { StroreFunction } from "../Store/store";
const VideoListItem = ({ videoName, src }) => {
  const { videoSrc, setVideoSrc } = StroreFunction();
  const changeVideoSrc = () => {
    setVideoSrc(src);
  };
  return (
    <>
      <li className="video-list-item" onClick={changeVideoSrc}>
        <MdOndemandVideo /> {videoName}
      </li>
    </>
  );
};

export default VideoListItem;
