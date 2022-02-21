import styled from "styled-components";

type SParagraphProps = {
  center?: boolean;
}

export const SParagraph = styled.p<SParagraphProps>`
  font-family: ${({ theme }) => theme.font.primary};
  font-weight: 400;
  text-align: ${({ center }) => center ? 'center': 'initial'};
  font-size: 16px;
  color: ${({ theme }) => theme.color.onSurface};
`;