import ConnectToDB from "@/DB/ConnectToDB";
import Doners from "@/schema/Doners";
import { NextResponse } from "next/server";

// GET
export async function GET() {
  await ConnectToDB();
  const data = await Doners.find({});
  return NextResponse.json({ data });
}

// POST
export async function POST(req) {
  await ConnectToDB();
  const body = await req.json(); // frontend MUST send JSON
  const doc = await Doners.create(body);
  return NextResponse.json(doc, { status: 201 });
}

// DELETE (❗ NO req.json() here)
export async function DELETE(req) {
  await ConnectToDB();
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "ID missing" }, { status: 400 });
  }

  await Doners.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
}

// PUT (check body before parsing)
export async function PUT(req) {
  await ConnectToDB();

  const text = await req.text(); // safe read
  if (!text) {
    return NextResponse.json(
      { error: "Empty request body" },
      { status: 400 }
    );
  }

  const body = JSON.parse(text);
  const { _id, ...rest } = body;

  const doc = await Doners.findByIdAndUpdate(_id, rest, { new: true });
  return NextResponse.json(doc);
}
