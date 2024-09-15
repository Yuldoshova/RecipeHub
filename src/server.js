import express from "express"
import morgan from "morgan"
import bodyParser from "body-parser"
import appConfig from "./config/app.config.js"
import mongoDb from "./config/mongo.config.js"
import routes from "./routes/index.routes.js"

const app = express()

app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoDb()
    .then(() => console.log("Connected MongoDB!!!"))
    .catch((error) => console.log(`Database connecting error: ` + error))

app.use('/api/v1', routes)

app.listen(appConfig.port, appConfig.host, () => {
    console.log(`Server starting on port ${appConfig.port}`)
})
