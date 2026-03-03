import React, { useState } from "react";

const ControlledForm2 = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    course: "",
  });
  

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleform = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      username: "",
      email: "",
      password: "",
      course: "",
    });
    
  };

  return (
    <div>
      <form onSubmit={handleform} className="form">
        <div>
          <input
            type="text"
            placeholder="your name"
            name="username"
            value={username}
            onChange={handleInput}
          />
        </div>

        <div>
          <input
            type="email"
            placeholder="your email"
            name="email"
            value={email}
            onChange={handleInput}
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="enter your password"
            name="password"
            value={password}
            onChange={handleInput}
          />
        </div>

        <div>
          <label htmlFor="">Select your course</label>
          <select name="course" value={course} onChange={handleInput}>
            <option value="">Select</option>
            <option value="B.Tech">B.Tech</option>
            <option value="MCA">MCA</option>
            <option value="BCA">BCA</option>
            <option value="M.TECH">M.TECH</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ControlledForm2;
