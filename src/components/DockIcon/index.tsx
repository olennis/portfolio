import { useRef } from "react";
import { IconWrapper } from "./styled";
import { useTransform, useSpring } from "framer-motion";

interface DockIconProps {
  mouseX: MotionValue;
}

import type { MotionValue } from "framer-motion";

export const DockIcon = ({ mouseX }: DockIconProps) => {
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

  return <IconWrapper ref={ref} style={{ width }} />;
};
