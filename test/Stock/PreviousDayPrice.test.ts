import { previous } from "../../src/Stock";

test("Stock Prices #previous", async () => {
  const symbol = "TWTR";
  const data = await previous(symbol.toLowerCase());
  expect(data.symbol).toEqual(symbol);
});
