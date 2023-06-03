import { useState } from "react";
import { GlobalStyle } from "./styles/global";
import { Intro, Header, Dock } from "./components";

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
          <main>
            <Dock />
          </main>
        </>
      )}
    </div>
  );
};
