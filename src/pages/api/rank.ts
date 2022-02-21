import type { NextApiRequest, NextApiResponse } from 'next'
import jsonRanks from 'src/resources/ranks.json';

type Rank = {
  id: number,
  name: string,
  minElo: number,
  maxElo: number,
  color: string,
  textColor: string,
  image: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Rank[]>
) {
  res.status(200).json(jsonRanks)
}
