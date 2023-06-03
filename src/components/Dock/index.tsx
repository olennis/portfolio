import { DockIcon } from "../DockIcon";
import { Divider, DockWrapper } from "./styled";
import { useMotionValue } from "framer-motion";

interface DockData {
  icon: string;
  content: string[];
}

const CAREERDATA: DockData[] = [
  { icon: "codestates-student", content: ["", ""] },
  { icon: "codestates-cse", content: ["", ""] },
  { icon: "dk-techin", content: ["", ""] },
  { icon: "codestates-se", content: ["", ""] },
];
const STUDYDATA: DockData[] = [
  { icon: "github", content: ["", ""] },
  { icon: "notion", content: ["", ""] },
];

export const Dock = () => {
  const mouseX = useMotionValue(Infinity);

  const handlePageX = (pageX: number) => {
    mouseX.set(pageX);
  };

  return (
    <DockWrapper
      onMouseMove={(e) => handlePageX(e.pageX)}
      onMouseLeave={() => handlePageX(Infinity)}>
      {CAREERDATA.map((data) => (
        <DockIcon key={data.icon} mouseX={mouseX} />
      ))}
      <Divider />
      {STUDYDATA.map((data) => (
        <DockIcon key={data.icon} mouseX={mouseX} />
      ))}
    </DockWrapper>
  );
};
