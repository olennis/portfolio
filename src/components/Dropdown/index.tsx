import { useState } from "react";
import {
  DropdownItem,
  DropdownList,
  DropdownText,
  DropdownTitle,
  DropdownWrapper,
} from "./styled";

interface DropdownItem {
  text: string;
  link?: string;
  contact?: string;
}

interface DropdownProps {
  title: string;
  list: DropdownItem[];
  width: number;
}

export const Dropdown = ({ title, list, width }: DropdownProps) => {
  const [copyText, setCopyText] = useState<string>("");

  const handleCopyClipBoard = (text: string) => {
    try {
      navigator.clipboard.writeText(text);
      setCopyText(text);
    } catch (error) {
      alert(error);
    }
  };

  const makeDropdownText = (contact?: string) => {
    if (!contact) {
      return "go to link!";
    }
    if (copyText === contact) {
      return "copied!";
    } else {
      return contact;
    }
  };

  return (
    <DropdownWrapper>
      <DropdownTitle>{title}</DropdownTitle>
      <DropdownList width={width}>
        {list.map((data) => (
          <DropdownItem
            key={data.text}
            onClick={
              data.contact
                ? () => handleCopyClipBoard(data.contact || "")
                : undefined
            }>
            {data.link ? (
              <a href={data.link} target="_blank" rel="noreferrer">
                {data.text}
              </a>
            ) : (
              <span>{data.text}</span>
            )}
            <DropdownText>{makeDropdownText(data.contact)}</DropdownText>
          </DropdownItem>
        ))}
      </DropdownList>
    </DropdownWrapper>
  );
};
