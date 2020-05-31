import { ohlc } from "../../src/Stock";

test("Stock Prices #olch", async () => {
  const symbol = "TWTR";
  const data = await ohlc(symbol.toLowerCase());
  expect(data.symbol).toEqual(symbol);
});
