import { PriceOnly } from "../Interfaces";
import { StockPricesApi } from "../API";

export const price = async (symbol: string): Promise<Partial<PriceOnly>> => {
  return await StockPricesApi(symbol, "price");
};
