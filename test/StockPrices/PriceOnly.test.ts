import { price } from "../../src/StockPrices";

test("Stock Prices #price", async () => {
  const symbol = "TWTR";
  const data = await price(symbol.toLowerCase());
  expect(typeof data === "number").toBe(true);
});
