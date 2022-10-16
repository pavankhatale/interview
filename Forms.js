import React, { useState } from "react";

const Forms = () => {
  const [val, setVal] = useState("");
  const [show, setShow] = useState([]);

  const inputs = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setVal((data) => ({
      ...data,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setShow((inp) => {
      return [...inp, val];
    });
    alert("Thank You! We Will Reach You Shortly");
  };

  const del =(index)=>{
    const action = [...show]
    action.splice(index,1)
    setShow(action)

  }

  return (
    <div className="main">
      <h3>React Form</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={val.fname}
          onChange={inputs}
          name="fname"
          placeholder="Name"
        />
        <input
          type="Password"
          value={val.password}
          onChange={inputs}
          name="password"
          placeholder="Password"
        />
        <input
          type="radio"
          value='Male'
          onChange={inputs}
          name="gender"
          id="male"
        />
        <label for="male">Male</label>
        <input type="radio" value='Female' onChange={inputs} name="gender" id="female" />
        <label for="female">
          Female
        </label>
        <input
          type="email"
          value={val.email}
          onChange={inputs}
          name="email"
          placeholder="Email"
        />
        <button type="submit" name="submit">
          Submit
        </button>
      </form>

      <table>
        <tr>
          <th>Sr.No.</th>
          <th>Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Action</th>
        </tr>
        {show.map((result, index) => {
          return (
            <tr key={index+1}>
              <td>{index + 1}</td>
              <td>{result.fname}</td>
              <td>{result.email}</td>
              <td>{result.gender}</td>
              <td onClick={del}><button>Delete</button></td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Forms;
