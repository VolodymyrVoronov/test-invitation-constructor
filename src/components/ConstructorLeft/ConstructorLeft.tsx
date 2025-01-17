import { AnimatePresence, motion } from "framer-motion";
import { memo, ReactElement, useState } from "react";

import BackgroundSelector from "../BackgroundSelector/BackgroundSelector";
import ElementSelector from "../ElementSelector/ElementSelector";
import ImageUploader from "../ImageUploader/ImageUploader";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import TypographySelector from "../TypographySelector/TypographySelector";

const SideElements: { element: ReactElement }[] = [
  {
    element: <ElementSelector />,
  },
  {
    element: <BackgroundSelector />,
  },
  {
    element: <TypographySelector />,
  },
  {
    element: <ImageUploader />,
  },
];

const ConstructorLeft = memo((): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index: number): void => {
    setActiveTab(index);
  };

  return (
    <div className="grid w-full grid-cols-[auto_1fr]">
      <LeftSideBar handleTabChange={handleTabChange} activeTab={activeTab} />

      <AnimatePresence mode="wait">
        <motion.div
          className="border-2 border-black p-3 dark:border-slate-400"
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.5,
          }}
        >
          {SideElements[activeTab].element}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export default ConstructorLeft;
