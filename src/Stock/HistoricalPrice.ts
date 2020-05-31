import { StockApi } from "../API";
import { HistoricalPrice, HistoricalPriceOption } from "../Interfaces";

type Range =
  | "max"
  | "5y"
  | "2y"
  | "1y"
  | "ytd"
  | "6m"
  | "3m"
  | "1m"
  | "1mm"
  | "5d"
  | "5dm"
  | "date"
  | "dynamic"
  | string;

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
