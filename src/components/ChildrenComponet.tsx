import React from "react";

type childTypeComponent = {
  children: React.ReactNode;
};

function ChildrenComponet(props: childTypeComponent) {
  return <div>{props.children}</div>;
}

export default ChildrenComponet;
