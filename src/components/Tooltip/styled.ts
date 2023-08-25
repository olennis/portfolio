import styled from "@emotion/styled";

export const TooltipWrapper = styled.div`
  position: relative;
  margin-bottom: 15px;
  padding: 4px 8px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  text-align: center;
  color: #fff;

  &:after {
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 8px solid #000;
    content: "";
    position: absolute;
  }
`;
