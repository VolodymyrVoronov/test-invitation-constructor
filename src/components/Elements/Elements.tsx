import { css } from "@emotion/css";
import { Rnd } from "react-rnd";

import { CanvasElement } from "@/types";
import { cn } from "@/lib/utils";

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
  return (
    <Rnd
      key={canvasElement.id}
      bounds="parent"
      className={cn(elementStyle, className)}
      {...props}
    >
      {canvasElement.content}
    </Rnd>
  );
};

export default Elements;
