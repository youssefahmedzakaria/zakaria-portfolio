
import { Moon, Sun, Laptop } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "./ThemeProvider";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <DropdownMenu>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative overflow-hidden rounded-full">
                <Sun className={`h-[1.2rem] w-[1.2rem] transition-all ${theme === "light" ? "rotate-0 scale-100" : "rotate-90 scale-0 absolute"}`} />
                <Moon className={`h-[1.2rem] w-[1.2rem] transition-all ${theme === "dark" ? "rotate-0 scale-100" : "rotate-90 scale-0 absolute"}`} />
                <Laptop className={`h-[1.2rem] w-[1.2rem] transition-all ${theme === "system" ? "rotate-0 scale-100" : "rotate-90 scale-0 absolute"}`} />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>Change theme</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Laptop className="mr-2 h-4 w-4" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeToggle;
