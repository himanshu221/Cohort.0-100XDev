import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const User = prisma.user
const Todo = prisma.todo

async function insertUser(username: string, password: string, firstName: string, lastName: string) {
    const resp = await User.create({
        data: {
            username: username,
            firstname: firstName,
            lastname: lastName,
            password: password
        }
    })

    console.log(resp)
}

interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(username: string, {
    firstName,
    lastName
}: UpdateParams) {
  const resp = await User.update({
    data: {
        firstname: firstName,
        lastname: lastName
    },
    where: {
        username
    }
  })
  console.log(resp)
}

async function getUsers(username: string) {
    const resp = await User.findFirst({
        where: {
            username
        }
    })
    console.log(resp)
}

// insertUser("snigdha@gmail.com", "12345", "snigdha", "bhushan")
// updateUser("himanshu@gmail.com",{
//     firstName: "Himanshu", lastName: "Bhushan"
// })

// getUsers("snigdha@gmail.com")

async function createTodo(title: string, desc: string, userId: number){
    const resp = await Todo.create({
        data: {
            title,
            description: desc,
            userId,
        }
    })

    console.log(resp)
}

// createTodo("Go to Gym", "timing : 7-9am", 1)
// createTodo("Buy Grocery", "onions, tomato", 1)
// createTodo("Pay Bills", "before month end", 2)


async function getUserAndTodos(userId: number){
    const resp = await User.findFirst({
        where: {
            id: userId
        },
        select: {
            username: true,
            firstname: true,
            lastname: true,
            todos: {
                where: {
                    description: "timing : 7-9am"
                }
            }
        }
    })
    console.log(resp)
}

getUserAndTodos(1)
getUserAndTodos(2)


