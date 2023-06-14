import styled from "@emotion/styled";

export const DockWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: end;
  justify-content: center;
  gap: 16px;
  padding: 0 16px 12px;

  height: 50px;

  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);

  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
`;

export const Divider = styled.div`
  width: 1px;
  height: 36px;
  background-color: gray;
`;
