import {
  ContentText,
  DurationWrapper,
  Icon,
  IconWrapper,
  InternText,
  StackItem,
  StackWrapper,
  Title,
  TitleContainer,
  TitleWrapper,
} from "./styled";

interface StackItem {
  text: string;
  icon: string;
}

interface StackProps {
  title: string;
  isIntern?: boolean;
  duration?: string;
  stackProps: StackItem[];
  icon: string;
}

export const Stack = ({
  stackProps,
  isIntern,
  duration = "",
  title,
  icon,
}: StackProps) => {
  return (
    <StackWrapper>
      <TitleContainer>
        <TitleWrapper>
          <IconWrapper>
            <Icon src={icon} />
          </IconWrapper>
          <Title>{title}</Title>
        </TitleWrapper>
        <DurationWrapper>
          <span>{duration}</span>
          {isIntern && <InternText>intern</InternText>}
        </DurationWrapper>
      </TitleContainer>
      {stackProps.map((data, index) => {
        return (
          <StackItem key={data.text} index={index + 1}>
            <ContentText>{data.text}</ContentText>
            <IconWrapper>
              <Icon src={data.icon} />
            </IconWrapper>
          </StackItem>
        );
      })}
    </StackWrapper>
  );
};
