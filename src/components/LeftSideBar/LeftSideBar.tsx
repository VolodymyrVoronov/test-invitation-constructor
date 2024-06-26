import { cn } from "@/lib/utils";
import { Box, CaseSensitive, Image, Proportions } from "lucide-react";
import { ComponentProps, ReactElement } from "react";

import { Button } from "../ui/button";
import { Tooltip, TooltipTrigger } from "@/components/ui/tooltip";

interface ILeftSideBarProps extends ComponentProps<"ul"> {
  handleTabChange: (index: number) => void;
  activeTab: number;
}

interface ITab {
  id: number;
  index: number;
  icon: ReactElement;
  ariaLabel?: string;
  tooltip?: string;
}

const tabs: ITab[] = [
  {
    id: 0,
    index: 0,
    icon: <Box />,
    ariaLabel: "Tab Elements",
    tooltip: "Add Elements",
  },
  {
    id: 1,
    index: 1,
    icon: <Proportions />,
    ariaLabel: "Tab Background",
    tooltip: "Add Background",
  },
  {
    id: 2,
    index: 2,
    icon: <CaseSensitive />,
    ariaLabel: "Tab Text",
    tooltip: "Add Text",
  },
  {
    id: 3,
    index: 3,
    icon: <Image />,
    ariaLabel: "Tab Image",
    tooltip: "Add Image",
  },
];

const LeftSideBar = ({
  handleTabChange,
  activeTab,

  className,
  ...rest
}: ILeftSideBarProps): JSX.Element => {
  const onTabClick = (index: number): void => {
    handleTabChange(index);
  };

  return (
    <ul className={cn("grid w-full content-start gap-1", className)} {...rest}>
      {tabs.map((tab) => (
        <li key={tab.id}>
          <TooltipTrigger>
            <Button
              size="icon"
              onPress={() => onTabClick(tab.index)}
              aria-label={tab.ariaLabel}
              variant={activeTab === tab.index ? "default" : "ghost"}
              className={cn({
                "rounded-r-none": activeTab === tab.index,
              })}
            >
              {tab.icon}
            </Button>

            <Tooltip>
              <span>{tab.tooltip}</span>
            </Tooltip>
          </TooltipTrigger>
        </li>
      ))}
    </ul>
  );
};

export default LeftSideBar;
