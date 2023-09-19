import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
export function GET(request: NextRequest) {
    return NextResponse.json([{
        id: 1,
        name: "jjjj",
        price: 2.6
    },
    {
        id: 2,
        name: "lll",
        price: 3.6
    },
    {
        id: 3,
        name: "kkk",
        price: 4.6
    }])
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success)
        return NextResponse.json(validation.error.errors, { status: 400 })
    return NextResponse.json({ id: 10, name: body.name, price: body.price }, { status: 201 });
}