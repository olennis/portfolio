import { TagWrapper } from "./styled";

interface TagProps {
  text: string;
}

export const Tag = ({ text }: TagProps) => {
  return <TagWrapper>{text}</TagWrapper>;
};
