import { APIRequest } from "../IEXcloud";
import { Quote } from "../Interfaces";

export const quote = async (
  symbol: string,
  field?: string
): Promise<Partial<Quote>> => {
  const url = field
    ? `/stock/${symbol}/quote/${field}`
    : `/stock/${symbol}/quote`;
  const { data } = await APIRequest(url);
  return data;
};
