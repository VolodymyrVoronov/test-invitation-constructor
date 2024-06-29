import { ArrowDownFromLine, ArrowUpFromLine, Trash2 } from "lucide-react";
import { useShallow } from "zustand/react/shallow";

import { useAppStore } from "@/store/app";

import { Button } from "../ui/button";
import { Tooltip, TooltipTrigger } from "@/components/ui/tooltip";

const ElementSettings = (): JSX.Element => {
  const [
    canvasElements,
    selectedCanvasElement,
    deleteCanvasElement,
    updateCanvasElementCSS,
  ] = useAppStore(
    useShallow((state) => [
      state.canvasElements,
      state.selectedCanvasElement,
      state.deleteCanvasElement,
      state.updateCanvasElementCSS,
    ]),
  );

  const selectedElement = canvasElements.filter(
    (element) => element.id === selectedCanvasElement?.id,
  )[0];

  const onSendToBackClick = (): void => {
    if (
      selectedCanvasElement?.id &&
      selectedElement?.id &&
      selectedElement.css?.zIndex !== 0
    ) {
      updateCanvasElementCSS(selectedElement.id, {
        zIndex: ((selectedElement.css?.zIndex as number) ?? 0) - 1,
      });
    }
  };

  const onBringToFrontClick = (): void => {
    if (selectedCanvasElement?.id && selectedElement?.id) {
      updateCanvasElementCSS(selectedElement.id, {
        zIndex: ((selectedElement.css?.zIndex as number) ?? 0) + 1,
      });
    }
  };

  const onDeleteClick = (): void => {
    if (selectedCanvasElement?.id) {
      deleteCanvasElement(selectedCanvasElement.id);
    }
  };

  const isElementSelected = !selectedCanvasElement?.id;

  return (
    <div className="mt-2 flex w-full gap-2">
      <TooltipTrigger>
        <Button
          onPress={onSendToBackClick}
          size="icon"
          isDisabled={isElementSelected}
          aria-label="Bring to front"
        >
          <ArrowDownFromLine />
          <span className="sr-only">Bring to front</span>
        </Button>

        <Tooltip>
          <span>Bring to front</span>
        </Tooltip>
      </TooltipTrigger>

      <TooltipTrigger>
        <Button
          onPress={onBringToFrontClick}
          size="icon"
          isDisabled={isElementSelected}
          aria-label="Send to back"
        >
          <ArrowUpFromLine />
          <span className="sr-only">Send to back</span>
        </Button>

        <Tooltip>
          <span>Send to back</span>
        </Tooltip>
      </TooltipTrigger>

      <TooltipTrigger>
        <Button
          onPress={onDeleteClick}
          size="icon"
          isDisabled={isElementSelected}
          variant="destructive"
          aria-label="Delete"
        >
          <Trash2 />
          <span className="sr-only">Delete</span>
        </Button>

        <Tooltip>
          <span>Delete</span>
        </Tooltip>
      </TooltipTrigger>
    </div>
  );
};

export default ElementSettings;
