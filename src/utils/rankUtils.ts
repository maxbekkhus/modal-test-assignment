import { Rank } from "src/models/Rank";

const MAX_ELO = 3000;
const MIN_ELO = 0;

export const getCurrentRankIndex = (userElo: number, ranks: Rank[]) => {
  const clampedUserElo = clampElo(userElo);

  const currentRankIndex = ranks.findIndex(
    rank => clampedUserElo >= rank.minElo && clampedUserElo <= rank.maxElo
  );

  return currentRankIndex;
}

export const getRankRange = (userElo: number, ranks: Rank[]) => {
  const currentRankIndex = getCurrentRankIndex(userElo, ranks);
  const topIndex = ranks.length - 1;

  const low = currentRankIndex - 2;
  const high = currentRankIndex + 2;

  const lowDiff = low < 0 ? low : 0;
  const highDiff = high > topIndex ? high - topIndex : 0;

  const adjustedLow = low - highDiff;
  const adjustedHigh = high - lowDiff;

  const clampedLow = Math.min(Math.max(adjustedLow, 0), topIndex - 2);
  const clampedHigh = Math.min(Math.max(adjustedHigh, 2), topIndex);

  return ranks.slice(clampedLow, clampedHigh + 1);
}

export const clampElo = (userElo: number, min = MIN_ELO, max = MAX_ELO) => {
  return Math.min(Math.max(userElo, min), max);
}

export const getRankIntervalIndicies = (userElo: number, ranks: Rank[]) => {
  const currentRankIndex = getCurrentRankIndex(userElo, ranks);
  const topIndex = ranks.length - 1;

  const low = Math.min(Math.max(currentRankIndex - 1, 0), topIndex - 1);
  const high = Math.min(Math.max(currentRankIndex + 1, 1), topIndex);

  return [low, high];
}