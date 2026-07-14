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
        pool.execute("CREATE TABLE if not exists soldiers (id int AUTO_INCREMENT PRIMARY KEY,name VARCHAR(20) not NULL,soldier_rank VARCHAR(20),unit VARCHAR(20),age int DEFAULT 0,status VARCHAR(50) DEFAULT 'active',created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);")
    } catch (err){
        console.error(err);
    }
}


