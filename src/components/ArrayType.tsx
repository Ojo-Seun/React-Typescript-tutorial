import React from "react";

type personProp = {
  names: {
    Fname: string;
    Lname: string;
  }[];
};

function ArrayType({ names }: personProp) {
  return (
    <div>
      {names.map((name, index) => {
        return (
          <h4 key={index}>
            {name.Fname} {name.Lname}
          </h4>
        );
      })}
    </div>
  );
}

export default ArrayType;
