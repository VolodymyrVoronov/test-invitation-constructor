import { Redo, Undo } from "lucide-react";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

import { useAppStore } from "@/store/app";

import { Button } from "../ui/button";

interface IRedoUndoButtonsProps extends ComponentProps<"div"> {}

const RedoUndoButtons = ({
  className,
  ...rest
}: IRedoUndoButtonsProps): JSX.Element => {
  const { undo, redo } = useAppStore.temporal.getState();

  const onUndoButtonClick = (): void => {
    undo();
  };

  const onRedoButtonClick = (): void => {
    redo();
  };

  return (
    <div
      className={cn("flex items-center justify-center gap-2", className)}
      {...rest}
    >
      <Button
        onPress={onUndoButtonClick}
        type="button"
        size="icon"
        aria-label="Undo"
      >
        <Undo />
      </Button>

      <Button
        onPress={onRedoButtonClick}
        type="button"
        size="icon"
        aria-label="Redo"
      >
        <Redo />
      </Button>
    </div>
  );
};

export default RedoUndoButtons;
