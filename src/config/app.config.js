import { config } from "dotenv"

config()

export const appConfig = {
    port: parseInt(process.env.APP_PORT) || 8080,
    host: process.env.APP_HOST
}

export default appConfig