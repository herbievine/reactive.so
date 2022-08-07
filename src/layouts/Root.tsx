import { useTheme } from "next-themes";
import type React from "react";

interface RootProps {
  children: React.ReactNode;
}

const Root: React.FC<RootProps> = ({ children }) => {
  const { resolvedTheme: theme } = useTheme();

  return (
    <div className={theme}>
      <div className="w-full min-h-screen bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200 transition-colors duration-300">
        <div className="w-5/6 max-w-2xl mx-auto py-12 space-y-12">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Root;
