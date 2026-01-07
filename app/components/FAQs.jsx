"use client"

import React from 'react'
import { IoMdTennisball } from 'react-icons/io'
import { useState, useEffect } from 'react/'

export default function FAQs({ page }) {

    const [AllFAQs, setAllFAQs] = useState(undefined)

    const getAllFAQs = async () => {
        let res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/faq`)
        let data = await res.json()
        setAllFAQs(data.data)
    }

    useEffect(() => {
        getAllFAQs()
    }, [])

    return (

        <div className="md:px-4 wmy-16">

            <div className={`container m-auto px-4 md:px-0 ${page == "home" && "lg:px-44"}`}>
                <div className={`${page == " home" ? " lg:grid-cols-3 md:grid-cols-3" : "lg:grid-cols-3"} grid grid-cols-1 gap-4 md:gap-6 rounded-t-lg my-9`}>
                    {AllFAQs ? AllFAQs.map((item) => (
                        <div className="bg-red-800 box md:px-7 py-4 ring-1 ring-red-900 rounded-lg">
                            <div className="question text-xl font-semibold text-white">{item.title}</div>
                            <div className="answer mt-3 text-white">{item.paragraph}</div>
                        </div>


                    )) :
                        <>
                            <div className="box py-4 md:px-6 px-4 bg-gray-100 rounded-lg">
                                <div className="h-6 w-full bg-gray-100 animate-pulse md:h-7"></div>
                                <div className="my-5 flex flex-col justify-start items-start w-full gap-2">
                                    <div className="h-3 md:h-4 w-full bg-gray-300 animate-pulse"></div>
                                    <div className="h-3 md:h-4 w-full bg-gray-300 animate-pulse"></div>
                                    <div className="h-3 md:h-4 w-full bg-gray-300 animate-pulse"></div>
                                    <div className="h-3 md:h-4 w-[35%] bg-gray-300 animate-pulse"></div>
                                </div>
                            </div>
                            <div className="box py-4 md:px-6 px-4 bg-gray-100 rounded-lg">
                                <div className="h-6 w-full bg-gray-300 animate-pulse md:h-7"></div>
                                <div className="my-2 flex flex-col justify-start items-start w-full gap-2">
                                    <div className="h-3 md:h-4 w-full bg-gray-300 animate-pulse"></div>
                                    <div className="h-3 md:h-4 w-full bg-gray-300 animate-pulse"></div>
                                    <div className="h-3 md:h-4 w-full bg-gray-300 animate-pulse"></div>
                                    <div className="h-3 md:h-4 w-[35%] bg-gray-300 animate-pulse"></div>
                                </div>
                            </div>
                            <div className="box py-4 md:px-6 px-4 bg-gray-100 rounded-lg">
                                <div className="h-6 w-full bg-gray-300 animate-pulse md:h-7"></div>
                                <div className="my-2 flex flex-col justify-start items-start w-full gap-2">
                                    <div className="h-3 md:h-4 w-full bg-gray-300 animate-pulse"></div>
                                    <div className="h-3 md:h-4 w-full bg-gray-300 animate-pulse"></div>
                                    <div className="h-3 md:h-4 w-full bg-gray-300 animate-pulse"></div>
                                    <div className="h-3 md:h-4 w-[35%] bg-gray-300 animate-pulse"></div>
                                </div>
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}
