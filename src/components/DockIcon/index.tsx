import { MouseEventHandler, useRef, useState } from "react";
import { IconContainer, Icon } from "./styled";
import { useTransform, useSpring } from "framer-motion";

interface DockIconProps {
  mouseX: MotionValue;
  name?: string;
  icon: string;
  onClick: MouseEventHandler<HTMLDivElement>;
}

import type { MotionValue } from "framer-motion";
import { Tooltip } from "../Tooltip";

export const DockIcon = ({
  mouseX,
  name = "",
  icon,
  onClick,
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
      {isHover && <Tooltip name={name} position="top" />}
      <Icon
        onClick={onClick}
        src={icon}
        ref={ref}
        style={{ width }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      />
    </IconContainer>
  );
};
