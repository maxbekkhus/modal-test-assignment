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
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 8px;
  margin: 14px 36px;
  padding: 8px 0;
`;

type SPrelimRankShieldProps = {
  index: number;
}

export const SPrelimRankShield = styled.div<SPrelimRankShieldProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-area: ${({ index }) => {
    return `1 / ${index + 1} / 2 / ${index + 2}`;
  }};
  padding: 16px 8px;
`;

export const SPrelimRankBadge = styled.div`
  width: 70%;
  text-align: center;
  text-justify: center;
  background-color: ${({ theme }) => theme.color.surface300};
  color: ${({ theme }) => theme.color.onSurface};
  border-radius: 44px;
  font-size: 10px;
  margin-top: 12px;
  padding: 6px 0;
`;

type SPrelimRankBoxProps = {
  leftIndex: number;
  rightIndex: number;
}

export const SPrelimRankBox = styled.div<SPrelimRankBoxProps>`
  grid-area: ${({ leftIndex, rightIndex }) => `1 / ${leftIndex + 1} / 2 / ${rightIndex + 2}`};
  background-color: ${({ theme }) => theme.color.surface200};
  border-radius: 4px;
`;

type SGradientLineProps = {
  gradientColors: string[]
}

const generateGradient = (colors: string[]): string => {
  const colorValues = colors.map(
    (color, index) => `${color} ${index * 25}%`
  );

  const gradient = `linear-gradient(90deg, ${colorValues.join(',')})`

  return gradient;
}

export const SPrelimRankGradientLine = styled.div<SGradientLineProps>`
  position: absolute;
  top: 40%;
  left: 6%;
  right: 6%;
  height: 2px;
  background-color: green;
  background: ${({ gradientColors }) => generateGradient(gradientColors)};
`;