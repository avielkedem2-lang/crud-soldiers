import express from "express"
import {checkBody, checkQuery, checkParams} from "../middleware/middleeware_soldiers.js"
import {bodyValidation, getAllSoldiers, getSoldierByUnit, 
    getSoldierByRank, getSoldierByStatus, getSoldierById,
    updateSolderById, deleteSoldierById} from "../serves/server_soldiers.js"




const router = express.Router()


export default router;



router.post("/",checkBody,async (req, res) => {
    const body = req.body
    const soldier = await bodyValidation(body)
    res.status(soldier.status).json(soldier.response)
})




router.get("/",checkQuery, async (req, res) =>{
    const listQuery = {}
    if (req.query.unit){
        const soldiers = await getSoldierByUnit(req.query.unit)
        listQuery["QueryUnit"] = soldiers
    }
    if (req.query.soldier_rank){
        const soldiers = await getSoldierByRank(req.query.soldier_rank)
        listQuery["QuerySoldier_rank"] = soldiers
    }
    if (req.query.status){
        const soldiers = await getSoldierByStatus(req.query.status)
        listQuery["QueryStatus"] = soldiers
    }
    if (Object.keys(req.query).length === 0){
        const soldiers = await getAllSoldiers()
        res.json(soldiers) 
    }
    else{
        res.json(listQuery)
    }
})





router.get("/:id", checkParams,async (req, res) => {
    try{
        const id = req.params.id
        const soldier = await getSoldierById(id)
        console.log(soldier);
        
        res.status(soldier.status).json(soldier.response)
    } catch (e){
        console.error(e);
    }
})



router.put("/:id", checkBody, checkParams,async (req, res) => {
    try{
    const body = req.body
    const id = req.params.id
    const soldier = await updateSolderById(body, id)
    res.status(soldier.status).json(soldier.response)
    }catch (e){
        console.error(e);
    }
})





router.delete("/:id", checkParams, async(req, res) =>{
    try{
        const data = await deleteSoldierById(req.params.id)
        res.status(data.status).json(data.response)
    }catch (e){
        console.error(e);
    }
})