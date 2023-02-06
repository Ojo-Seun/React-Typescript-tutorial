import React from "react";

type props = {
  skills: string[];
};

function List({ skills }: props) {
  return (
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  );
}

export default List;
