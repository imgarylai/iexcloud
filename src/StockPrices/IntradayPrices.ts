import { StockPricesApi } from "../API";
import { IntradayPrices, IntradayPricesOption } from "../Interfaces";

export const intradayPrices = async (
  symbol: string,
  options: Partial<IntradayPricesOption> = {}
): Promise<
  ReadonlyArray<Partial<IntradayPrices>> | Partial<IntradayPrices>
> => {
  return await StockPricesApi(symbol, "intraday-prices", options);
};
