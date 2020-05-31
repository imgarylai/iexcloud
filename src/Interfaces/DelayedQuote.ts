export interface DelayedQuote {
  readonly symbol: string;
  readonly delayedPrice: number;
  readonly delayedSize: number;
  readonly delayedPriceTime: number;
  readonly high: number;
  readonly low: number;
  readonly totalVolume: number;
  readonly processedTime: number;
}
