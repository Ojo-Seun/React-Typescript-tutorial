import React from "react";

type listPropsTypes = {
  items: string[] | number[];
  delItem: (id: number) => void;
};

function GenericType({ items, delItem }: listPropsTypes) {
  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <span>{item}</span>
          <button type="button" onClick={() => delItem(index)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default GenericType;
