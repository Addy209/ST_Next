import React from "react";
import Image from "next/image";

const LazyImg = (props) => {
  return (
    <Image
      className={props.style}
      layout="fill"
      src={props.data}
      alt={props.alt}
      quality={60}
    />
  );
};

export default LazyImg;
