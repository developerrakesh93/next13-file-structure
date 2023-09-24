import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
// import { z } from "zod";
import bcrypt from 'bcrypt'
import schema from "./schema";


export async function POST(request: NextRequest) {
    const body = await request.json();
    console.log('Printing body', body);
    const validation = schema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 400 });
    }

    const user = await prisma.user.findUnique({
        where: { email: body.email },
    })
    console.log('Printing user', user);
    if (user) return NextResponse.json({ error: 'user already exists' }, { status: 400 });
    const hashedPassword = await bcrypt.hash(body.password, 10);
    const newUser = await prisma.user.create({
        data: {
            email: body.email,
            hasedPassword: hashedPassword
        }
    });
    return NextResponse.json({ email: newUser.email })

}