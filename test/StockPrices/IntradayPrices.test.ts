import { intradayPrices } from "../../src/StockPrices";

test("Stock Prices #intradayPrices", async () => {
  const symbol = "TWTR";
  const data = await intradayPrices(symbol.toLowerCase());
  expect(data).not.toEqual(null);
});
