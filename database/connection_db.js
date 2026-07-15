import mysql2 from "mysql2/promise"



export const pool = mysql2.createPool({
    host: "localhost",
    port:"3306:3306",
    password: "1234",
    user: "root",
    database:"soldiers-db",
    connectionLimit:10
})



export async function createTable() {
    try{
        pool.execute("CREATE TABLE if not exists soldiers (id int AUTO_INCREMENT PRIMARY KEY,name VARCHAR(20) not NULL,soldier_rank VARCHAR(20) not null,unit VARCHAR(20) not null,age int not null,status VARCHAR(50) DEFAULT 'active',created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);")
    } catch (err){
        console.error(err);
    }
}




export async function insertSoldier(body) {
    try{
        const soldierId = await pool.execute("INSERT INTO soldiers (name, soldier_rank, unit, age) VALUES (?,?,?,?);",[
            body.name, body.soldier_rank, body.unit, body.age
        ])
        const soldier = await getSoldierById(soldierId[0].insertId)
        return soldier
    }catch (err){
        console.error(err);
    }
}




export async function getSoldierById(soldierId) {
    try{
        const [soldier] = await pool.execute("select * from soldiers where id=?",[soldierId])
        return soldier
    }catch (err){
        console.error(err);
    }
}