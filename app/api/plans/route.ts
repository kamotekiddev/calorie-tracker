import getCurrentUser from "@/lib/getCurrentUser";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const user = await getCurrentUser();

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(error);
  }
}
