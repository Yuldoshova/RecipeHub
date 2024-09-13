import express from "express"
import appConfig from "./config/app.config.js"
import mongoDb from "./config/mongo.config.js"

const app = express()

mongoDb()
    .then(() => console.log("Connected MongoDB!!!"))
    .catch((error) => console.log(`Database connecting error: ` + error))

app.listen(appConfig.port, appConfig.host, () => {
    console.log(`Server starting on port ${appConfig.port}`)
})
