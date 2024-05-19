import styled from "@emotion/styled";

export const IntroWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const IntroIcon = styled.div`
  margin: auto;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #fff;
  aspect-ratio: 1/1;
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: -10px;
  background-image: url("https://olennis.github.io/portfolio/images/Donghun.png");
`;

export const IntroName = styled.strong`
  margin: 18px 0;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
`;

export const IntroInputWrapper = styled.div`
  background-color: #fff;
  position: relative;
  width: 200px;
  height: 32px;
  border-radius: 16px;
`;

export const IntroInput = styled.input`
  border: none;
  padding: 4px 10px 0;
  width: 200px;
  height: 32px;
  border-radius: 16px;
`;

export const IntroInputArrowIcon = styled.div`
  position: absolute;
  top: 8px;
  right: -10px;
  border-radius: 50%;
  background-image: url("/icons/arrow-right.svg");
  background-repeat: no-repeat;
  background-size: cover;
`;

export const IntroMessage = styled.p`
  margin-top: 18px;
`;
