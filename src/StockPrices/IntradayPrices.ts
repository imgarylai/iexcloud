import { APIRequest } from "../IEXcloud";
import { IntradayPrices, IntradayPricesOption } from "../Interfaces";

export const intradayPrices = async (
  symbol: string,
  options: Partial<IntradayPricesOption> = {}
): Promise<ReadonlyArray<Partial<IntradayPrices>>> => {
  const { data } = await APIRequest(
    `/stock/${symbol}/intraday-prices`,
    options
  );
  return data;
};
