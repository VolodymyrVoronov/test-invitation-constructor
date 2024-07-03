import { cn } from "@/lib/utils";
import { useShallow } from "zustand/react/shallow";

import { useAppStore } from "@/store/app";

import {
  Slider,
  SliderFillTrack,
  SliderOutput,
  SliderThumb,
  SliderTrack,
} from "@/components/ui/slider";

const TypoSize = (): JSX.Element => {
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

  const onTextSizeSliderChange = (size: number | number[]): void => {
    const newSize = Array.isArray(size) ? size[0] : size;

    if (
      selectedCanvasElement?.id &&
      selectedElement?.id &&
      selectedElement.css?.fontSize !== 0
    ) {
      updateCanvasElementCSS(selectedElement.id, {
        fontSize: newSize,
      });
    }
  };

  const isElementSelected = !selectedCanvasElement?.id;

  const fontSize = (selectedElement?.css?.fontSize ?? 0) as number;
  const value = fontSize ? parseInt(fontSize.toString()) : 100;

  return (
    <div>
      <span>Size (px)</span>
      <div className="mt-2">
        <Slider
          onChange={onTextSizeSliderChange}
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
              <SliderOutput className="text-sm" />
            </div>

            <SliderTrack className="mt-2">
              <SliderFillTrack />
              <SliderThumb />
            </SliderTrack>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default TypoSize;
