import {
  useContext,
  createContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type ThemeType = "light" | "dark";

interface ThemeContextProps {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeType>("light");

  useEffect(() => {
    // Check if window is available (only runs in the browser)
    if (typeof window !== "undefined") {
      // Detect system preference for dark mode in the browser
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(systemPrefersDark ? "dark" : "light");

      // Update document class when theme changes
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(
        systemPrefersDark ? "dark" : "light"
      );
    }
  }, []);

  // Update document class when theme changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
