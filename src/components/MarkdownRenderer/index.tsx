import MarkdownPreview from "@uiw/react-markdown-preview";

export const MarkdownRenderer = ({
  markdownContent,
}: {
  markdownContent: string;
}) => {
  return (
    <div>
      <MarkdownPreview source={markdownContent} />
    </div>
  );
};
