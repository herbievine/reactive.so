import Link from "next/link";
import type React from "react";
import Heart from "src/assets/Heart";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div className="flex flex-col items-center space-y-6">
      <Heart width={20} className="fill-indigo-500 dark:fill-indigo-400" />
      <Link href="https://www.herbievine.com">
        <span className="text-sm font-extrabold cursor-pointer">
          by herbie vine
        </span>
      </Link>
    </div>
  );
};

export default Footer;
