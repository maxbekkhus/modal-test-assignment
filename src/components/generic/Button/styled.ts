import styled, { DefaultTheme } from "styled-components";

const getBackgroundColor = (theme: DefaultTheme, secondary: boolean) => {

}

type SButtonProps = {
  secondary: boolean;
}

export const SButton = styled.button<SButtonProps>`

  border-radius: 4px;
`;