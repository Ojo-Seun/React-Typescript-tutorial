import React from "react";

type functionTypeVoid = {
  handleClick: () => void;
};

type functionTypeEvent = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
function FunctionAsProp(props: functionTypeEvent) {
  return (
    <div>
      <button onClick={props.handleClick}>ActivateFromParent</button>
    </div>
  );
}

export default FunctionAsProp;
