import { css } from "@emotion/css";
import { Rnd } from "react-rnd";
import { useShallow } from "zustand/react/shallow";

import { RESIZE_HANDLE_STYLES } from "@/constants";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/store/app";
import { CanvasElement } from "@/types";

interface IElementsProps {
  canvasElement: CanvasElement;
  className?: string;
}

const elementStyle = css`
  svg {
    width: 100%;
    height: 100%;
  }
`;

const Elements = ({
  canvasElement,
  className,

  ...props
}: IElementsProps): JSX.Element => {
  const [setSelectedCanvasElement, selectedCanvasElement] = useAppStore(
    useShallow((state) => [
      state.setSelectedCanvasElement,
      state.selectedCanvasElement,
    ]),
  );

  const onElementClick = (): void => {
    setSelectedCanvasElement({
      id: canvasElement.id!,
      type: canvasElement.type,
    });
  };

  const isSelected = selectedCanvasElement?.id === canvasElement.id;

  return (
    <Rnd
      key={canvasElement.id}
      bounds="parent"
      default={{
        width: 100,
        height: 100,
        x: 0,
        y: 0,
      }}
      resizeHandleStyles={isSelected ? { ...RESIZE_HANDLE_STYLES } : undefined}
      className={cn(canvasElement.css, elementStyle, className, {
        "ring-2": isSelected,
      })}
      onMouseDown={onElementClick}
      {...props}
    >
      {canvasElement.content}
    </Rnd>
  );
};

export default Elements;
