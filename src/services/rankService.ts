import { BASE_URL } from "src/constants"
import { Rank } from "src/models/Rank";

export const fetchRanks = async (path: string) => {
  const timeout = () => new Promise(resolve => setTimeout(resolve, 1000));
  await timeout();

  const url = `${BASE_URL}${path}`;

  const res = await fetch(url);

  const ranks = await res.json();

  return ranks.reverse();
}