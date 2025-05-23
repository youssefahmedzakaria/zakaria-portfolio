import { createContext, useContext, useEffect, useState, ReactNode } from "react";

// Define the theme context and its types
type Theme = "light" | "dark" | "system";

type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

// Create the theme context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Theme colors
const themes = {
  light: {
    primary: "hsl(240 5.9% 10%)",
    primaryForeground: "hsl(0 0% 98%)",
    secondary: "hsl(240 4.8% 95.9%)",
    secondaryForeground: "hsl(240 5.9% 10%)",
    accent: "hsl(240 4.8% 95.9%)",
    accentForeground: "hsl(240 5.9% 10%)",
    background: "hsl(0 0% 100%)",
    foreground: "hsl(240 10% 3.9%)",
    border: "hsl(240 5.9% 90%)",
    muted: "hsl(240 4.8% 95.9%)",
    mutedForeground: "hsl(240 3.8% 46.1%)",
  },
  dark: {
    primary: "hsl(0 0% 98%)",
    primaryForeground: "hsl(240 5.9% 10%)",
    secondary: "hsl(240 3.7% 15.9%)",
    secondaryForeground: "hsl(0 0% 98%)",
    accent: "hsl(240 3.7% 15.9%)",
    accentForeground: "hsl(0 0% 98%)",
    background: "hsl(240 10% 3.9%)",
    foreground: "hsl(0 0% 98%)",
    border: "hsl(240 3.7% 15.9%)",
    muted: "hsl(240 3.7% 15.9%)",
    mutedForeground: "hsl(240 5% 64.9%)",
  },
};

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove existing class
    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  // Store theme preference in local storage
  useEffect(() => {
    localStorage.setItem(storageKey, theme);
  }, [theme, storageKey]);

  // Listen for system preference changes
  useEffect(() => {
    if (theme !== "system") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    
    const handleChange = () => {
      document.documentElement.classList.toggle("dark", mediaQuery.matches);
      document.documentElement.classList.toggle("light", !mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      setTheme(theme);
    },
  };

  return (
    <ThemeContext.Provider value={value} {...props}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};