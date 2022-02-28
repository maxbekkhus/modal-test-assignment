import React, { FC, useCallback, useMemo } from 'react';
import Paragraph from 'src/components/generic/Paragraph';
import { Rank } from 'src/models/Rank';
import { 
  SPrelimRankBadge, 
  SPrelimRankHighlight, 
  SPrelimRankContainer, 
  SPrelimRankGradientLine, 
  SPrelimRankShield, 
  SPrelimRankShieldRow, 
  SPrelimRankSpan 
} from './styled';
import jsonText from 'src/resources/texts.json';
import Image from 'next/image';
import { 
  getRankIntervalIndicies, 
  getRankRange 
} from 'src/utils/rankUtils';

export type PrelimRankProps = {
  ranks: Rank[];
  userElo: number;
}

const PrelimRank: FC<PrelimRankProps> = ({ ranks, userElo }) => {

  // Range of 5 ranks to display
  const rankRange = useMemo(
    () => getRankRange(userElo, ranks)
  , [userElo, ranks]);

  // Range of 5 rank colors for generating gradient
  const rankColorRange = useMemo(
    () => rankRange.map(rank => rank.color)
  , [rankRange]);

  // Indicies of prelim boundries
  const rankIntervalIndicies = useMemo(
    () => getRankIntervalIndicies(userElo, rankRange)
  , [userElo, rankRange]);

  const renderRankParagraph = useCallback(() => {
    const [low, high] = rankIntervalIndicies;
    return (
      <Paragraph center>
        {jsonText.rankInterval[0]}
        <SPrelimRankSpan color={ranks[low].textColor}>
          {ranks[low].name}
        </SPrelimRankSpan>
        {jsonText.rankInterval[1]}
        <SPrelimRankSpan color={ranks[high].textColor}>
          {ranks[high].name}
        </SPrelimRankSpan>
      </Paragraph>
    )
  }, [rankIntervalIndicies, ranks]);

  const renderRankShields = useCallback(() => (
    rankRange.map((rank, index) => (
      <SPrelimRankShield key={`${rank.id}${rank.name}`} index={index}>
        <Image 
          src={`/images/${rank.image}.png`} 
          width={621} 
          height={621}
          priority
          alt={rank.name}
        />
        <SPrelimRankBadge>
          {rank.name}
        </SPrelimRankBadge>
      </SPrelimRankShield>
    ))
  ), [rankRange]);
  
  return (
    <SPrelimRankContainer>
      {renderRankParagraph()}
      <SPrelimRankShieldRow>
        <SPrelimRankGradientLine gradientColors={rankColorRange} />
        <SPrelimRankHighlight 
          leftIndex={rankIntervalIndicies[0]}
          rightIndex={rankIntervalIndicies[1]}
        />
        {renderRankShields()}
      </SPrelimRankShieldRow>
      <Paragraph center>
        {jsonText.unlock}
      </Paragraph>
    </SPrelimRankContainer>
  )
};

export default PrelimRank;