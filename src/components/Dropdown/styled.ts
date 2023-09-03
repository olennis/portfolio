import styled from "@emotion/styled";

export const DropdownWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 28px;
  &:hover {
    h3 {
      font-weight: bold;
    }
    ul {
      display: flex;
    }
  }
`;

export const DropdownTitle = styled.h3`
  &:hover {
    cursor: pointer;
  }
`;

export const DropdownList = styled.ul<{ width: number }>`
  display: none;
  flex-direction: column;
  gap: 4px;
  width: ${({ width }) => width}px;
  height: auto;
  position: absolute;
  z-index: 1;
  padding: 4px;
  top: 28px;
  background-color: #000;
  border-radius: 4px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
`;

export const DropdownItem = styled.li`
  height: 12px;
  padding: 8px 12px;
  background-color: #000;
  border-radius: 4px;
  display: flex;
  color: #fff;
  a {
    text-decoration: none;
    color: #fff;
  }
  &:hover {
    background-color: orange;
    opacity: 1;
    font-weight: bold;
    cursor: pointer;
  }
`;

export const DropdownText = styled.span`
  color: gray;
  display: block;
  margin-left: auto;
`;
