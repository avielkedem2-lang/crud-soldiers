import { response } from "express";
import {insertSoldier, selectAllSoldiers, 
    selectSoldiersByUnit,selectSoldiersByRank, selectSoldiersByStatus, selectSoldierById} from "../database/connection_db.js"




export async function bodyValidation(body) {
    try{
        const newBody = checkBody(body)
        if (!newBody) return {status: 400, response: "Bad request"}
        if (isNaN(newBody.age)) return {status: 400, response: "Bad request"}
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




export async function getAllSoldiers() {
    try{
        return await selectAllSoldiers()
    }catch(e){
        console.error(e);
    }
}




export async function getSoldierByUnit(unit) {
    try {
        const soldiers = await selectSoldiersByUnit(unit)
        return soldiers
    }catch(e){
        console.error(e);
    }
}




export async function getSoldierByRank(soldier_rank) {
    try {
        const soldiers = await selectSoldiersByRank(soldier_rank)
        return soldiers
    }catch(e){
        console.error(e);
    }
}



export async function getSoldierByStatus(status) {
    try {
        const soldiers = await selectSoldiersByStatus(status)
        return soldiers
    }catch(e){
        console.error(e);
    }
}


export async function getSoldierById(id) {
    try {
        const soldier = await selectSoldierById(id)
        if (soldier.length === 0) return {status:404, response:"not found"}
        return {status: 200, response:soldier}
    }catch(e){
        console.error(e);
    }
}