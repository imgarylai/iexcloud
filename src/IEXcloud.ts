import * as process from "process";
import axios, { AxiosResponse } from "axios";
import * as dotenv from "dotenv";
dotenv.config();

export const getBaseURL = (
  iexEnv = "sandbox",
  iexVersion = "stable"
): { baseURL: string } => {
  const IEX_ENV = process.env.IEX_ENV || iexEnv;
  const IEX_VERSION = process.env.IEX_VERSION || iexVersion;

  const baseURL = `https://${IEX_ENV}.iexapis.com/${IEX_VERSION}`;
  return { baseURL };
};

export const APIRequest = async (
  url: string,
  options = {}
): Promise<AxiosResponse> => {
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
    return e;
  }
};
