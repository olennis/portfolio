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

export const Header = styled.header`
  background-color: #000;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  opacity: 0.6;
  color: #fff;
  height: 28px;
`;

export const HeaderLeftWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  span {
    &:hover {
      cursor: pointer;
      font-weight: bold;
    }
  }
`;

export const HeaderRightWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  /* span {
    &:hover {
      cursor: pointer;
      font-weight: bold;
    }
  } */
`;
