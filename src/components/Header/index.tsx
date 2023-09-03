import {
  Header as HeaderComponent,
  HeaderLeftWrapper,
  HeaderRightWrapper,
} from "./styled";
import { BsApple, BsBatteryCharging } from "react-icons/bs";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiReactquery,
  SiGraphql,
  SiApollographql,
} from "react-icons/si";
import { Dropdown } from "../Dropdown";

const HEADER_ITEMS = [
  {
    title: "Donghun",
    width: 200,
    list: [
      { text: "Github", link: "https://github.com/olennis" },
      {
        text: "Study log",
        link: "https://www.notion.so/d4564a3759c64498ac14606ed15d48da?pvs=4",
      },
    ],
  },
  {
    title: "Contact",
    width: 250,
    list: [
      { text: "Phone", contact: "010-2332-7253" },
      { text: "Email", contact: "donghun0217@kakao.com" },
    ],
  },
];

export const Header = () => {
  const today = new Date().toString().substring(0, 10);

  return (
    <HeaderComponent>
      <HeaderLeftWrapper>
        <h1>
          <BsApple />
          <span className="hidden_text">{"Donghun's Portfolio"}</span>
        </h1>
        <h2 className="hidden_text">Navigation</h2>
        {HEADER_ITEMS.map((item) => (
          <Dropdown
            key={item.title}
            title={item.title}
            list={item.list}
            width={item.width}
          />
        ))}
      </HeaderLeftWrapper>
      <HeaderRightWrapper>
        <SiJavascript />
        <SiTypescript />
        <SiReact />
        <SiNextdotjs />
        <SiGraphql />
        <SiApollographql />
        <SiReactquery />
        <BsBatteryCharging />
        <span>{today}</span>
      </HeaderRightWrapper>
    </HeaderComponent>
  );
};
