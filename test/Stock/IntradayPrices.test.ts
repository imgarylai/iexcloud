import { intradayPrices } from "../../src/Stock";

test("Stock Prices #intradayPrices", async () => {
  const symbol = "TWTR";
  const data = await intradayPrices(symbol.toLowerCase());
  expect(data).not.toEqual(null);
});
