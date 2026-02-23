import React from "react";

const Employee = (props) => {
  const { username, skills, designation, salary } = props;
  return (
    <div className=" px-2 py-2 my-4 rounded-2xl font-bold text-2xl bg-amber-600">
     
      <h2>{username}</h2>
      <p>Designation: {designation}</p>
      <p>Salary: {salary}</p>
      <p>Skills: {skills.join(", ")}</p>
    
    </div>
  );
};

export default Employee;
