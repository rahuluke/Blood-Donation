import ConnectToDB from "@/DB/ConnectToDB"
import Requests from "@/schema/Requests"
import { NextResponse } from "next/server"
import jsonwebtoken from "jsonwebtoken";
import { cookies } from "next/headers";

export async function DELETE(req, res) {

    const { id } = await req.json()
    const cookieStore = cookies();
    const token = cookieStore.get("token");


    if (token) {
        // checks if token is vailed or not
        try {
            let isVailed = jsonwebtoken.verify(token.value, process.env.JWT_SECRET);

            if (isVailed) {
                try {
                    ConnectToDB();
                    await Requests.findByIdAndDelete({ _id: id })
                    return NextResponse.json({ message: "Item removed sucessfully" }, { status: 200 })
                } catch (error) {
                    console.log(error);
                    return NextResponse.json(
                        { message: "Something went wrong" },
                        { status: 500 }
                    );
                }
                // return NextResponse.json({ messege: "token is vailed" }, {status: 200})
            }
        } catch (error) {
            // return NextResponse.json({ messege: "token is not vailed" }, {status: 401})
            return NextResponse.json({ message: "Not Authorized" }, { status: 302 });
        }
    } else {
        return NextResponse.json({ message: "Not Authorized" }, { status: 302 });
    }

}