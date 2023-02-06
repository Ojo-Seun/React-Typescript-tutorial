import React from "react";

type personProp = {
  name: {
    Fname: string;
    Lname: string;
  };
};

function ObjectType(props: personProp) {
  return (
    <div>
      Welcom {props.name.Fname} {props.name.Lname}
    </div>
  );
}

export default ObjectType;
