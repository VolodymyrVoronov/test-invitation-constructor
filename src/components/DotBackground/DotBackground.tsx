import { ComponentProps } from "react";

interface IDotBackgroundProps extends ComponentProps<"div"> {}

const DotBackground = ({ children }: IDotBackgroundProps): JSX.Element => {
  return (
    <div className="relative flex items-center justify-center bg-white bg-dot-black/[0.1] dark:bg-black dark:bg-dot-white/[0.1]">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_100%,black)] dark:bg-black dark:[mask-image:radial-gradient(ellipse_at_center,transparent_100%,white)]"></div>

      {children}
    </div>
  );
};

export default DotBackground;
