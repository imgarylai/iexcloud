import { delayedQuote } from "../../src/StockPrices";

test("Stock Prices #delayedQuote", async () => {
  const symbol = "TWTR";
  const data = await delayedQuote(symbol.toLowerCase());
  expect(data.symbol).toBe(symbol);
});
