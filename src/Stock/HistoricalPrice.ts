import { StockApi } from "../API";
import { Range } from "../Types";
import { HistoricalPrice, HistoricalPriceOption } from "../Interfaces";

export const historicalPrice = async (
  symbol: string,
  range?: Range,
  date?: string,
  options: Partial<HistoricalPriceOption> = {}
): Promise<
  ReadonlyArray<Partial<HistoricalPrice>> | Partial<HistoricalPrice>
> => {
  const endpoint = `chart/${[range, date]
    .filter((x) => typeof x === "string")
    .join("/")}`;
  return await StockApi(symbol, endpoint, options);
};
