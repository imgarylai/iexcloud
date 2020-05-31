import { APIRequest } from "../IEXcloud";
import { PreviousDayPrice } from "../Interfaces";

export const previous = async (
  symbol: string
): Promise<Partial<PreviousDayPrice>> => {
  const { data } = await APIRequest(`/stock/${symbol}/previous`);
  return data;
};
