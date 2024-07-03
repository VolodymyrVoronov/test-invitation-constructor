import { Bold, Italic, Strikethrough, Underline } from "lucide-react";
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
  const isUnderline = selectedElement?.css?.textDecoration === "underline";
  const isStrikethrough =
    selectedElement?.css?.textDecoration === "line-through";

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

  const onUnderlineButtonClick = (): void => {
    if (selectedCanvasElement?.id && selectedElement?.id) {
      updateCanvasElementCSS(selectedElement.id, {
        textDecoration: isUnderline
          ? "none"
          : isStrikethrough
            ? "line-through"
            : "underline",
      });
    }
  };

  const onStrikethroughButtonClick = (): void => {
    if (selectedCanvasElement?.id && selectedElement?.id) {
      updateCanvasElementCSS(selectedElement.id, {
        textDecoration: isStrikethrough
          ? "none"
          : isUnderline
            ? "underline"
            : "line-through",
      });
    }
  };

  const isElementSelected = !selectedCanvasElement?.id;

  return (
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

      <TooltipTrigger>
        <Toggle
          onPress={onUnderlineButtonClick}
          isSelected={isUnderline}
          defaultSelected={isUnderline}
          isDisabled={isElementSelected}
          aria-label="Toggle underline"
          variant="outline"
        >
          <Underline className="h-4 w-4" />
        </Toggle>

        <Tooltip>
          <span>Underline</span>
        </Tooltip>
      </TooltipTrigger>

      <TooltipTrigger>
        <Toggle
          onPress={onStrikethroughButtonClick}
          isSelected={isStrikethrough}
          defaultSelected={isStrikethrough}
          isDisabled={isElementSelected}
          aria-label="Toggle strikethrough"
          variant="outline"
        >
          <Strikethrough className="h-4 w-4" />
        </Toggle>
        <Tooltip>
          <span>Strikethrough</span>
        </Tooltip>
      </TooltipTrigger>
    </div>
  );
};

export default TypoSettings;
