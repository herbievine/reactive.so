import Link from "next/link";
import type React from "react";

interface HeaderProps {
  isHeader?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isHeader }) => {
  return (
    <div className="flex justify-between items-center">
      <Link href="/">
        {isHeader ? (
          <h1 className="font-black text-2xl cursor-pointer text-indigo-500 dark:text-indigo-400">
            reactive
          </h1>
        ) : (
          <h2 className="font-black text-2xl cursor-pointer text-indigo-500 dark:text-indigo-400">
            reactive
          </h2>
        )}
      </Link>
    </div>
  );
};

export default Header;
