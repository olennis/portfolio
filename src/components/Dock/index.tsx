import { DockIcon } from "../DockIcon";
import { Divider, DockWrapper } from "./styled";
import { useMotionValue } from "framer-motion";
import { CAREERDATA, STUDYDATA } from "../../data/data";

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
        <DockIcon
          key={data.name}
          mouseX={mouseX}
          name={data.name}
          icon={data.icon}
          content={data.content}
          isIntern={data.isIntern}
          duration={data.duration}
        />
      ))}
      <Divider />
      {STUDYDATA.map((data) => (
        <DockIcon
          key={data.name}
          mouseX={mouseX}
          name={data.name}
          icon={data.icon}
          content={data.content}
          isIntern={data.isIntern}
        />
      ))}
    </DockWrapper>
  );
};
