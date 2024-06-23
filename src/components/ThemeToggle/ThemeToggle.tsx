import { Sun, Moon } from "lucide-react";
import { useShallow } from "zustand/react/shallow";

import { useThemeStore } from "../../store/theme";

import { Menu, MenuItem, MenuPopover, MenuTrigger } from "@/components/ui/menu";
import { Button } from "../ui/button";

const ThemeToggle = (): JSX.Element => {
  const [setTheme] = useThemeStore(useShallow((state) => [state.setTheme]));

  return (
    <MenuTrigger>
      <Button aria-label="Menu" size="icon">
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
      <MenuPopover className="min-w-[8rem]">
        <Menu>
          <MenuItem id="light" onAction={() => setTheme("light")}>
            Light
          </MenuItem>
          <MenuItem id="dark" onAction={() => setTheme("dark")}>
            Dark
          </MenuItem>
          <MenuItem id="system" onAction={() => setTheme("system")}>
            System
          </MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

export default ThemeToggle;
