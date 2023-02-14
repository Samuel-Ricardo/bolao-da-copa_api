import { config } from "dotenv";
config();

export const ENV = {
  ...process.env,
  DATABASE_URL: process.env.DATABASE_URL,
  JWT_SECRET: process.env.JWT_SECRET
}
