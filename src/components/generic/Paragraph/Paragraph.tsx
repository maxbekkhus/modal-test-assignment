import React, { FC, ReactNode } from 'react';
import { SParagraph } from './styled';

type ParagraphProps = {
  children: ReactNode;
  center?: boolean;
}

const Paragraph: FC<ParagraphProps> = ({ children, center = false}) => (
  <SParagraph center={center}>
    {children}
  </SParagraph>
);

export default Paragraph;