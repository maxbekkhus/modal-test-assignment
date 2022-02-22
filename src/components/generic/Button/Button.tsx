import React, { FC, ReactNode } from 'react';
import { SButton } from './styled';

type ButtonProps = {
  children: ReactNode;
  secondary?: boolean;
}

const Button: FC<ButtonProps> = ({ children, secondary = false }) => (
  <SButton secondary={secondary}>
    {children}
  </SButton>
);

export default Button;