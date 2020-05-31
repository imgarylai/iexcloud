import { StockApi } from "../API";
import { IntradayPrices, IntradayPricesOption } from "../Interfaces";

export const intradayPrices = async (
  symbol: string,
  options: Partial<IntradayPricesOption> = {}
): Promise<
  ReadonlyArray<Partial<IntradayPrices>> | Partial<IntradayPrices>
> => {
  return await StockApi(symbol, "intraday-prices", options);
};
