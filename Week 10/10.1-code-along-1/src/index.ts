import { Client } from "pg";

const client = new Client({
    connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres"
})

async function createTable() {
    await client.connect()
    const res = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)
    console.log(res)
}

async function insertData() {
    try{
        await client.connect()
        const query = "INSERT INTO users(username, email, password) VALUES($1, $2, $3)"
        const values = ['Moti', 'Moti@example', '1233434']
        const res = await client.query(query, values)
        console.log(res)
    }catch(e){
        console.log(`Error occured: ${e}`)
    }finally{
        await client.end()
    }
}

async function queryData() {
    try{
        await client.connect()
        const query = 'Select * from users where email = $1'
        const values = ['snigdha@email']
        const res = await client.query(query, values)
        if(res.rows.length == 0){
            console.log("No user found")
        }else console.log('User found: ',res.rows[0])
    }catch(e){
        console.log(`Error occured: ${e}`)
    }finally{
        await client.end()
    }
}

// createTable()

// insertData()
queryData()