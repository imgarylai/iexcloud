import { Book } from "../Interfaces";
import { StockPricesApi } from "../API";

export const book = async (symbol: string): Promise<Partial<Book>> => {
  return await StockPricesApi(symbol, "book");
};
