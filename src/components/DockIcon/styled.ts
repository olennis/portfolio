import styled from "@emotion/styled";

import { motion } from "framer-motion";

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IconWrapper = styled(motion.div)<{ src: string }>`
  position: relative;
  width: 40px;
  aspect-ratio: 1/1;
  background-color: #fff;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${({ src }) => src});
  border-radius: 25%;
`;

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
