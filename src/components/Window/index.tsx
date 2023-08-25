import { Data } from "src/data/data";
import {
  ContentHeaderWrapper,
  Description,
  DurationText,
  HeaderButton,
  HeaderButtonWrapper,
  ProjectIcon,
  TitleWrapper,
  WindowContainer,
  WindowContentWrapper,
  WindowHeader,
  WindowTitle,
} from "./styled";

interface WindowProps {
  closeWindow: () => void;
  currentData: Data;
}

const BUTTONS = [
  { theme: "close", color: "#EC685D" },
  { theme: "dd", color: "#F4BF49" },
  { theme: "expand", color: "#61C554" },
];

export const Window = ({ closeWindow, currentData }: WindowProps) => {
  const { title, duration, description, content, icon, isPersonal, company } =
    currentData;

  return (
    <WindowContainer>
      <h2 className="hidden_text">{"Donghun's Project"}</h2>
      <WindowHeader>
        <HeaderButtonWrapper>
          {BUTTONS.map((button) => (
            <HeaderButton
              theme={button.theme}
              key={`button_${button.theme}`}
              color={button.color}
              onClick={closeWindow}
            />
          ))}
        </HeaderButtonWrapper>
      </WindowHeader>
      <WindowContentWrapper>
        <ContentHeaderWrapper>
          <TitleWrapper>
            <WindowTitle>{title}</WindowTitle>
            <DurationText>{`${
              !isPersonal && company
            }  ${duration}`}</DurationText>
          </TitleWrapper>
          <ProjectIcon src={icon} />
        </ContentHeaderWrapper>
        <Description>{description}</Description>
        {content}
      </WindowContentWrapper>
    </WindowContainer>
  );
};
