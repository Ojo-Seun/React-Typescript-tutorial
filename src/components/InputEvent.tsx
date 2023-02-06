import React, { ChangeEvent } from "react";

type functionPropsTypes = {
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
};

function InputEvent({ value, handleChange, handleClick }: functionPropsTypes) {
  return (
    <div>
      <input type="text" value={value} required onChange={handleChange} />
      <button type="button" onClick={handleClick}>
        Click
      </button>
    </div>
  );
}

export default InputEvent;
