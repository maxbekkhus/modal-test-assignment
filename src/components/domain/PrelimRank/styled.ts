import Paragraph from "src/components/generic/Paragraph";
import styled from "styled-components";

export const SPrelimRankContainer = styled.div`
  width: 100%;
  padding: 32px 0;
  width: 630px;
`;

export const SPrelimRankMsg = styled(Paragraph)`
  p {
    margin-top: 32px;
  }
`;

type SPrelimRankSpanProps = {
  color?: string;
}

export const SPrelimRankSpan = styled.span<SPrelimRankSpanProps>`
  color: ${({ color, theme }) => color || theme.color.onSurface };
`;

export const SPrelimRankShieldRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 14px 36px;
  padding: 8px 0;
`;

export const SPrelimRankShield = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  + div {
    margin-left: 16px;
  }
`;

export const SPrelimRankBadge = styled.div`
  width: 70%;
  text-align: center;
  text-justify: center;
  background-color: ${({ theme }) => theme.color.surfaceLight};
  color: ${({ theme }) => theme.color.onSurface};
  border-radius: 44px;
  font-size: 10px;
  line-height: 24px;
  margin-top: 12px;
`;