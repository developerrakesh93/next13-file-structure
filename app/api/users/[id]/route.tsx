import { NextRequest, NextResponse } from "next/server";
import Schema from "../schema";
import schema from "../schema";

export function GET(request: NextRequest, { params }: { params: { id: number } }) {
    if (params.id > 10) {
        return NextResponse.json({ error: 'Data not Found' }, { status: 400 })
    }
    return NextResponse.json({ id: 1, name: 'Rakesh' })
}

export async function PUT(request: NextRequest, { params }: { params: { id: number } }) {
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 400 })
    }
    if (params.id > 10) {
        return NextResponse.json({ error: 'Data not Found' }, { status: 400 })
    }
    return NextResponse.json({ id: 1, name: body.name })
}

export function DELETE(request: NextRequest, { params }: { params: { id: number } }) {
    if (params.id > 10) {
        return NextResponse.json({ error: 'Data not Found' }, { status: 400 })
    }
    return NextResponse.json({})
}