import { OHLC } from "../Interfaces";
import { StockPricesApi } from "../API";

export const ohlc = async (symbol: string): Promise<Partial<OHLC>> => {
  return await StockPricesApi(symbol, "ohlc");
};
