import { company } from "../../src/Stock";

test("Stock Prices #company", async () => {
  const symbol = "AAPL";
  const data = await company(symbol.toLowerCase());
  expect(data.symbol).toBe(symbol);
});
