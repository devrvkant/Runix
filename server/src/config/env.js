import dotenv from "dotenv";

dotenv.config();   // Load environment variables from .env file

export const config = {
    port: process.env.PORT || 5500,
    nodeEnv: process.env.NODE_ENV,
}