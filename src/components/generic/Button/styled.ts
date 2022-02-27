import styled, { DefaultTheme } from "styled-components";

const getTypeStyles = (theme: DefaultTheme, secondary: boolean) => {
  if(secondary) {
    return `
      background-color: ${theme.color.surface100};
      border: solid 2px ${theme.color.surface300};
      color: ${theme.color.onSurface};
    `
  }

  return `
    background-color: ${theme.color.primary200};
    background: linear-gradient(90deg, ${theme.color.primary200} 0%, ${theme.color.primary100} 100%) no-repeat padding-box;
    color: ${theme.color.onPrimary};
    padding: 12px 26px;
  `
}

type SButtonProps = {
  secondary: boolean;
}

export const SButton = styled.button<SButtonProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  align-self: center;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  padding: 12px 24px;
  cursor: pointer;
  outline: none;

  ${({ theme, secondary }) => getTypeStyles(theme, secondary)}

  > svg {
    margin-left: 20px;
    transform: scale(1.1);

    path {
      fill: ${({ theme }) => theme.color.onPrimary};
    }
  }
`;