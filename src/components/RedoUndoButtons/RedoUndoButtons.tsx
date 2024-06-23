import { Redo, Undo } from "lucide-react";

import { useAppStore } from "@/store/app";

import { Button } from "../ui/button";

const RedoUndoButtons = (): JSX.Element => {
  const { undo, redo } = useAppStore.temporal.getState();

  const onUndoButtonClick = (): void => {
    undo();
  };

  const onRedoButtonClick = (): void => {
    redo();
  };

  return (
    <div className="flex items-center justify-center gap-2">
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
