import { LargestTrades } from "../Interfaces";
import { StockPricesApi } from "../API";

export const largestTrades = async (
  symbol: string
): Promise<Partial<LargestTrades>> => {
  return await StockPricesApi(symbol, "largest-trades");
};
