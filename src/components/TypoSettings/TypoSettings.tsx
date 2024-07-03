import { Bold, Italic } from "lucide-react";
import { useShallow } from "zustand/react/shallow";

import { useAppStore } from "@/store/app";

import { Tooltip, TooltipTrigger } from "@/components/ui/tooltip";
import { Toggle } from "../ui/toggle";

const TypoSettings = (): JSX.Element => {
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

  const isBold = selectedElement?.css?.fontWeight === "bold";
  const isItalic = selectedElement?.css?.fontStyle === "italic";

  const onBoldButtonClick = (): void => {
    if (selectedCanvasElement?.id && selectedElement?.id) {
      updateCanvasElementCSS(selectedElement.id, {
        fontWeight: isBold ? "normal" : "bold",
      });
    }
  };

  const onItalicButtonClick = (): void => {
    if (selectedCanvasElement?.id && selectedElement?.id) {
      updateCanvasElementCSS(selectedElement.id, {
        fontStyle: isItalic ? "normal" : "italic",
      });
    }
  };

  const isElementSelected = !selectedCanvasElement?.id;

  return (
    <div>
      <span>Style</span>
      <div className="mt-2 flex w-full gap-2">
        <TooltipTrigger>
          <Toggle
            onPress={onBoldButtonClick}
            isSelected={isBold}
            defaultSelected={isBold}
            isDisabled={isElementSelected}
            aria-label="Toggle bold"
            variant="outline"
          >
            <Bold className="h-4 w-4" />
          </Toggle>

          <Tooltip>
            <span>Bold</span>
          </Tooltip>
        </TooltipTrigger>

        <TooltipTrigger>
          <Toggle
            onPress={onItalicButtonClick}
            isSelected={isItalic}
            defaultSelected={isItalic}
            isDisabled={isElementSelected}
            aria-label="Toggle italic"
            variant="outline"
          >
            <Italic className="h-4 w-4" />
          </Toggle>

          <Tooltip>
            <span>Italic</span>
          </Tooltip>
        </TooltipTrigger>
      </div>
    </div>
  );
};

export default TypoSettings;
