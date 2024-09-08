import { NextRequest, NextResponse } from "next/server";
import { UserValidationSchema } from "./Schema";
import { error } from "console";

export function GET(request: NextRequest){
    // fetch datas from databse
    // return datas
    return NextResponse.json({
        id: 1,
        name: "Ram",
        email: "ram@gmail.com"
    }, {status: 200});
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
   
   // validation
   // insert data
   // return inserted data

    return NextResponse.json(body);
}