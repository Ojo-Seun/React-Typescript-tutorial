import React from "react";

type cssPropsType = {
  style: React.CSSProperties;
};

function StyleAsProps(props: cssPropsType) {
  return <div style={props.style}>StyleAsProps</div>;
}

export default StyleAsProps;
