import { useEffect, useState } from "react";
import { GlobalStyle } from "./styles/global";
import { Intro, Header, Dock, Window } from "./components";
import { Data, PROJECT_DATA } from "./data/data";

const initialData = {
  id: -1,
  title: "",
  duration: "",
  description: "",
  content: "",
  icon: "",
  isPersonal: false,
  company: "",
  tags: [],
};

export const App = () => {
  const [isIntro, setIsIntro] = useState<boolean>(true);
  const [isWindowOpen, setIsWindowOpen] = useState<boolean>(false);
  const [currentData, setCurrentData] = useState<Data>(initialData);

  const completeIntro = () => {
    setIsIntro(false);
  };

  const openWindow = (id: number) => {
    if (!isWindowOpen) {
      setIsWindowOpen(true);
    }

    const currentData =
      PROJECT_DATA.find((data) => data.id === id) || initialData;

    setCurrentData(currentData);
  };

  const closeWindow = () => {
    setIsWindowOpen(false);
  };

  useEffect(() => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeWindow();
    }
  };

  window.addEventListener('keydown', handleKeyDown);

  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
}, []);

  return (
    <div className="App">
      <GlobalStyle />
      {isIntro ? (
        <Intro completeIntro={completeIntro} />
      ) : (
        <>
          <Header />
          <main>
            <Dock openWindow={openWindow} projectData={PROJECT_DATA} />
            {isWindowOpen && (
              <Window currentData={currentData} closeWindow={closeWindow} />
            )}
          </main>
        </>
      )}
    </div>
  );
};
