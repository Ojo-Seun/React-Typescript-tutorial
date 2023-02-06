import React from "react";

const handleClick = () => {
  alert("Button Clicked");
};

function HandleEvent() {
  return (
    <div>
      <button type="button" onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default HandleEvent;
