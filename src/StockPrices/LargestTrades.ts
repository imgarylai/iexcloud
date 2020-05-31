import { LargestTrades } from "../Interfaces";
import { StockApi } from "../API";

export const largestTrades = async (
  symbol: string
): Promise<Partial<LargestTrades>> => {
  return await StockApi(symbol, "largest-trades");
};
