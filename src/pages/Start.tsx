import { useNavigate } from "react-router-dom";

import { ROUTES } from "@/constants";

import BlurIn from "@/components/ui/blur-in";
import { Button } from "@/components/ui/button";
import { SparklesCore } from "@/components/ui/sparkles";
import SparklesText from "@/components/ui/sparkles-text";

const Start = (): JSX.Element => {
  const navigate = useNavigate();

  const onStartButtonClick = (): void => {
    navigate(ROUTES.CONSTRUCTOR);
  };

  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 h-screen w-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="h-full w-full"
          particleColor="rgba(255,255,255,0.5)"
        />
      </div>

      <div className="flex flex-col items-center justify-center space-y-6 md:space-y-10">
        <SparklesText
          text="Invite Me!"
          className="relative z-20 text-center text-3xl font-bold text-white md:text-7xl lg:text-6xl"
        />

        <BlurIn
          word="Create a cool invitation for any occasions."
          duration={2}
          className="relative z-20 text-balance text-center text-xl font-light text-white md:text-2xl lg:text-2xl"
        />

        <Button
          variant="outline"
          size="lg"
          className="relative z-20"
          onPress={onStartButtonClick}
          type="button"
          aria-label="Start"
        >
          Start
        </Button>
      </div>
    </div>
  );
};

export default Start;
