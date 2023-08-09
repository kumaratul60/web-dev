import React, { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resMenuInfo, setResMenuInfo] = useState(null);

  // fetch data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const fetchRes = await fetch(MENU_API + resId);
    const res = await fetchRes.json();
    setResMenuInfo(res.data);
    console.log({ resCustomData: res });
  };

  return resMenuInfo;
};
export default useRestaurantMenu;
