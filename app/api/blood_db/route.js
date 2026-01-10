import ConnectToDB from "@/DB/ConnectToDB";
import Doners from "@/schema/Doners";
import { NextResponse } from "next/server";

export async function GET() {
  await ConnectToDB();
  const data = await Doners.find({});
  return NextResponse.json({ data });
}

export async function POST(req) {
  await ConnectToDB();
  const body = await req.json();
  const doc = await Doners.create(body);
  return NextResponse.json(doc, { status: 201 });
}

export async function DELETE(req) {
  await ConnectToDB();
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  await Doners.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
}

export async function PUT(req) {
  await ConnectToDB();
  const body = await req.json();
  const { _id, ...rest } = body;
  const doc = await Doners.findByIdAndUpdate(_id, rest, { new: true });
  return NextResponse.json(doc);
}
