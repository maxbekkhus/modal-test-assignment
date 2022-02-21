import React, { FC, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'src/styles/theme';
import GlobalStyles from './GlobalStyles';

interface StyleProviderProps {
  children: ReactNode
}

const StyleProvider: FC<StyleProviderProps> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles/>
    {children}
  </ThemeProvider>
);

export default StyleProvider;
