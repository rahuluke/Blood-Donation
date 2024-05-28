import { NextResponse } from "next/server";
import jsonwebtoken from "jsonwebtoken";
import { cookies } from "next/headers";
import ConnectToDB from "@/DB/ConnectToDB";
import FAQs from "@/schema/FAQs";

export async function POST(req, res) {
  const { AllFAQs } = await req.json();
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  console.log(AllFAQs);

  let filter = [];
  AllFAQs.forEach((item) => {
    filter.push({ _id: item._id });
  });

  if (token) {
    // checks if token is vailed or not
    try {
      let isVailed = jsonwebtoken.verify(token.value, process.env.JWT_SECRET);

      if (isVailed) {
        try {
          ConnectToDB();

          AllFAQs.map(async (item) => {
            await FAQs.findByIdAndUpdate(item._id, {
              title: item.title,
              paragraph: item.paragraph,
            });
          })

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
