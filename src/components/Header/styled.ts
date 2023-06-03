import styled from "@emotion/styled";

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
`;
