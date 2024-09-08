import { NextRequest, NextResponse } from "next/server";
import { UserValidationSchema } from "./Schema";
import prisma from "../../../../prisma/prisma";

export async function GET(request: NextRequest){
    const users = await prisma.user.findMany({});
    return NextResponse.json(users);
}

export async function POST(request: NextRequest){
   const body = await request.json();
   const validation = UserValidationSchema.safeParse(body);

   if(!validation.success){
        return NextResponse.json(
            { error: validation.error.errors },
            { status: 400}
        )
   }
   
   const newUser = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email
        }
   })

    return NextResponse.json(newUser);
}