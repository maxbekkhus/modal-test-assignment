import { motion } from "framer-motion";
import styled from "styled-components";

export const SModal = styled(motion.div)`
  display: flex;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.color.surface100};
  border-radius: 4px;
  box-shadow: 3px 3px 6px #0000007A;
  opacity: 0;
  overflow: hidden;

  @media only screen and (max-width: 630px) {
    left: 0;
    right: 0;
    transform: translateY(-50%);
  }
`;

export const SModalInner = styled.div`
  position: relative;
  border-radius: 4px;
`;

export const SModalBackground = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0;
`;

export const SModalCloseButton = styled.button`
  position: absolute;
  z-index: 10;
  top: 8px;
  right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  cursor: pointer;
  background-color: transparent;
  outline: none;
  border: none;

  svg {
    width: 20px;
    height: 20px;
  }
`;