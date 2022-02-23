import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary100: string;
      primary200: string;
      onPrimary: string;
      secondary: string;
      background: string;
      surface100: string;
      surface200: string;
      surface300: string;
      onSurface: string;
      grey1: string;
    },
    font: {
      primary: string
    },
  }
}

declare module '*.svg';
declare module '*.jpg';
