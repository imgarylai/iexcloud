import { VolumeByVenue } from "../Interfaces";
import { StockPricesApi } from "../API";

export const volumeByVenue = async (
  symbol: string
): Promise<Partial<VolumeByVenue>> => {
  return await StockPricesApi(symbol, "volume-by-venue");
};
