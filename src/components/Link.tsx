import type React from "react";
import NextLink from "next/link";

interface LinkProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  internal: boolean;
}

const Link: React.FC<LinkProps> = ({ href = "", children }) => {
  return <NextLink {...{ href }}>{children}</NextLink>;
};

export default Link;
