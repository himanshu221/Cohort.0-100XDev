"use server"

import prisma from "@/db"

export default async function signup(username: string, password: string) {
    try {
        await prisma.user.create({
            data : {
                username: username,
                password: password
            }
        })
        return  "User logged in"
    } catch (error) {
        return "User already exists"
    }
}