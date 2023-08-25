import styled from "@emotion/styled";

import { motion } from "framer-motion";

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Icon = styled(motion.i)<{ src: string }>`
  position: relative;
  width: 40px;
  aspect-ratio: 1/1;
  background-color: #fff;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${({ src }) => src});
  border-radius: 25%;
`;
