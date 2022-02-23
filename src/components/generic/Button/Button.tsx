import React, { FC, ReactNode } from 'react';
import { SButton } from './styled';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  secondary?: boolean;
}

const Button: FC<ButtonProps> = ({ children, onClick, secondary = false }) => (
  <SButton secondary={secondary} onClick={onClick}>
    {children}
  </SButton>
);

export default Button;