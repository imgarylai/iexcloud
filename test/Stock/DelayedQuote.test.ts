import { delayedQuote } from "../../src/Stock";

test("Stock Prices #delayedQuote", async () => {
  const symbol = "TWTR";
  const data = await delayedQuote(symbol.toLowerCase());
  expect(data.symbol).toBe(symbol);
});
