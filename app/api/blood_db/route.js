import ConnectToDB from "@/DB/ConnectToDB";
import Doners from "@/schema/Doners";
import { NextResponse } from "next/server";

export async function GET() {

    try {
       await ConnectToDB()

        let allEntries = await Doners.find({})
        return NextResponse.json({ data: allEntries })

     } catch (err) {
        console.log(err)
        return NextResponse.json({ message: "something went wrong" })
    }

}
