import { ArrowDownFromLine, ArrowUpFromLine, Trash2 } from "lucide-react";
import { Rnd } from "react-rnd";
import { useShallow } from "zustand/react/shallow";

import { RESIZE_HANDLE_STYLES } from "@/constants";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/store/app";
import { CanvasElement } from "@/types";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

interface IImagesProps {
  canvasElement: CanvasElement;
  className?: string;
}

const Images = ({
  canvasElement,
  className,

  ...props
}: IImagesProps): JSX.Element => {
  const [
    selectedCanvasElement,
    setSelectedCanvasElement,
    deleteCanvasElement,
    updateCanvasElementCSS,
  ] = useAppStore(
    useShallow((state) => [
      state.selectedCanvasElement,
      state.setSelectedCanvasElement,
      state.deleteCanvasElement,
      state.updateCanvasElementCSS,
    ]),
  );

  const onElementClick = (): void => {
    if (canvasElement?.id) {
      setSelectedCanvasElement({
        id: canvasElement.id,
        type: canvasElement.type,
        css: canvasElement.css,
      });
    }
  };

  const onSendToBackClick = (): void => {
    if (canvasElement.id && canvasElement.css?.zIndex !== 0) {
      updateCanvasElementCSS(canvasElement.id, {
        zIndex: ((canvasElement.css?.zIndex as number) ?? 0) - 1,
      });
    }
  };

  const onBringToFrontClick = (): void => {
    if (canvasElement.id) {
      updateCanvasElementCSS(canvasElement.id, {
        zIndex: ((canvasElement.css?.zIndex as number) ?? 0) + 1,
      });
    }
  };

  const onDeleteClick = (): void => {
    if (canvasElement.id) {
      deleteCanvasElement(canvasElement.id);
    }
  };

  const isSelected = selectedCanvasElement?.id === canvasElement.id;

  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <Rnd
          key={canvasElement.id}
          bounds="parent"
          default={{
            width: 250,
            height: 250,
            x: 0,
            y: 0,
          }}
          resizeHandleStyles={
            isSelected ? { ...RESIZE_HANDLE_STYLES } : undefined
          }
          className={cn(canvasElement.css, className, {
            "ring-2": isSelected,
          })}
          style={{
            ...canvasElement.css,
            backgroundImage: `url(${canvasElement.content})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          onMouseDown={onElementClick}
          {...props}
        />
      </ContextMenuTrigger>

      <ContextMenuContent>
        <ContextMenuItem onClick={onSendToBackClick}>
          <ArrowDownFromLine className="mr-2 size-4" />
          Send to back
          <span className="sr-only">Send to back</span>
        </ContextMenuItem>

        <ContextMenuItem onClick={onBringToFrontClick}>
          <ArrowUpFromLine className="mr-2 size-4" />
          Bring to front
          <span className="sr-only">Bring to front</span>
        </ContextMenuItem>

        <ContextMenuItem onClick={onDeleteClick}>
          <Trash2 className="mr-2 size-4" />
          Delete
          <span className="sr-only">Delete</span>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};

export default Images;
