import CanvasNameInput from "../CanvasNameInput/CanvasNameInput";
import CanvasSizeInput from "../CanvasSizeInput/CanvasSizeInput";
import SaveButton from "../SaveButton/SaveButton";
import { Separator } from "../ui/separator";

const CanvasSettings = (): JSX.Element => {
  return (
    <div className="grid w-full grid-cols-[1fr_auto_1fr_auto_1fr] justify-items-center gap-2">
      <CanvasNameInput />

      <Separator orientation="vertical" />

      <CanvasSizeInput />

      <Separator orientation="vertical" />

      <SaveButton />
    </div>
  );
};

export default CanvasSettings;
