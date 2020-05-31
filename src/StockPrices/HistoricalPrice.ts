import { APIRequest } from "../IEXcloud";
import { Range } from "../Tpyes";
import { HistoricalPrice, HistoricalPriceOption } from "../Interfaces";

export const historicalPrice = async (
  symbol: string,
  range?: Range,
  date?: string,
  options: Partial<HistoricalPriceOption> = {}
): Promise<ReadonlyArray<Partial<HistoricalPrice>>> => {
  const { data } = await APIRequest(
    `/stock/${symbol}/chart/${[range, date]
      .filter((x) => typeof x === "string")
      .join("/")}`,
    options
  );
  return data;
};
