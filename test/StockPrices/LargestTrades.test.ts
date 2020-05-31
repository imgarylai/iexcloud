import { largestTrades } from "../../src/StockPrices";

test("Stock Prices #largestTrades", async () => {
  const symbol = "TWTR";
  const data = await largestTrades(symbol.toLowerCase());
  expect(data).not.toEqual(null);
});
