export interface IntradayPrices {
  readonly date: Date;
  readonly minute: string;
  readonly marketAverage: number;
  readonly marketNotional: number;
  readonly marketNumberOfTrades: number;
  readonly marketOpen: number;
  readonly marketClose: number;
  readonly marketHigh: number;
  readonly marketLow: number;
  readonly marketVolume: number;
  readonly marketChangeOverTime: number;
  readonly simplifyFactor: readonly [number, number];
  readonly changeOverTime: number;
  readonly label: number;
  readonly average: number;
  readonly notional: number;
  readonly numberOfTrades: number;
  readonly high: number;
  readonly low: number;
  readonly volume: number;
  readonly open: number;
  readonly close: number;
}
