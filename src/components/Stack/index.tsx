import {
  CareerDate,
  DurationWrapper,
  Icon,
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
  stackProps: StackItem[];
}

export const Stack = ({ stackProps }: StackProps) => {
  return (
    <StackWrapper>
      <TitleContainer>
        <TitleWrapper>
          <Title>Codestates</Title>
          <Icon />
        </TitleWrapper>
        <DurationWrapper>
          <span>20.11 - 21.03</span>
          <InternText>intern</InternText>
        </DurationWrapper>
      </TitleContainer>
      {stackProps.map((data, index) => {
        return (
          <StackItem key={data.text} index={index + 1}>
            <CareerDate>00.00.00</CareerDate>
            <Icon />
          </StackItem>
        );
      })}
    </StackWrapper>
  );
};
