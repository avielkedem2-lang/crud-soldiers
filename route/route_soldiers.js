import express from "express"
import {checkBody} from "../middleware/middleeware_soldiers.js"
import {bodyValidation} from "../serves/server_soldiers.js"




const router = express.Router()


export default router;



router.post("/",checkBody,async (req, res) => {
    const body = req.body
    const soldier = await bodyValidation(body)
    res.status(soldier.status).json(soldier.response)
})