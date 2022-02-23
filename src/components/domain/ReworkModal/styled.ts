import styled from "styled-components";

export const SHeaderContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  width: 630px;
  background-color: ${({ theme }) => `${theme.color.surface200}66`};
`;

export const SHeaderTextContainer = styled.div`
  position: absolute;
  left: 0;
  top: 52%;
  bottom: 0;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 10%;

  > ul {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const SHeaderParagraph = styled.p`
  font-family: ${({ theme }) => theme.font.primary};
  font-weight: 400;
  text-align: center;
  font-size: 16px;
  color: ${({ theme }) => theme.color.onSurface};
`;



export const SButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 10%;
  width: 100%;
  background-color: ${({ theme }) => theme.color.surface200};
`;