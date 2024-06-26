import { ChangeEvent } from "react";
import { Text, TextField } from "react-aria-components";
import { useShallow } from "zustand/react/shallow";

import { useAppStore } from "@/store/app";

import { Input } from "@/components/ui/input";

const CanvasSizeInput = (): JSX.Element => {
  const [canvasSize, setCanvasSize] = useAppStore(
    useShallow((state) => [state.canvasSize, state.setCanvasSize]),
  );

  const onHeightInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const height = e.target.valueAsNumber;

    if (height) {
      setCanvasSize([height, canvasSize[1]]);
    }
  };

  const onWidthInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const width = e.target.valueAsNumber;

    if (width) {
      setCanvasSize([canvasSize[0], width]);
    }
  };

  return (
    <TextField
      aria-label="Canvas size"
      className="grid grid-cols-[1fr_1fr] gap-2"
    >
      <div className="grid justify-items-center gap-1">
        <Input
          type="number"
          placeholder="Height"
          value={canvasSize[0]}
          onChange={onHeightInputChange}
          min={0}
          className="text-center"
        />

        <Text slot="description" className="text-sm text-muted-foreground">
          Height
        </Text>
      </div>

      <div className="grid justify-items-center gap-1">
        <Input
          type="number"
          placeholder="Width"
          value={canvasSize[1]}
          onChange={onWidthInputChange}
          min={0}
          className="text-center"
        />
        <Text slot="description" className="text-sm text-muted-foreground">
          Width
        </Text>
      </div>
    </TextField>
  );
};

export default CanvasSizeInput;
