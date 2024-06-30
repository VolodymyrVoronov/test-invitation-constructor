import { cn } from "@/lib/utils";
import { useShallow } from "zustand/react/shallow";

import { useAppStore } from "@/store/app";

import { Label } from "@/components/ui/label";
import {
  Slider,
  SliderFillTrack,
  SliderOutput,
  SliderThumb,
  SliderTrack,
} from "@/components/ui/slider";

const ElementLayer = (): JSX.Element => {
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

  const onOpacitySliderChange = (opacity: number | number[]): void => {
    const newOpacity = Array.isArray(opacity) ? opacity[0] : opacity;

    if (
      selectedCanvasElement?.id &&
      selectedElement?.id &&
      selectedElement.css?.opacity !== 0
    ) {
      updateCanvasElementCSS(selectedElement.id, {
        opacity: newOpacity / 100,
      });
    }
  };

  const isElementSelected = !selectedCanvasElement?.id;

  const opacity = (selectedElement?.css?.opacity ?? 0) as number;
  const value = opacity ? opacity * 100 : 100;

  return (
    <Slider
      onChange={onOpacitySliderChange}
      aria-label="opacity"
      defaultValue={[100]}
      value={value}
      maxValue={100}
      minValue={0}
      step={1}
      className={cn("w-full px-2", {
        "opacity-50": isElementSelected,
      })}
      isDisabled={isElementSelected}
    >
      <div className="flex w-full flex-col">
        <div className="flex justify-between">
          <Label>Opacity</Label>
          <SliderOutput className="text-sm" />
        </div>

        <SliderTrack className="mt-2">
          <SliderFillTrack />
          <SliderThumb />
        </SliderTrack>
      </div>
    </Slider>
  );
};

export default ElementLayer;
