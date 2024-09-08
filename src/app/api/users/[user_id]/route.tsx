import { NextRequest, NextResponse } from "next/server";
import { UserValidationSchema } from "../Schema";
import prisma from "../../../../../prisma/prisma";

interface Params{
    params: {
        user_id: string
    }
}
export async function GET(request: NextRequest,{ params: { user_id}}: Params){
    const user = await prisma.user.findUnique({
        where: {
            id: parseInt(user_id)
        }
    })

    if(!user){
        return NextResponse.json(
            { error: "User doesn't exsit!" },
            { status: 404 }
        )
    }

    return NextResponse.json(user)
}

export async function PUT(request: NextRequest,{ params: { user_id}}: Params){
    const body = await request.json();

    const validation =  UserValidationSchema.safeParse(body);
    if(!validation.success){
        return NextResponse.json(
            { error: validation.error.errors},
            { status: 400}
        )
    }

    const user = await prisma.user.findUnique({
        where: {
            id: parseInt(user_id)
        }
    })

    if(!user){
        return NextResponse.json(
            { error: "User doesn't exsit!" },
            { status: 404 }
        )
    }

    const updatedUser = await prisma.user.update({
        where:{
            id: parseInt(user_id)
        },
        data:{
            email: body.email,
            name: body.name
        }
    })
    return NextResponse.json(updatedUser)

}

export async function DELETE(request: NextRequest,{ params: { user_id} } : Params){
    const user = await prisma.user.findUnique({
        where: {
            id: parseInt(user_id)
        }
    })
    if(!user){
        return NextResponse.json(
            { error: "User not fouond"},
            { status: 404}
        )
    }

    const deletedUser = await prisma.user.delete(
        {
            where: {
                id:  parseInt(user_id)
            }
        }
    )

    return NextResponse.json(deletedUser)

}