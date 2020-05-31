import { price } from "../../src/Stock";

test("Stock Prices #price", async () => {
  const symbol = "TWTR";
  const data = await price(symbol.toLowerCase());
  expect(typeof data === "number").toBe(true);
});
