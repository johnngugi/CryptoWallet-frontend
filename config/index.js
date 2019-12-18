import dotenv from "dotenv";
dotenv.config({ path: __dirname + "../.env" });

export default {
  API_BASE_URL: process.env.API_BASE_URL,
  API_BASE_PORT: process.env.API_BASE_PORT
};
