import { VolumeByVenue } from "../Interfaces";
import { StockApi } from "../API";

export const volumeByVenue = async (
  symbol: string
): Promise<Partial<VolumeByVenue>> => {
  return await StockApi(symbol, "volume-by-venue");
};
