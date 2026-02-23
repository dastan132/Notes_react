import React from "react";
import Employee from "./Employee";

const Props = () => {
  const users = [
    {
      username: "Anshul",
      skills: ["Frontend", "Backend"],
      designation: "SDE-2",
      salary: "12.5 LPA",
    },
    {
      username: "Rahul",
      skills: ["DevOps", "Cloud"],
      designation: "SDE-1",
      salary: "8 LPA",
    },
    {
      username: "Priya",
      skills: ["UI/UX", "Frontend"],
      designation: "SDE-3",
      salary: "18 LPA",
    },
    {
      username: "Vikram",
      skills: ["Backend", "Database"],
      designation: "SDE-2",
      salary: "14 LPA",
    },
    {
      username: "Sneha",
      skills: ["ML", "Python"],
      designation: "Data Scientist",
      salary: "20 LPA",
    },
  ];

  return (
    <>
      {users.map((user, index) => (
        <Employee key={index} {...user} />
      ))}
    </>
  );
};

export default Props;