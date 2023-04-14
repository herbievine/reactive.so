import type React from "react";
import NextImage from "next/future/image";
import getBaseUrl from "@/lib/getBaseUrl";

interface ImageProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {}

const Image: React.FC<ImageProps> = ({ src = "", alt, width, height }) => {
  return (
    <NextImage
      {...{ src: getBaseUrl() + src, alt, width, height }}
      quality={100}
    />
  );
};

export default Image;
