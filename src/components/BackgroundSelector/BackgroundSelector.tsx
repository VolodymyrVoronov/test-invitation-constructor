import BackgroundColorSelector from "../BackgroundColorSelector/BackgroundColorSelector";
import BackgroundGradientSelector from "../BackgroundGradientSelector/BackgroundGradientSelector";
import { Separator } from "../ui/separator";

const BackgroundSelector = (): JSX.Element => {
  return (
    <div className="grid w-full grid-cols-1 gap-5">
      <div className="grid w-full grid-cols-1 gap-3">
        <span className="text-center">Background</span>
        <Separator orientation="horizontal" />
        <BackgroundColorSelector />
      </div>

      <div className="grid w-full grid-cols-1 gap-3">
        <span className="text-center">Gradient</span>
        <Separator orientation="horizontal" />
        <BackgroundGradientSelector />
      </div>
    </div>
  );
};

export default BackgroundSelector;
