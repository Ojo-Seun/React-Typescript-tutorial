import React from "react";

type nameType = {
  name: string;
  messageCount?: number;
  isLogin: boolean;
};

function Greeting(props: nameType) {
  const { messageCount = 0 } = props;
  return (
    <div>
      {props.isLogin ? (
        <span>
          Hello {props.name} you have {messageCount} unread messages
        </span>
      ) : (
        <span>Please login</span>
      )}
    </div>
  );
}

export default Greeting;
