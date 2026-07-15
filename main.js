import express from "express"
import { createTable } from "./database/connection_db.js"
import router from "./route/route_soldiers.js"


createTable()
const PORT = process.env.PORT


const app = express()

app.use(express.json())

app.use("/soldiers", router)



app.listen(PORT, () => {
    console.log("The server running...");
})