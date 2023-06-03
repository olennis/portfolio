import { useState } from "react";
import { GlobalStyle } from "./styles/global";
import { Intro } from "./components/Intro";
import { Header } from "./components/Header";

export const App = () => {
  const [isIntro, setIsIntro] = useState<boolean>(true);

  const completeIntro = () => {
    setIsIntro(false);
  };

  return (
    <div className="App">
      <GlobalStyle />
      {isIntro ? (
        <Intro completeIntro={completeIntro} />
      ) : (
        <>
          <Header />
          <main />
        </>
      )}
    </div>
  );
};
