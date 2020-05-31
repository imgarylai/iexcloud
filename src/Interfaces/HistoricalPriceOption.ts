export interface HistoricalPriceOption {
  chartCloseOnly: boolean;
  chartByDay: boolean;
  chartSimplify: boolean;
  chartInterval: number;
  changeFromClose: boolean;
  chartLast: number;
  range: string;
  exactDate: string;
  sort: string;
  includeToday: boolean;
}
