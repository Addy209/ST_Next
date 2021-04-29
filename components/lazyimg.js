import React from "react";

const LazyImg = (props) => {
  return <img className={props.style} src={props.data} alt={props.alt} />;
};

export default LazyImg;
