import { useShallow } from "zustand/react/shallow";

import { GRADIENTS } from "@/constants";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/store/app";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "../ui/button";

const BackgroundGradientSelector = (): JSX.Element => {
  const [canvasBackgroundColor, setCanvasBackgroundColor] = useAppStore(
    useShallow((state) => [
      state.canvasBackgroundColor,
      state.setCanvasBackgroundColor,
    ]),
  );

  const onBackgroundColorClick = (gradient: string): void => {
    setCanvasBackgroundColor(gradient);
  };

  return (
    <ScrollArea type="auto" className="grid h-[200px] w-full grid-cols-1 gap-3">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(30px,1fr))] gap-2 p-1 pr-3">
        {GRADIENTS.map((gradient) => (
          <Button
            key={gradient}
            type="button"
            variant="outline"
            size="icon"
            className={cn("h-8 w-8 opacity-90 hover:opacity-100", {
              "ring-2 ring-black dark:ring-slate-400":
                gradient === canvasBackgroundColor,
            })}
            onPress={() => {
              onBackgroundColorClick(gradient);
            }}
            style={{
              background: gradient,
            }}
          />
        ))}
      </div>
    </ScrollArea>
  );
};

export default BackgroundGradientSelector;
