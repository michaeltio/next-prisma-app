import { NextResponse, NextRequest } from "next/server";
import db from "@/services/db";

export async function POST(request: NextRequest) {
  try {
    // const { title, release, album, artist } = await request.json();

    const newUser = await db.musicQueue.create({
      data: {
        title: "gantneg",
      },
    });

    return NextResponse.json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ error: error });
  }
}

export async function GET() {
  return NextResponse.json({
    bro: "sis",
  });
}
