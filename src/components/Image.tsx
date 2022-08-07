import type React from "react";
import NextImage from "next/future/image";

interface ImageProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {}

const Image: React.FC<ImageProps> = ({ src = "", alt, width, height }) => {
  return <NextImage {...{ src, alt, width, height }} />;
};

export default Image;
