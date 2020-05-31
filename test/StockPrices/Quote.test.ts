import { quote } from "../../src/StockPrices";

describe("get quote", () => {
  test("Stock Prices #quote", async () => {
    const symbol = "TWTR";
    const data = await quote(symbol.toLowerCase());
    expect(data.symbol).toEqual(symbol);
  });

  test("Stock Prices #quote latestPrice", async () => {
    const symbol = "TWTR";
    const data = await quote(symbol.toLowerCase(), "latestPrice");
    expect(typeof data === "number").toBe(true);
  });
});
