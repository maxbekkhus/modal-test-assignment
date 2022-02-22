import React, { FC, useCallback, useMemo } from 'react';
import Paragraph from 'src/components/generic/Paragraph';
import { Rank } from 'src/models/Rank';
import { SPrelimRankBadge, SPrelimRankContainer, SPrelimRankShield, SPrelimRankShieldRow, SPrelimRankSpan } from './styled';
import jsonText from 'src/resources/texts.json';
import Image from 'next/image';
import { getCurrentRankIndex, getRankIntervalIndicies, getRankRange } from 'src/utils/rankUtils';

export type PrelimRankProps = {
  ranks: Rank[];
  userElo: number;
}

const PrelimRank: FC<PrelimRankProps> = ({ ranks, userElo }) => {

  const currentRankIndex = useMemo(
    () => getCurrentRankIndex(userElo, ranks)
  , [ranks, userElo]);

  const rankRange = useMemo(
    () => getRankRange(userElo, ranks)
  , [userElo, ranks]);

  const rankIntervalIndicies = useMemo<number[]>(
    () => getRankIntervalIndicies(userElo, ranks)
  , [userElo, ranks]);

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
  }, [rankIntervalIndicies]);

  const renderRankShields = useCallback(() => (
    rankRange.map((rank) => (
      <SPrelimRankShield key={`${rank.id}${rank.name}`}>
        <Image src={`/images/${rank.image}.png`} width={621} height={621} />
        <SPrelimRankBadge>
          {rank.name}
        </SPrelimRankBadge>
      </SPrelimRankShield>
    ))
  ), [ranks, userElo, rankRange]);
  
  return (
    <SPrelimRankContainer>
      {renderRankParagraph()}
      <SPrelimRankShieldRow>
        {renderRankShields()}
      </SPrelimRankShieldRow>
      <Paragraph center>
        {jsonText.unlock}
      </Paragraph>
    </SPrelimRankContainer>
  )
};

export default PrelimRank;