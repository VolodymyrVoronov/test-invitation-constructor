import { memo } from "react";

import RedoUndoButtons from "../RedoUndoButtons/RedoUndoButtons";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Nav = memo((): JSX.Element => {
  return (
    <nav className="grid w-auto grid-cols-[1fr_40px] grid-rows-1">
      <RedoUndoButtons className="sm:mr-[-40px]" />
      <ThemeToggle />
    </nav>
  );
});

export default Nav;
