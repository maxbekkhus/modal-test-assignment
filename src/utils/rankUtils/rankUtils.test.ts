import { Rank } from 'src/models/Rank';
import jsonRanks from 'src/resources/ranks.json';
import { clampElo, getCurrentRankIndex, getRankIntervalIndicies, getRankRange, MAX_ELO } from './rankUtils';

describe('Rank Utils', () => {
  const mockRanks: Rank[] = jsonRanks;
  let mockUserElo: number;
  
  beforeEach(() => {
    mockUserElo = 1400;
  })

  describe('getCurrentRankIndex()', () => {
    it('returns the correct index for an expected elo', () => {
      // Act
      const index = getCurrentRankIndex(mockUserElo, mockRanks);

      // Assert
      expect(index).toEqual(6);
    })

    it('returns top rank if elo is higher than max', () => {
      // Arrange
      mockUserElo = 5000;

      // Act
      const index = getCurrentRankIndex(mockUserElo, mockRanks);

      // Assert
      expect(index).toEqual(0);
    })

    it('returns bottom rank if elo is lower than min', () => {
      // Arrange
      mockUserElo = -1000;

      // Act
      const index = getCurrentRankIndex(mockUserElo, mockRanks);

      // Assert
      expect(index).toEqual(11)
    })
  })

  describe('getRankRange()', () => {
    it('gets the 5 relevant ranks based on an expected elo', () => {
      // Act
      const range = getRankRange(mockUserElo, mockRanks);

      // Assert
      expect(range).toEqual(
        mockRanks.slice(4, 9)
      );
    })

    it('gets the highest 5 ranks if elo is higher than max', () => {
      // Arrange
      mockUserElo = 5000;

      // Act
      const range = getRankRange(mockUserElo, mockRanks);

      // Assert
      expect(range).toEqual(mockRanks.slice(0, 5))
    })

    it('gets the lowest 5 ranks if elo is lower than min', () => {
      // Arrange
      mockUserElo = -1000;

      // Act
      const range = getRankRange(mockUserElo, mockRanks);

      // Assert
      expect(range).toEqual(mockRanks.slice(7, 12))
    })
  })

  describe('getRankIntervalIndicies()', () => {
    it('gets the 3 middle ranks based on middle elo', () => {
      // Act
      const indicies = getRankIntervalIndicies(mockUserElo, mockRanks);

      // Assert
      expect(indicies).toEqual([5, 7])
    })

    it('gets the two highest ranks if elo is max', () => {
      // Arrange
      mockUserElo = 2000;

      // Act
      const indicies = getRankIntervalIndicies(mockUserElo, mockRanks);

      // Assert
      expect(indicies).toEqual([0, 1])
    })

    it('gets the two lowers ranks if elo is min', () => {
      // Arrange
      mockUserElo = 999;

      // Act
      const indicies = getRankIntervalIndicies(mockUserElo, mockRanks);

      // Assert
      expect(indicies).toEqual([10, 11])
    })
  })

  describe('clampElo()', () => {
    it('clamps to max if higher', () => {
      // Arrange
      mockUserElo = 5000;

      // Act
      const clampedElo = clampElo(mockUserElo);

      // Assert
      expect(clampedElo).toEqual(3000);
    })

    it('clamps to min if lower', () => {
      // Arrange
      mockUserElo = -1000;

      // Act
      const clampedElo = clampElo(mockUserElo);

      // Assert
      expect(clampedElo).toEqual(0);
    })

    it('clamps to given elo if within range', () => {
      // Act
      const clampedElo = clampElo(mockUserElo);

      // Assert
      expect(clampedElo).toEqual(mockUserElo);
    })
  })
})