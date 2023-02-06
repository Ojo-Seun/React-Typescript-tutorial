import React from "react";

type unionType = {
  status: "Loading" | "Success" | "Error";
};

function UnionType({ status }: unionType) {
  let message = "";
  if (status === "Loading") {
    message = "Loading.....";
  } else if (status === "Success") {
    message = "Success";
  } else {
    message = "Error occured";
  }
  return <div>{message}</div>;
}

export default UnionType;
