import { AlignCenter, AlignJustify, AlignLeft, AlignRight } from "lucide-react";
import { useShallow } from "zustand/react/shallow";

import { useAppStore } from "@/store/app";

import { Tooltip, TooltipTrigger } from "@/components/ui/tooltip";
import { Toggle } from "../ui/toggle";

const TypoAlignment = (): JSX.Element => {
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

  const isAlignLeft = selectedElement?.css?.textAlign === "left";
  const isAlignCenter = selectedElement?.css?.textAlign === "center";
  const isAlignRight = selectedElement?.css?.textAlign === "right";
  const isJustify = selectedElement?.css?.textAlign === "justify";

  const onAlignLeftButtonClick = (): void => {
    if (selectedCanvasElement?.id && selectedElement?.id) {
      updateCanvasElementCSS(selectedElement.id, {
        textAlign: "left",
      });
    }
  };

  const onAlignCenterButtonClick = (): void => {
    if (selectedCanvasElement?.id && selectedElement?.id) {
      updateCanvasElementCSS(selectedElement.id, {
        textAlign: "center",
      });
    }
  };

  const onAlignRightButtonClick = (): void => {
    if (selectedCanvasElement?.id && selectedElement?.id) {
      updateCanvasElementCSS(selectedElement.id, {
        textAlign: "right",
      });
    }
  };

  const onJustifyButtonClick = (): void => {
    if (selectedCanvasElement?.id && selectedElement?.id) {
      updateCanvasElementCSS(selectedElement.id, {
        textAlign: "justify",
      });
    }
  };

  const isElementSelected = !selectedCanvasElement?.id;

  return (
    <div>
      <span>Alignment</span>
      <div className="mt-2 flex w-full gap-2">
        <TooltipTrigger>
          <Toggle
            onPress={onAlignLeftButtonClick}
            isSelected={isAlignLeft}
            defaultSelected={isAlignLeft}
            isDisabled={isElementSelected}
            aria-label="Align left"
            variant="outline"
          >
            <AlignLeft className="h-4 w-4" />
          </Toggle>
          <Tooltip>
            <span>Align left</span>
          </Tooltip>
        </TooltipTrigger>

        <TooltipTrigger>
          <Toggle
            onPress={onAlignCenterButtonClick}
            isSelected={isAlignCenter}
            defaultSelected={isAlignCenter}
            isDisabled={isElementSelected}
            aria-label="Align center"
            variant="outline"
          >
            <AlignCenter className="h-4 w-4" />
          </Toggle>
          <Tooltip>
            <span>Align center</span>
          </Tooltip>
        </TooltipTrigger>

        <TooltipTrigger>
          <Toggle
            onPress={onAlignRightButtonClick}
            isSelected={isAlignRight}
            defaultSelected={isAlignRight}
            isDisabled={isElementSelected}
            aria-label="Align right"
            variant="outline"
          >
            <AlignRight className="h-4 w-4" />
          </Toggle>
          <Tooltip>
            <span>Align right</span>
          </Tooltip>
        </TooltipTrigger>

        <TooltipTrigger>
          <Toggle
            onPress={onJustifyButtonClick}
            isSelected={isJustify}
            defaultSelected={isJustify}
            isDisabled={isElementSelected}
            aria-label="Justify"
            variant="outline"
          >
            <AlignJustify className="h-4 w-4" />
          </Toggle>
          <Tooltip>
            <span>Justify</span>
          </Tooltip>
        </TooltipTrigger>
      </div>
    </div>
  );
};

export default TypoAlignment;
