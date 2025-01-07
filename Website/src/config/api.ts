import { DotenvConfigOptions } from "dotenv";

const dotenvConfig: DotenvConfigOptions = {
  path: "../.env",
};
export const API_CONFIG = {
  BASE_URL: "https://api.langflow.astra.datastax.com",
  ENDPOINT: "SocialMediabot",
};