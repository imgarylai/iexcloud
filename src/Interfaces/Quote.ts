type LatestTime = "tops" | "sip" | "previousclose" | "close";
type LatestSource =
  | "IEX real time price"
  | "15 minute delayed price"
  | "Close"
  | "Previous close";

export interface Quote {
  readonly latestPrice: number;
  readonly latestVolume: number;
  readonly latestUpdate: number;
  readonly latestTime: string;
  readonly calculationPrice: LatestTime;
  readonly latestSource: LatestSource;
  readonly change: number;
  readonly changePercent: number;
  readonly volume: number;
  readonly open: number;
  readonly openTime: number;
  readonly close: number;
  readonly closeTime: number;
  readonly previousClose: number;
  readonly previousVolume: number;
  readonly high: number;
  readonly low: number;
  readonly extendedPrice: number;
  readonly extendedChange: number;
  readonly extendedChangePercent: number;
  readonly extendedPriceTime: number;
  readonly delayedPrice: number;
  readonly delayedPriceTime: number;
  readonly marketCap: number;
  readonly avgTotalVolume: number;
  readonly week52High: number;
  readonly week52Low: number;
  readonly ytdChange: number;
  readonly iexRealtimePrice: number;
  readonly iexRealtimeSize: number;
  readonly iexLastUpdated: number;
  readonly iexMarketPercent: number;
  readonly iexVolume: number;
  readonly iexBidPrice: number;
  readonly iexBidSize: number;
  readonly iexAskPrice: number;
  readonly iexAskSize: number;
  readonly symbol: string;
  readonly companyName: string;
  readonly primaryExchange: string;
  readonly peRatio: number;
  readonly lastTradeTime: number;
  readonly isUSMarketOpen: boolean;
}
