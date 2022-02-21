import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      secondary: string;
      background: string;
      surface: string;
      surfaceLight: string;
      onSurface: string;
    },
    font: {
      primary: string
    },
  }
}

declare module '*.svg';
declare module '*.jpg';
