import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest){
    // fetch datas from databse
    // return datas
    return NextResponse.json({
        id: 1,
        name: "Ram",
        email: "ram@gmail.com"
    }, {status: 400});
}

export async function POST(request: NextRequest){
   const body = await request.json();

   // validation
   // insert data
   // return inserted data

    return NextResponse.json(body);
}