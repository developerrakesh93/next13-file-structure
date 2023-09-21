import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";
//To prevent caching use request: NextRequest
export async function GET(request: NextRequest) {
    // prisma.user.findMany()
    const users = await prisma.user.findMany();
    console.log('users', users)
    return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success)
        return NextResponse.json(validation.error.errors, { status: 400 })
    return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}   