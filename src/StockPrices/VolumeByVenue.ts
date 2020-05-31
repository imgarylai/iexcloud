import { APIRequest } from "../IEXcloud";
import { VolumeByVenue } from "../Interfaces";

export const volumeByVenue = async (
  symbol: string
): Promise<Partial<VolumeByVenue>> => {
  const { data } = await APIRequest(`/stock/${symbol}/volume-by-venue`);
  return data;
};
