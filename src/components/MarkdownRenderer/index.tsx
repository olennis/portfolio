import MarkdownPreview from "@uiw/react-markdown-preview";
import { MarkdownWrapper } from "./styled";

export const MarkdownRenderer = ({
  markdownContent,
}: {
  markdownContent: string;
}) => {
  return (
    <MarkdownWrapper>
      <MarkdownPreview source={markdownContent} />
    </MarkdownWrapper>
  );
};
