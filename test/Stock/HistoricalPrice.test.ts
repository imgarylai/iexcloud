import { historicalPrice } from "../../src/Stock";
describe("historical price", () => {
  test("Stock Prices #historicalPrice", async () => {
    const symbol = "TWTR";
    const data = await historicalPrice(symbol.toLowerCase());
    expect(data).not.toEqual(null);
  });

  test("Stock Prices #historicalPrice in 5y", async () => {
    const symbol = "TWTR";
    const data = await historicalPrice(symbol.toLowerCase(), "1d", "20190102", {
      chartByDay: true,
    });
    expect(data).not.toEqual(null);
  });
});
