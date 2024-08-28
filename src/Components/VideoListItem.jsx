import React from 'react'
import { MdOndemandVideo } from "react-icons/md";
const VideoListItem = ({videoName}) => {
  return (
    <>
    <li className="video-list-item">
    <MdOndemandVideo /> {videoName}
    </li>
    </>
  )
}

export default VideoListItem
