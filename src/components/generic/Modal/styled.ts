import { motion } from "framer-motion";
import styled from "styled-components";

export const SModal = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.color.surface};
  border-radius: 4px;
  box-shadow: 3px 3px 6px #0000007A;
  opacity: 0;
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
  top: 16px;
  right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  cursor: pointer;
  background-color: transparent;
  outline: none;
  border: none;
`;