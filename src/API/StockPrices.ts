import { APIRequest } from "./core";

export const StockPricesApi = async (
  symbol: string,
  endpoint: string,
  // eslint-disable-next-line @typescript-eslint/ban-types
  options?: object | null
): Promise<unknown> => {
  const { data } = await APIRequest(`/stock/${symbol}/${endpoint}`, options);
  return data;
};
