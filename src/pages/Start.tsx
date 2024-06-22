import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Slider,
  SliderFillTrack,
  SliderOutput,
  SliderThumb,
  SliderTrack,
} from "@/components/ui/slider";

import { cn } from "@/lib/utils";

const Start = (): JSX.Element => {
  return (
    <div className="space-y-4">
      <Button variant="default">Button</Button>

      <Slider
        aria-label="slider demo"
        defaultValue={[50]}
        maxValue={100}
        step={1}
        className={cn("w-[60%]")}
      >
        <div className="flex w-full flex-col">
          <div className="flex justify-between">
            <Label>Opacity</Label>
            <SliderOutput className="text-sm" />
          </div>
          <SliderTrack>
            <SliderFillTrack />
            <SliderThumb />
          </SliderTrack>
        </div>
      </Slider>
    </div>
  );
};

export default Start;
