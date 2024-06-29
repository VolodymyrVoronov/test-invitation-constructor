import { type Color } from "react-aria-components";
import { useShallow } from "zustand/react/shallow";

import { BASIC_COLORS } from "@/constants";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/store/app";

import {
  ColorSwatch,
  ColorSwatchPicker,
  ColorSwatchPickerItem,
  ColorThumb,
  ColorWheel,
  ColorWheelTrack,
} from "@/components/ui/color";

const ElementColor = (): JSX.Element => {
  const [canvasElements, selectedCanvasElement, updateCanvasElementCSS] =
    useAppStore(
      useShallow((state) => [
        state.canvasElements,
        state.selectedCanvasElement,
        state.updateCanvasElementCSS,
      ]),
    );

  const selectedElement = canvasElements.filter(
    (element) => element.id === selectedCanvasElement?.id,
  )[0];

  const isElementSelected = !selectedCanvasElement?.id;

  const onColorChange = (color: Color): void => {
    if (selectedCanvasElement?.id && selectedElement?.id) {
      updateCanvasElementCSS(selectedElement.id, {
        color: color.toString(),
      });
    }
  };

  return (
    <div className="grid w-full grid-cols-[1fr_1fr] items-start gap-3">
      <ColorWheel
        className={cn("w-full", {
          "opacity-50": isElementSelected,
        })}
        onChange={onColorChange}
        isDisabled={isElementSelected}
      >
        <ColorWheelTrack />
        <ColorThumb />
      </ColorWheel>

      <ColorSwatchPicker onChange={onColorChange} className="flex gap-1">
        {BASIC_COLORS.map((color) => (
          <ColorSwatchPickerItem
            key={color}
            color={color}
            isDisabled={isElementSelected}
          >
            <ColorSwatch />
          </ColorSwatchPickerItem>
        ))}
      </ColorSwatchPicker>
    </div>
  );
};

export default ElementColor;
