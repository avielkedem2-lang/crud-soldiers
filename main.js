import express from "express"
import {createTable} from "./database/connection_db.js"


createTable()
const PORT = process.env.PORT


const app = express()

app.use(express.json())



app.listen(PORT, ()=> {
    console.log("The server running...");
})