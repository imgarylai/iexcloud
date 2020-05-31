import { PriceOnly } from "../Interfaces";
import { StockApi } from "../API";

export const price = async (symbol: string): Promise<Partial<PriceOnly>> => {
  return await StockApi(symbol, "price");
};
