import { useShallow } from "zustand/react/shallow";

import { cn } from "@/lib/utils";
import { useAppStore } from "@/store/app";
import { BACKGROUNDS } from "@/constants";

import { Button } from "../ui/button";
import { ColorSlider, ColorThumb, SliderTrack } from "@/components/ui/color";
import { Color } from "react-aria-components";

const BackgroundColorSelector = (): JSX.Element => {
  const [canvasBackgroundColor, setCanvasBackgroundColor] = useAppStore(
    useShallow((state) => [
      state.canvasBackgroundColor,
      state.setCanvasBackgroundColor,
    ]),
  );

  const onBackgroundColorClick = (background: string): void => {
    setCanvasBackgroundColor(background);
  };

  const onBackgroundColorChange = (background: Color): void => {
    setCanvasBackgroundColor(background);
  };

  return (
    <div className="grid w-full grid-cols-1 gap-3">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(30px,1fr))] gap-2">
        {BACKGROUNDS.map((background) => (
          <Button
            key={background}
            type="button"
            variant="outline"
            size="icon"
            className={cn("h-8 w-8 opacity-90 hover:opacity-100", {
              "ring-2 ring-black dark:ring-slate-400":
                background === canvasBackgroundColor,
            })}
            onPress={() => {
              onBackgroundColorClick(background);
            }}
            style={{
              backgroundColor: background,
            }}
          />
        ))}
      </div>

      <ColorSlider
        defaultValue="hsl(0, 100%, 50%)"
        channel="hue"
        className="px-2"
        onChange={onBackgroundColorChange}
      >
        <SliderTrack className="w-full">
          <ColorThumb className="f-w top-1/2" />
        </SliderTrack>
      </ColorSlider>
    </div>
  );
};

export default BackgroundColorSelector;
