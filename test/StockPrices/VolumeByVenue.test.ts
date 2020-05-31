import { volumeByVenue } from "../../src/StockPrices";

test("Stock Prices #intradayPrices", async () => {
  const symbol = "TWTR";
  const data = await volumeByVenue(symbol.toLowerCase());
  expect(data).not.toEqual(null);
});
