import { largestTrades } from "../../src/Stock";

test("Stock Prices #largestTrades", async () => {
  const symbol = "TWTR";
  const data = await largestTrades(symbol.toLowerCase());
  expect(data).not.toEqual(null);
});
