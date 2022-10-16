import React, { useState } from "react";

const msg = "age should geater than 18";
const Validinput = () => {
  const [inp, setInp] = useState("");
  const [err, setErr] = useState(false);

  const handleChange = (e) => {
    setErr(false)
    console.log(e.target.value);
    setInp(e.target.value);
    if (e.target.value < 18) {
      setErr(true)
    } 
  };
  return (
    <div>
      <input value={inp} onChange={handleChange} />
      <p>{err ? msg : null}</p>
    </div>
  );
};

export default Validinput;
