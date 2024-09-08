import { NextRequest, NextResponse } from "next/server";
import { UserValidationSchema } from "../Schema";

interface Params{
    params: {
        user_id: number
    }
}
export function GET(request: NextRequest,{ params: { user_id}}: Params){

    if(user_id > 10){
        return NextResponse.json(
            { error: "User doesn't exsit!" },
            { status: 404 }
        )
    }

    return NextResponse.json({
        id: 1,
        name: "Ram",
        email: "ram@gmail.com"
    })
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

    if(user_id > 10){
        return NextResponse.json(
            { error: "User doesn't exsit!" },
            { status: 404 }
        )
    }

    const updatedData = {
        id: body.id,
        name: body.name,
        email: body.email
    }
    // valid data tyep
    // return updated data

    return NextResponse.json(updatedData)

}

export function DELETE(request: NextRequest,{ params: { user_id} } : Params){

    if(user_id> 10){
        return NextResponse.json(
            { error: "User not fouond"},
            { status: 404}
        )
    }

    // delete
    return NextResponse.json({ msg: "User Deleted successful!"})

}