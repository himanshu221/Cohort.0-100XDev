import { client } from "..";


interface User {
    username: string,
    password: string,
    name: string,
    id: string
}

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
        const resp = await client.query("insert into users(username, password, name) values ($1 , $2, $3)",[username, password, name])
}
/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */

export async function getUser(userId: number): Promise<User> {
        const resp = await client.query("select * from users where id=$1",[userId])
        return {
            username: resp.rows[0].username,
            password: resp.rows[0].password,
            name: resp.rows[0].name,
            id: resp.rows[0].id
        }
    
}
