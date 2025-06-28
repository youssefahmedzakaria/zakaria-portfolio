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
              <Button 
                variant="ghost" 
                size="icon" 
                className="relative overflow-hidden rounded-full h-10 w-10 bg-background/50 hover:bg-primary/10 hover:text-primary shadow-lg hover:shadow-xl transition-all duration-300 hover-lift"
              >
                <Sun className={`h-5 w-5 transition-all duration-300 ${theme === "light" ? "rotate-0 scale-100" : "rotate-90 scale-0 absolute"}`} />
                <Moon className={`h-5 w-5 transition-all duration-300 ${theme === "dark" ? "rotate-0 scale-100" : "rotate-90 scale-0 absolute"}`} />
                <Laptop className={`h-5 w-5 transition-all duration-300 ${theme === "system" ? "rotate-0 scale-100" : "rotate-90 scale-0 absolute"}`} />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent className="bg-background/95 backdrop-blur-md border border-border/50 shadow-lg">
            <p className="text-sm">Change theme</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DropdownMenuContent 
        align="end" 
        className="bg-background/95 backdrop-blur-md border border-border/50 shadow-xl"
      >
        <DropdownMenuItem 
          onClick={() => setTheme("light")}
          className="hover:bg-primary/5 hover:text-primary transition-all duration-200 cursor-pointer"
        >
          <Sun className="mr-3 h-4 w-4" />
          <span className="font-medium">Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("dark")}
          className="hover:bg-primary/5 hover:text-primary transition-all duration-200 cursor-pointer"
        >
          <Moon className="mr-3 h-4 w-4" />
          <span className="font-medium">Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("system")}
          className="hover:bg-primary/5 hover:text-primary transition-all duration-200 cursor-pointer"
        >
          <Laptop className="mr-3 h-4 w-4" />
          <span className="font-medium">System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeToggle;
