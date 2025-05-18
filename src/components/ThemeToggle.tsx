
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useTheme } from "./ThemeProvider";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="relative overflow-hidden rounded-full hover:bg-primary/10 active:scale-95 transition-all"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            <span className="sr-only">Toggle theme</span>
            <div className="relative w-[1.2rem] h-[1.2rem]">
              <Sun className={`absolute h-[1.2rem] w-[1.2rem] transition-all duration-300 ${
                theme === 'dark' ? 'scale-100 rotate-0 opacity-100 text-yellow-500' : 'scale-0 rotate-90 opacity-0'
              }`} />
              <Moon className={`absolute h-[1.2rem] w-[1.2rem] transition-all duration-300 ${
                theme === 'light' ? 'scale-100 rotate-0 opacity-100 text-primary' : 'scale-0 rotate-90 opacity-0'
              }`} />
            </div>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Toggle {theme === "light" ? "dark" : "light"} mode</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ThemeToggle;
