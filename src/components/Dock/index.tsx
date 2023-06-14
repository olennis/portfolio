import { DockIcon } from "../DockIcon";
import { Divider, DockWrapper } from "./styled";
import { useMotionValue } from "framer-motion";

interface DockData {
  icon: string;
  content: string[];
}

const CAREERDATA: DockData[] = [
  { icon: "코드스테이츠", content: ["", ""] },
  { icon: "디케이테크인", content: ["", ""] },
  { icon: "코드스테이츠", content: ["", ""] },
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
        <DockIcon key={data.icon} mouseX={mouseX} name={data.icon} />
      ))}
      <Divider />
      {STUDYDATA.map((data) => (
        <DockIcon key={data.icon} mouseX={mouseX} name={data.icon} />
      ))}
    </DockWrapper>
  );
};
