import { useNavigate } from "react-router-dom";

import { ROUTES } from "@/constants";

import { Button } from "@/components/ui/button";
import { SparklesCore } from "@/components/ui/sparkles";

const Start = (): JSX.Element => {
  const navigate = useNavigate();

  const onStartButtonClick = (): void => {
    navigate(ROUTES.CONSTRUCTOR);
  };

  return (
    <div className="h-screen relative w-screen bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="rgba(255,255,255,0.5)"
        />
      </div>

      <div className="space-y-10 flex justify-center flex-col items-center">
        <h1 className="md:text-7xl  text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
          Invite Me!
        </h1>

        <p className="md:text-2xl text-xl lg:text-2xl font-light text-center text-white relative z-20">
          Create a cool invitation for any occasions.
        </p>

        <Button
          variant="outline"
          size="lg"
          className="z-20 relative "
          onPress={onStartButtonClick}
        >
          Start
        </Button>
      </div>
    </div>
  );
};

export default Start;
