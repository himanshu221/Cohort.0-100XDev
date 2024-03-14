import { PrismaClient } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"
import prisma from "@/db"

// export function GET() {
//     return Response.json({
//         name: "Himanshu",
//         email: "himanshu@gmail.com"
//     })
// }

export async function POST(req: NextRequest, res: NextResponse ) {
    const body = await req.json()
    console.log(body)
    try {
        await prisma.user.create({
            data : {
                username: body.username,
                password: body.password
            }
        })
        return Response.json({
            message: "User logged in"
        })
    } catch (error) {
        return Response.json({
           message: "User already exists"
        })
    }
}