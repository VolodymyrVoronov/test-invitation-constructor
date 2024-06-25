import CanvasNameInput from "../CanvasNameInput/CanvasNameInput";
import { Separator } from "../ui/separator";

const CanvasSettings = (): JSX.Element => {
  return (
    <div className="grid w-full grid-cols-[1fr_auto_1fr_auto_1fr] justify-items-center gap-2">
      <CanvasNameInput />

      <Separator orientation="vertical" />

      <div>2</div>

      <Separator orientation="vertical" />

      <div>3</div>
    </div>
  );
};

export default CanvasSettings;
