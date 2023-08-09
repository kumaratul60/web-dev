import React, { useState, useEffect } from "react";

//  to start with a custom utility function function think about input & there output

const useOnlineStatus = () => {
  // window.navigator.onLine
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", setOffLine);
    window.addEventListener("online", setOnLine);

    // cleanup if we unmount
    return () => {
      window.removeEventListener("offline", setOffLine);
      window.removeEventListener("online", setOnLine);
    };
  }, []);

  const setOffLine = () => {
    setOnlineStatus(!onlineStatus);
  };
  const setOnLine = () => {
    setOnlineStatus(onlineStatus);
  };

  return onlineStatus;
};

export default useOnlineStatus;
