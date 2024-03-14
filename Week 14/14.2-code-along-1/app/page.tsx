import Signup from "@/components/Signup";
import { PrismaClient } from "@prisma/client";
import axios from "axios";
import prisma from "@/db";

export default async function Home() {
  const user = await prisma.user.findFirst()
  return (
    <div className="flex flex-col justify-center h-screen">
        {user?.username}
    </div>
  );
}