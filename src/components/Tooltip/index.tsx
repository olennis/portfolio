import { TooltipWrapper } from "./styled";

interface TooltipProps {
  name: string;
  position: "top" | "bottom" | "left" | "right";
}

export const Tooltip = ({ name, position }: TooltipProps) => {
  return <TooltipWrapper>{`${name}`}</TooltipWrapper>;
};
