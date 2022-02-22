import type { NextApiRequest, NextApiResponse } from 'next'
import { Rank } from 'src/models/Rank';
import jsonRanks from 'src/resources/ranks.json';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Rank[]>
) {
  res.status(200).json(jsonRanks);
}
