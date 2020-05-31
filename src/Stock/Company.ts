import { Company } from "../Interfaces";
import { StockApi } from "../API";

export const company = async (symbol: string): Promise<Partial<Company>> => {
  return await StockApi(symbol, "company");
};
