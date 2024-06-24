import { ReactElement, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import BackgroundSelector from "../BackgroundSelector/BackgroundSelector";
import ElementSelector from "../ElementSelector/ElementSelector";
import LeftSideBar from "../LeftSideBar/LeftSideBar";

const SideElements: { element: ReactElement }[] = [
  {
    element: <ElementSelector />,
  },
  {
    element: <BackgroundSelector />,
  },
  {
    element: <div>Text</div>,
  },
  {
    element: <div>Image</div>,
  },
];

const ConstructorLeft = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index: number): void => {
    setActiveTab(index);
  };

  return (
    <div className="grid w-full grid-cols-[auto_1fr] gap-2">
      <LeftSideBar handleTabChange={handleTabChange} activeTab={activeTab} />

      <AnimatePresence mode="wait">
        <motion.div
          className=""
          key={activeTab}
          initial={{ opacity: 0, y: "-50px" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "50px" }}
          transition={{
            duration: 0.5,
          }}
        >
          {SideElements[activeTab].element}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ConstructorLeft;
