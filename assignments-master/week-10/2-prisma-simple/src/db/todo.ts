import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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
export async function createTodo(userId: number, title: string, description: string) {
    return prisma.todo.create({
        data: {
            userId,
            title,
            description
        },
        select: {
            title: true,
            description: true,
            done: true,
            id: true
        }
    })
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
export async function updateTodo(todoId: number) {
        return prisma.todo.update({
            data: {
                done: true
            },
            where: {
                id: todoId
            },
            select: {
                title: true,
                description: true,
                done: true,
                id: true
            }
        })
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
export async function getTodos(userId: number) {
    return prisma.todo.findMany({
        where: {
            userId: userId
        },
        select: {
            title: true,
            description: true,
            done: true,
            userId: true
        }
    })
}