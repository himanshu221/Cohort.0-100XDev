import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */

interface Todo{
    title: string,
    description: string,
    done: boolean,
    id: number,
    user_id?: number
}
export async function createTodo(userId: number, title: string, description: string): Promise<Todo> {
        const resp = await client.query("insert into todos(user_id, title, description) values ($1, $2, $3) RETURNING *",[userId, title, description])
        return {
            title: resp.rows[0].title,
            description: resp.rows[0].description,
            done: resp.rows[0].done,
            id: resp.rows[0].id
        }
    
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number): Promise<Todo> {
        const resp = await client.query("update todos set done = true where id = $1 RETURNING *",[todoId])
        return {
            title: resp.rows[0].title,
            description: resp.rows[0].description,
            done: resp.rows[0].done,
            id: resp.rows[0].id,
        }
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number): Promise<Todo[]> {

        const resp = await client.query("select t.* from todos t inner join users u on t.user_id = u.id where u.id = $1",[userId])
        return resp.rows.map(row => {
            return {
                title: row.title,
                description: row.description,
                done: row.done,
                id: row.id,
                user_id: row.user_id
            }
        })
}