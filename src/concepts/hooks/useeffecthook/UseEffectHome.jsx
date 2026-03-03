import React, { useEffect, useState } from "react";

const UseEffectHome = () => {
  const [count, setCount] = useState(0);
  const [val, setVal] = useState(10);
  const fdata = () => {
    console.log("fdata function");
  };
  // useEffect(()=>{
  //     fdata()
  // },[])
  // useEffect(()=>{
  //     fdata()
  // },[count,val])
  useEffect(() => {
    fdata();
  });
  return (
    <div>
      <h1>UseEffectHookHome</h1>
      <h2>{count}</h2>
      <h2>{val}</h2>
      <button onClick={() => setCount(count + 1)}>Update</button>
      <button onClick={() => setVal(val + 1)}>Update</button>
    </div>
  );
};

export default UseEffectHome;
