import Doners from '@/schema/Doners';
import { NextResponse } from 'next/server'
import jsonwebtoken from "jsonwebtoken";
import { cookies } from "next/headers";
import ConnectToDB from "@/DB/ConnectToDB";

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
                    await Doners.findByIdAndDelete(id);
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


export async function POST(req, res) {

    const cookieStore = cookies();
    const token = cookieStore.get("token");


    if (token) {
        // checks if token is vailed or not
        try {
            let isVailed = jsonwebtoken.verify(token.value, process.env.JWT_SECRET);

            if (isVailed) {
                try {
                   await ConnectToDB();
                    await Doners.create({
                        name: "Enter name",
                        region: "" ,
                        age: 0,
                        bloodType: "",
                        quantity: 0
                    })
                    return NextResponse.json({ message: "Item Added sucessfully" }, { status: 200 })
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

export async function PUT(req, res) {
    const { AllRecords } = await req.json();
    const cookieStore = cookies();
    const token = cookieStore.get("token");

    let filter = [];
    AllRecords.forEach((item) => {
        filter.push({ _id: item._id });
    });
    if (token) {
        // checks if token is vailed or not
        try {
            let isVailed = jsonwebtoken.verify(token.value, process.env.JWT_SECRET);

            if (isVailed) {
                try {
                  await  ConnectToDB();

                    for (const item of AllRecords) {
                await Doners.findByIdAndUpdate(item._id, {
                name: item.name,
                region: item.region,
                age: item.age,
                bloodType: item.bloodType,
                quantity: item.quantity
            });
        }


                    return NextResponse.json({ message: "Update Sucessfull" });
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
