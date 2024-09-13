import { config } from "dotenv";

config()

export const dbConfig = {
    url: process.env.MONGO_URL + process.env.DB_NAME
}

export default dbConfig