import { Book } from "../Interfaces";
import { StockApi } from "../API";

export const book = async (symbol: string): Promise<Partial<Book>> => {
  return await StockApi(symbol, "book");
};
