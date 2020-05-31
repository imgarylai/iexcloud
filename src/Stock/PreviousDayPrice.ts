import { PreviousDayPrice } from "../Interfaces";
import { StockApi } from "../API";

export const previous = async (
  symbol: string
): Promise<Partial<PreviousDayPrice>> => {
  return await StockApi(symbol, `previous`);
};
