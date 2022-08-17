import type React from "react";
import Heart from "@/assets/Heart";

interface IFooterProps {}

const Footer: React.FC<IFooterProps> = ({}) => {
  return (
    <div className="flex flex-col items-center space-y-6">
      <Heart width={20} className="fill-indigo-500 dark:fill-indigo-400" />
      <a
        href="https://www.herbievine.com"
        rel="noopener noreferrer"
        className="text-sm font-extrabold cursor-pointer"
      >
        a small blog by herbie vine
      </a>
    </div>
  );
};

export default Footer;
