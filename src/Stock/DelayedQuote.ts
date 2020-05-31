import { StockApi } from "../API";
import { DelayedQuote, DelayedQuoteOption } from "../Interfaces";

export const delayedQuote = async (
  symbol: string,
  options: Partial<DelayedQuoteOption> = {}
): Promise<Partial<DelayedQuote>> => {
  return await StockApi(symbol, "delayed-quote", options);
};
