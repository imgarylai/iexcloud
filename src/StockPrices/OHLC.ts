import { OHLC } from "../Interfaces";
import { StockApi } from "../API";

export const ohlc = async (symbol: string): Promise<Partial<OHLC>> => {
  return await StockApi(symbol, "ohlc");
};
