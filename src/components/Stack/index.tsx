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
          <Title>{title}</Title>
        </TitleWrapper>
      </TitleContainer>
    </StackWrapper>
  );
};
