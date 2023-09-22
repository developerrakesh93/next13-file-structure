import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest, { params }: { params: { id: number } }) {
    const user = await prisma.user.findUnique({
        where: { id: Math.floor(params.id) }
    })
    if (!user) {
        return NextResponse.json({ error: 'Data not Found' }, { status: 400 })
    }
    return NextResponse.json(user)
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 400 })
    }
    const user = await prisma.user.findUnique({
        where: { id: parseInt(params.id) }
    })
    if (!user) {
        return NextResponse.json({ error: 'Data not Found' }, { status: 400 })
    }
    const updateUser = await prisma.user.update({
        where: { id: user.id },
        data: {
            name: body.name,
            email: body.email
        }
    })
    return NextResponse.json(updateUser, { status: 200 })
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    const user = await prisma.user.findUnique({
        where: { id: parseInt(params.id) }
    })
    if (!user) {
        return NextResponse.json({ error: 'Data not Found' }, { status: 400 })
    }
    await prisma.user.delete({
        where: { id: user.id }
    })
    return NextResponse.json({})
}