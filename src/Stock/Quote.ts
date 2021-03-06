import { StockApi } from "../API";
import { Quote } from "../Interfaces";

export const quote = async (
  symbol: string,
  field?: string
): Promise<Partial<Quote>> => {
  const endpoint = field ? `quote/${field}` : `quote`;
  return await StockApi(symbol, endpoint);
};
