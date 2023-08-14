import { useEffect, useState } from "react";
const User = ({ name }) => {
  const [count] = useState(0);
  const [count2] = useState(1);

  const [count3, count4] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("setInterval");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [count3]);

  return (
    <div className="user-card">
      <h2>Count: {count}</h2>
      <h2>Count2: {count2}</h2>
      <h2>Name:{name}</h2>
      <h3>Location:UttarPardesh</h3>
      <h4>Contact: @atulkawasthi</h4>
    </div>
  );
};
export default User;
