import { DockIcon } from "../DockIcon";
import { Divider, DockWrapper } from "./styled";
import { useMotionValue } from "framer-motion";
import { Data } from "../../data/data";

interface DockProps {
  openWindow: (id: number) => void;
  projectData: Data[];
}

export const Dock = ({ openWindow, projectData }: DockProps) => {
  const mouseX = useMotionValue(Infinity);

  const handlePageX = (pageX: number) => {
    mouseX.set(pageX);
  };

  return (
    <DockWrapper
      onMouseMove={(e) => handlePageX(e.pageX)}
      onMouseLeave={() => handlePageX(Infinity)}>
      <h2 className="hidden_text">{"Donghun's Projects"}</h2>
      {projectData.map((data) => (
        <DockIcon
          onClick={() => openWindow(data.id)}
          key={data.title}
          mouseX={mouseX}
          name={data.title}
          icon={data.icon}
        />
      ))}
      <Divider />
    </DockWrapper>
  );
};
