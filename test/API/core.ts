import * as process from "process";
import { APIRequest, getBaseURL } from "../../src";

describe("get endpoint", () => {
  const OLD_ENV = process.env;
  beforeEach(() => {
    jest.resetModules();
    process.env = OLD_ENV;
  });

  afterEach(() => {
    process.env = OLD_ENV;
  });

  test("default endpoint is https://sandbox.iexapis.com/stable", () => {
    const { baseURL } = getBaseURL();
    expect(baseURL).toBe("https://sandbox.iexapis.com/stable");
  });

  test("production endpoint with v1 version is https://cloud.iexapis.com/stable", () => {
    process.env.IEX_ENV = "cloud";
    const { baseURL } = getBaseURL();
    expect(baseURL).toBe("https://cloud.iexapis.com/stable");
  });

  test("stable production endpoint set by process.env is https://cloud.iexapis.com/stable", () => {
    process.env.IEX_ENV = "cloud";
    process.env.IEX_VERSION = "stable";
    const { baseURL } = getBaseURL();
    expect(baseURL).toBe("https://cloud.iexapis.com/stable");
  });

  test("stable production endpoint set by parameters is https://cloud.iexapis.com/stable", () => {
    const { baseURL } = getBaseURL("cloud", "stable");
    expect(baseURL).toBe("https://cloud.iexapis.com/stable");
  });
});

test("default endpoint is https://sandbox.iexapis.com/v1/", async () => {
  const res = await APIRequest("/");
  expect(res.status).toBe(200);
});
