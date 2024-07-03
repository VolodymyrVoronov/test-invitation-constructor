import { ArrowDownFromLine, ArrowUpFromLine, Trash2 } from "lucide-react";
import { Rnd } from "react-rnd";
import { useShallow } from "zustand/react/shallow";
import ContentEditable, {
  type ContentEditableEvent,
} from "react-contenteditable";

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

interface ITyposProps {
  canvasElement: CanvasElement;
  className?: string;
}

const Typos = ({
  canvasElement,
  className,

  ...props
}: ITyposProps): JSX.Element => {
  const [
    selectedCanvasElement,
    setSelectedCanvasElement,
    deleteCanvasElement,
    updateCanvasElementCSS,
    updateCanvasElementContent,
  ] = useAppStore(
    useShallow((state) => [
      state.selectedCanvasElement,
      state.setSelectedCanvasElement,
      state.deleteCanvasElement,
      state.updateCanvasElementCSS,
      state.updateCanvasElementContent,
    ]),
  );

  const onElementClick = (): void => {
    if (canvasElement?.id && selectedCanvasElement?.id !== canvasElement.id) {
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

  const onTypoChange = (
    e: ContentEditableEvent,
    element: CanvasElement,
  ): void => {
    const text = e.target.value;

    if (element.id) {
      updateCanvasElementContent(element.id, text);
    }
  };

  const isSelected = selectedCanvasElement?.id === canvasElement.id;

  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <Rnd
          key={canvasElement.id}
          bounds="parent"
          resizeHandleStyles={
            isSelected ? { ...RESIZE_HANDLE_STYLES } : undefined
          }
          className={cn(canvasElement.css, className, {
            "ring-2": isSelected,
          })}
          style={canvasElement.css}
          onMouseDown={onElementClick}
          {...props}
        >
          <ContentEditable
            html={
              typeof canvasElement.content === "string"
                ? canvasElement.content
                : ""
            }
            onChange={(e) => onTypoChange(e, canvasElement)}
            className={cn("hover:cursor-text")}
          />
        </Rnd>
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

export default Typos;
