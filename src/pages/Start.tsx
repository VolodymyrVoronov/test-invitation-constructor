import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "@/constants";

import BlurIn from "@/components/ui/blur-in";
import { Button } from "@/components/ui/button";
import { SparklesCore } from "@/components/ui/sparkles";
import SparklesText from "@/components/ui/sparkles-text";
import { BorderBeam } from "@/components/ui/border-beam";

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
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        >
          <SparklesText
            text="Invite Me!"
            className="relative z-20 text-center text-3xl font-bold text-white md:text-7xl lg:text-6xl"
          />
        </motion.span>

        <BlurIn
          word="Create a cool invitation for any occasions."
          duration={2}
          className="relative z-20 text-balance text-center text-xl font-light text-white md:text-2xl lg:text-2xl"
        />

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
        >
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
        </motion.span>
      </div>

      <BorderBeam size={250} duration={16} delay={9} borderWidth={5} />
    </div>
  );
};

export default Start;
