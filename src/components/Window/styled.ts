import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const WindowContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 760px;
  min-height: 400px;
  max-height: 1000px;
  background-color: black;
  border-radius: 8px;
  overflow: auto;
`;

export const WindowHeader = styled.header`
  position: sticky;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  background-color: #3d4043;
  height: 24px;
  border-radius: 8px 8px 0 0;
  padding: 4px 16px;
  color: white;
`;

export const HeaderButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const HeaderButton = styled.button<{ theme: string; color: string }>`
  position: relative;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  border: none;

  ${({ theme }) => {
    if (theme === "close") {
      return css`
        &:hover::before {
          content: "X";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 8px;
          font-weight: bold;
          color: #3d4043;
        }
      `;
    } else {
      return css`
        &:hover::before {
          content: "ㅡ";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 8px;
          font-weight: bold;
          color: #3d4043;
        }
      `;
    }
  }}
`;

export const TagList = styled.ul`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ProjectLink = styled.a`
  text-decoration: none;
  color: #667ba3;
  margin-bottom: 16px;
`;

export const WindowContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 36px;
  background-color: black;
  color: white;
`;

export const ContentHeaderWrapper = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-left: auto;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const WindowTitle = styled.h3`
  font-size: 36px;
  font-weight: bold;
`;

export const ProjectIcon = styled.i<{ src: string }>`
  margin-left: auto;
  width: 80px;
  aspect-ratio: 1/1;
  background-color: #fff;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${({ src }) => src});
  border-radius: 25%;
`;

export const DurationText = styled.small`
  color: #eceff4;
  font-size: 12px;
`;

export const Description = styled.p`
  margin-top: 36px;
`;
