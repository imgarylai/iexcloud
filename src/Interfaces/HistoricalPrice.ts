export interface HistoricalPrice {
  readonly date: Date;
  readonly high: number;
  readonly low: number;
  readonly volume: number;
  readonly open: number;
  readonly close: number;
  readonly uHigh: number;
  readonly uLow: number;
  readonly uVolume: number;
  readonly uOpen: number;
  readonly uClose: number;
  readonly changeOverTime: number;
  readonly label: string;
  readonly change: number;
  readonly changePercent: number;
}
