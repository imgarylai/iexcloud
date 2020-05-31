import { book } from "../../src/StockPrices";

test("Stock Prices #book", async () => {
  const symbol = "AAPL";
  const data = await book(symbol.toLowerCase());
  expect(data.quote.symbol).toBe(symbol);
});
