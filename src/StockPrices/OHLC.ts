import { APIRequest } from "../IEXcloud";
import { OHLC } from "../Interfaces";

export const ohlc = async (symbol: string): Promise<Partial<OHLC>> => {
  const { data } = await APIRequest(`/stock/${symbol}/ohlc`);
  return data;
};
