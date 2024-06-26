import { ChangeEvent, memo } from "react";
import { Text, TextField } from "react-aria-components";
import { useShallow } from "zustand/react/shallow";

import { useAppStore } from "@/store/app";

import { Input } from "@/components/ui/input";

const CanvasNameInput = memo((): JSX.Element => {
  const [canvasName, setCanvasName] = useAppStore(
    useShallow((state) => [state.canvasName, state.setCanvasName]),
  );

  const onNameInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setCanvasName(e.target.value);
  };

  return (
    <TextField aria-label="Canvas size" className="grid w-full grid-cols-1">
      <div className="grid justify-items-center gap-1">
        <Input
          type="text"
          placeholder="Name"
          value={canvasName}
          onChange={onNameInputChange}
          className="text-center"
        />

        <Text slot="description" className="text-sm text-muted-foreground">
          File name
        </Text>
      </div>
    </TextField>
  );
});

export default CanvasNameInput;
