import { useTheme } from "next-themes";
import Link from "next/link";
import type React from "react";
import Moon from "src/assets/Moon";
import Star from "src/assets/Star";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  const { resolvedTheme: theme, setTheme } = useTheme();

  return (
    <div className="flex justify-between items-center">
      <Link href="/">
        <h2 className="font-black text-2xl cursor-pointer text-indigo-500 dark:text-indigo-400">
          reactive
        </h2>
      </Link>
      <button
        aria-label="theme selector"
        className="p-2 rounded-lg border-2 border-indigo-500 dark:border-indigo-400 bg-gray-200 dark:bg-gray-800"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <Moon width={18} className="fill-indigo-500 dark:fill-indigo-400" />
        ) : (
          <Star width={18} className="fill-indigo-500 dark:fill-indigo-400" />
        )}
      </button>
    </div>
  );
};

export default Header;
