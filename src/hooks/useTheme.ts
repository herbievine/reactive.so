import { useContext } from "react";
import { ThemeContext, ThemeContextProps } from "src/contexts/Theme";

const useTheme = (): Required<ThemeContextProps> => {
  const theme = useContext(ThemeContext);

  if (!theme.theme || !theme.setTheme) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return theme as Required<ThemeContextProps>;
};

export { useTheme };
