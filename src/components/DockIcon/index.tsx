import { useRef, useState } from "react";
import { IconContainer, IconWrapper, TooltipWrapper } from "./styled";
import { useTransform, useSpring } from "framer-motion";

interface DockIconProps {
  mouseX: MotionValue;
  name?: string;
}

import type { MotionValue } from "framer-motion";
import { Stack } from "../Stack";

export const DockIcon = ({ mouseX, name }: DockIconProps) => {
  const [isHover, setIsHover] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const getBounds = (value: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return value - bounds.x - bounds.width / 2;
  };

  const distance = useTransform(mouseX, getBounds);
  const widthSync = useTransform(distance, [-200, 0, 200], [40, 100, 40]);
  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <IconContainer>
      {isHover && (
        <Stack
          stackProps={[
            { text: "1", icon: "" },
            { text: "2", icon: "" },
            { text: "3", icon: "" },
            { text: "4", icon: "" },
          ]}
        />
      )}
      {isHover && <TooltipWrapper>{name}</TooltipWrapper>}
      <IconWrapper
        ref={ref}
        style={{ width }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}></IconWrapper>
    </IconContainer>
  );
};
