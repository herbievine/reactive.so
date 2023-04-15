import type React from "react";
import NextImage from "next/image";

interface ImageProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {}

const Image: React.FC<ImageProps> = ({ src = "", alt = "", ...props }) => {
  return <NextImage {...{ src, alt, props }} quality={100} />;
};

export default Image;
