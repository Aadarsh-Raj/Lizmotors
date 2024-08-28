import { createContext, useContext, useEffect, useState } from "react";
const StoreController = createContext({});

export const StroreFunction = () => {
  return useContext(StoreController);
};

const StoreContext = (props) => {
  const [user, setUser] = useState("Anonymous");
  const [videoSrc, setVideoSrc] = useState("https://res.cloudinary.com/dbykv2xgd/video/upload/v1724826334/uploads/samplevideo_1280x720_1mb125e10ad.mp4")
  const functionObject = {
    user,
    setUser,
    videoSrc, setVideoSrc,
    
  };
  return (
    <StoreController.Provider value={functionObject}>
      {props.children}
    </StoreController.Provider>
  );
};

export default StoreContext;
