import { Variants } from 'framer-motion';
import React, { FC, ReactNode } from 'react';
import CloseVector from '../vectors/CloseVector';
import { SModal, SModalBackground, SModalCloseButton, SModalInner } from './styled';

export type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  close: () => void;
}

const modalVariants: Variants = {
  open: {
    opacity: 1,
    display: 'flex',
    transition: {
      duration: 0.2
    }
  },
  closed: {
    opacity: 0,
    display: 'none',
    transition: {
      display: {
        delay: 0.4,
      },
    },
  },
}

const backgroundVariants: Variants = {
  open: {
    opacity: 0.3,
    display: 'block',
    transition: {
      duration: 0.2
    }
  },
  closed: {
    opacity: 0,
    display: 'none',
    transition: {
      display: {
        delay: 0.4,
      },
    },
  },
}

const Modal: FC<ModalProps> = ({ children, isOpen, close }) => {
  return (
    <>
      <SModalBackground
        animate={isOpen ? 'open' : 'closed'}
        variants={backgroundVariants}
      />
      <SModal
        animate={isOpen ? 'open' : 'closed'}
        variants={modalVariants}
      >
        <SModalInner>
          <SModalCloseButton onClick={() => close()}>
            <CloseVector/>
          </SModalCloseButton>
          {children}
        </SModalInner>
      </SModal>
      
    </>
  )
}

export default Modal;