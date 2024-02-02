import React from "react";
import Image from "next/image";

interface imageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  imageExtention: "jpg" | "png" | "svg" | "jpeg";
}

const ImageComponent = ({
  src,
  alt,
  width,
  height,
  imageExtention,
}: imageProps) => {
  const dynamicImgSrc = `/assets/img/${src}.${imageExtention}`;
  return (
    <Image
      src={dynamicImgSrc}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default ImageComponent;
