import mongoose from "mongoose";
import dbConfig from "./db.config.js";

export async function mongoDb() {
    await mongoose.connect(dbConfig.url)
}

export default mongoDb