import Link from "next/link";
import type React from "react";
import Heart from "src/assets/Heart";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div className="flex flex-col items-center space-y-6">
      <Heart width={20} className="fill-indigo-500 dark:fill-indigo-400" />
      <a
        href="https://www.herbievine.com"
        className="text-sm font-extrabold cursor-pointer"
      >
        a small blog by herbie vine
      </a>
    </div>
  );
};

export default Footer;
