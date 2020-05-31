import { APIRequest } from "../IEXcloud";
import { LargestTrades } from "../Interfaces";

export const largestTrades = async (
  symbol: string
): Promise<Partial<LargestTrades>> => {
  const { data } = await APIRequest(`/stock/${symbol}/largest-trades`);
  return data;
};
