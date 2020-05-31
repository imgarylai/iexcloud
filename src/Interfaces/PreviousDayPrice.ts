import { HistoricalPrice } from "./HistoricalPrice";

export interface PreviousDayPrice extends HistoricalPrice {
  readonly symbol: string;
}
