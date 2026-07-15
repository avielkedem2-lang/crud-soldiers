import { response } from "express";
import {insertSoldier} from "../database/connection_db.js"




export async function bodyValidation(body) {
    try{
        const newBody = checkBody(body)
        if (!newBody) return {status: 400, response: "Bod request"}
        const soldier = await insertSoldier(body)
        return {status:201, response: soldier}
    } catch(e){
        console.error(e);
    }
}




function checkBody(body) {
    if (body.age && body.soldier_rank && body.unit && body.name){
        return {
            name: body.name,
            age: +body.age,
            soldier_rank: body.soldier_rank,
            unit: body.unit
        }
    }
    return false
}