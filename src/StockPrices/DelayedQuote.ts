import { APIRequest } from "../IEXcloud";
import { DelayedQuote, DelayedQuoteOption } from "../Interfaces";

export const delayedQuote = async (
  symbol: string,
  options: Partial<DelayedQuoteOption> = {}
): Promise<Partial<DelayedQuote>> => {
  const { data } = await APIRequest(`/stock/${symbol}/delayed-quote`, options);
  return data;
};
