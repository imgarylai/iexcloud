export interface OHLC {
  readonly open: {
    readonly price: number;
    readonly time: number;
  };
  readonly close: {
    readonly price: number;
    readonly time: number;
  };
  readonly high: number;
  readonly low: number;
  readonly volume: number;
  readonly symbol: string;
}
