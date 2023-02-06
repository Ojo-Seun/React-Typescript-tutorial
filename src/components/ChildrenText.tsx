import React from "react";

type childType = {
  children: string;
};

function ChildrenText(props: childType) {
  return <div>{props.children}</div>;
}

export default ChildrenText;
