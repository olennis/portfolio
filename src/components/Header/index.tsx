import {
  Header as HeaderComponent,
  HeaderLeftWrapper,
  HeaderRightWrapper,
} from "../../styles/styled";
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

export const Header = () => {
  const today = new Date().toString().substring(0, 10);

  return (
    <HeaderComponent>
      <HeaderLeftWrapper>
        <h1>
          <BsApple />
          <span className="hidden_text">{"donghun's portfolio"}</span>
        </h1>
        <span>Donghun</span>
        <span>Contact</span>
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
