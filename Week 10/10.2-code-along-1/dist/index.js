"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const User = prisma.user;
const Todo = prisma.todo;
function insertUser(username, password, firstName, lastName) {
    return __awaiter(this, void 0, void 0, function* () {
        const resp = yield User.create({
            data: {
                username: username,
                firstname: firstName,
                lastname: lastName,
                password: password
            }
        });
        console.log(resp);
    });
}
function updateUser(username, { firstName, lastName }) {
    return __awaiter(this, void 0, void 0, function* () {
        const resp = yield User.update({
            data: {
                firstname: firstName,
                lastname: lastName
            },
            where: {
                username
            }
        });
        console.log(resp);
    });
}
function getUsers(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const resp = yield User.findFirst({
            where: {
                username
            }
        });
        console.log(resp);
    });
}
// insertUser("snigdha@gmail.com", "12345", "snigdha", "bhushan")
// updateUser("himanshu@gmail.com",{
//     firstName: "Himanshu", lastName: "Bhushan"
// })
// getUsers("snigdha@gmail.com")
function createTodo(title, desc, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const resp = yield Todo.create({
            data: {
                title,
                description: desc,
                userId,
            }
        });
        console.log(resp);
    });
}
// createTodo("Go to Gym", "timing : 7-9am", 1)
// createTodo("Buy Grocery", "onions, tomato", 1)
// createTodo("Pay Bills", "before month end", 2)
function getUserAndTodos(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const resp = yield User.findFirst({
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
        });
        console.log(resp);
    });
}
getUserAndTodos(1);
getUserAndTodos(2);
