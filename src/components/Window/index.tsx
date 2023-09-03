import { Data } from "src/data/data";
import {
  ContentHeaderWrapper,
  Description,
  DurationText,
  HeaderButton,
  HeaderButtonWrapper,
  ProjectIcon,
  ProjectLink,
  TagList,
  TitleWrapper,
  WindowContainer,
  WindowContentWrapper,
  WindowHeader,
  WindowTitle,
} from "./styled";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { MarkdownRenderer } from "../MarkdownRenderer";
import { Tag } from "../Tag";

interface WindowProps {
  closeWindow: () => void;
  currentData: Data;
}

const BUTTONS = [
  { theme: "close", color: "#EC685D" },
  { theme: "minimize", color: "#F4BF49" },
  { theme: "expand", color: "#61C554" },
];

export const Window = ({ closeWindow, currentData }: WindowProps) => {
  const {
    title,
    duration,
    description,
    content,
    icon,
    isPersonal,
    company,
    tags,
    link,
  } = currentData;
  const hasLink = link && link.length > 0;

  return (
    <WindowContainer>
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
        <TagList>
          {tags.map((tag, idx) => (
            <Tag text={tag} key={`${tag}_${idx}`} />
          ))}
        </TagList>
        {hasLink && <ProjectLink href={`https://${link}`}>{link}</ProjectLink>}
        <MarkdownRenderer markdownContent={description} />
        {content}
      </WindowContentWrapper>
    </WindowContainer>
  );
};
