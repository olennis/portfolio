import { useEffect, useState } from "react";
import {
  IntroIcon,
  IntroInput,
  IntroInputArrowIcon,
  IntroInputWrapper,
  IntroName,
  IntroWrapper,
} from "./styled";
import { BsArrowRightCircle } from "react-icons/bs";

interface IntroProps {
  completeIntro: () => void;
}

export const Intro = ({ completeIntro }: IntroProps) => {
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    const typingPassword = setInterval(() => {
      setPassword((prevPassword) => prevPassword + " *");
    }, 200);

    if (password.length >= 16) {
      clearInterval(typingPassword);
      completeIntro();
    }

    return () => clearInterval(typingPassword);
  }, [password]);

  return (
    <main>
      <IntroWrapper>
        <IntroIcon />
        <IntroName>hello!</IntroName>
        <IntroInputWrapper>
          <IntroInput value={password} readOnly />
          <IntroInputArrowIcon>
            <BsArrowRightCircle color="gray" />
          </IntroInputArrowIcon>
        </IntroInputWrapper>
      </IntroWrapper>
    </main>
  );
};
