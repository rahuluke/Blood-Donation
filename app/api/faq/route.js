import ConnectToDB from '@/DB/ConnectToDB'
import FAQs from '@/schema/FAQs'
import { NextResponse } from 'next/server'

export async function GET() {
    try {
        ConnectToDB()
        let allEntries = await FAQs.find({})

        // if all entries 0 then create 3 of them

        if (allEntries.length == 0) {
            await FAQs.create({ title: "Am I eligible to donate blood?", paragraph: "This is a common question for first-time donors. The site can provide a link to a blood donation eligibility quiz that asks about age, weight, health history, medications, and recent travel. The quiz will give a preliminary answer, but a final determination will be made at the donation center." }, { title: "How long does the donation process take?", paragraph: "While the actual blood donation only takes about 10-15 minutes, the entire process can take 1-2 hours. This includes registration, completing a health questionnaire, a mini-physical, the donation itself, and refreshments afterwards." }, { title: "What happens to my blood after I donate?", paragraph: "Donated blood goes through a rigorous testing process to ensure it is safe for transfusion. Then, the blood is separated into its components (red blood cells, platelets, plasma) because different patients need different blood products. The blood is then stored for a specific period depending on the component." })

            let allData = await FAQs.find({})

            return NextResponse.json({ data: allData })
        } else {
            return NextResponse.json({ data: allEntries })
        }

    } catch (err) {
        return NextResponse.json({ message: "something went wrong" }, { status: 500 })
    }
}
