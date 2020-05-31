import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();
export const getBaseURL = (
  iex_env: string = "sandbox",
  iex_version: string = "stable"
) => {
  const IEX_ENV = process.env.IEX_ENV || iex_env;
  const IEX_VERSION = process.env.IEX_VERSION || iex_version;

  const baseURL = `https://${IEX_ENV}.iexapis.com/${IEX_VERSION}`;
  return { baseURL };
};

export const APIRequest = async (url, options = {}) => {
  const { baseURL } = getBaseURL();
  const token = process.env.IEX_API_TOKEN;
  try {
    return await axios({
      baseURL: baseURL,
      url: url,
      params: {
        ...options,
        token: token,
      },
    });
  } catch (e) {
    throw e;
  }
};