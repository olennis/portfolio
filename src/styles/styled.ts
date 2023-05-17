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
  padding-left: 10px;
  width: 200px;
  height: 32px;
  border-radius: 16px;
`;

export const IntroInputArrowIcon = styled.span`
  display: block;
  position: absolute;
  top: 4px;
  right: -6px;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  border: 1px solid gray;
  background-image: url("/icons/arrow-right.svg");
  background-repeat: no-repeat;
  background-size: cover;
`;

export const IntroMessage = styled.p`
  margin-top: 18px;
`;
