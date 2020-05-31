import { APIRequest } from "../IEXcloud";
import { PriceOnly } from "../Interfaces";

export const price = async (symbol: string): Promise<Partial<PriceOnly>> => {
  const { data } = await APIRequest(`/stock/${symbol}/price`);
  return data;
};
