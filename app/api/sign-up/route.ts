import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

import client from "@/lib/client";
import { SignUpFormSchema } from "@/model/user-schema";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const result = SignUpFormSchema.safeParse(body);

    if (!result.success)
      return NextResponse.json({ message: "Invalid Data" }, { status: 400 });

    const hashedPassword = await bcrypt.hash(body.password, 10);

    const existingUser = await client.user.findFirst({
      where: { email: body.email },
    });

    if (existingUser)
      return NextResponse.json(
        { message: "This email is already been taken." },
        { status: 400 }
      );

    const user = await client.user.create({
      data: { name: body.name, email: body.email, hashedPassword },
    });

    return NextResponse.json({ user, message: "New user added." });
  } catch (error) {
    return NextResponse.json(
      { message: "Invernal server Error", error },
      { status: 500 }
    );
  }
}
export { SignUpFormSchema };
