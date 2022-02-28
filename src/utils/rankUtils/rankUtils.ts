import { Rank } from "src/models/Rank";

const MAX_ELO = 3000;
const MIN_ELO = 0;

/**
 * Getting the index of the rank matching a user elo
 */
export const getCurrentRankIndex = (userElo: number, ranks: Rank[]) => {
  const clampedUserElo = clampElo(userElo);

  const currentRankIndex = ranks.findIndex(
    rank => clampedUserElo >= rank.minElo && clampedUserElo <= rank.maxElo
  );

  return currentRankIndex;
}

/**
 * Getting a range of 5 ranks based on user elo
 */
export const getRankRange = (userElo: number, ranks: Rank[]) => {
  const currentRankIndex = getCurrentRankIndex(userElo, ranks);
  const topIndex = ranks.length - 1;

  const start = currentRankIndex - 2;
  const end = currentRankIndex + 2;

  const startDiff = start < 0 ? start : 0;
  const endDiff = end > topIndex ? end - topIndex : 0;

  const adjustedStart = start - endDiff;
  const adjustedEnd = end - startDiff;

  const clampedStart = Math.min(Math.max(adjustedStart, 0), topIndex - 2);
  const clampedEnd = Math.min(Math.max(adjustedEnd, 2), topIndex);

  return ranks.slice(clampedStart, clampedEnd + 1);
}

/**
 * Clamping the user elo within the min max range
 */
export const clampElo = (userElo: number, min = MIN_ELO, max = MAX_ELO) => {
  return Math.min(Math.max(userElo, min), max);
}

/**
 * Getting the start and end indicies of the prelim rank boundries
 */
export const getRankIntervalIndicies = (userElo: number, ranks: Rank[]) => {
  const currentRankIndex = getCurrentRankIndex(userElo, ranks);
  const topIndex = ranks.length - 1;

  const start = Math.min(Math.max(currentRankIndex - 1, 0), topIndex - 1);
  const end = Math.min(Math.max(currentRankIndex + 1, 1), topIndex);

  return [start, end];
}