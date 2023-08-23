import { useRef, useState } from "react";
import { IconContainer, IconWrapper, TooltipWrapper } from "./styled";
import { useTransform, useSpring } from "framer-motion";

interface StackItem {
  text: string;
  icon: string;
}
interface DockIconProps {
  mouseX: MotionValue;
  name?: string;
  icon: string;
  content: StackItem[];
  isIntern?: boolean;
  duration?: string;
}

import type { MotionValue } from "framer-motion";
import { Stack } from "../Stack";

export const DockIcon = ({
  mouseX,
  name = "",
  icon,
  content,
  isIntern,
  duration,
}: DockIconProps) => {
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
          stackProps={content}
          isIntern={isIntern}
          duration={duration}
          title={name}
          icon={icon}
        />
      )}
      <IconWrapper
        src={icon}
        ref={ref}
        style={{ width }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      />
    </IconContainer>
  );
};
