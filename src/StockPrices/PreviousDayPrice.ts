import { PreviousDayPrice } from "../Interfaces";
import { StockPricesApi } from "../API";

export const previous = async (
  symbol: string
): Promise<Partial<PreviousDayPrice>> => {
  return await StockPricesApi(symbol, `previous`);
};
