import { volumeByVenue } from "../../src/Stock";

test("Stock Prices #intradayPrices", async () => {
  const symbol = "TWTR";
  const data = await volumeByVenue(symbol.toLowerCase());
  expect(data).not.toEqual(null);
});
