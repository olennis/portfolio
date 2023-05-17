import { useState } from "react";
import { GlobalStyle } from "./styles/global";
import {
  IntroIcon,
  IntroInput,
  IntroInputArrowIcon,
  IntroInputWrapper,
  IntroMessage,
  IntroName,
  IntroWrapper,
} from "./styles/styled";

export const App = () => {
  const [isIntro, setIsIntro] = useState<boolean>(true);
  return (
    <div className="App">
      <GlobalStyle />
      {isIntro ? (
        <main>
          <IntroWrapper>
            <IntroIcon />
            <IntroName>Donghun</IntroName>
            <IntroInputWrapper>
              <IntroInput />
              <IntroInputArrowIcon />
            </IntroInputWrapper>
            <IntroMessage>메세지</IntroMessage>
          </IntroWrapper>
        </main>
      ) : (
        <>
          <header>헤더</header>
          <main />
        </>
      )}
    </div>
  );
};

//TODO: 애니메이션 순서
// 1. 인풋 노출
// 2. 비밀번호 입력(1초마다)
// 3. 화살표 클릭 이벤트
