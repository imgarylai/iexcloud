import { APIRequest } from "../IEXcloud";
import { Book } from "../Interfaces";

export const book = async (symbol: string): Promise<Partial<Book>> => {
  const { data } = await APIRequest(`/stock/${symbol}/book`);
  return data;
};
