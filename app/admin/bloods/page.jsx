"use client"

import { useState, useEffect } from 'react'
import { MdDelete } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { HiOutlineChevronDown } from 'react-icons/hi2';
import { Bounce, ToastContainer, toast } from 'react-toastify';


export default function BloodsPage() {

    const [Donors, setDonors] = useState([])
    const [render, setRender] = useState(false)

    const getAllDonors = async () => {
        let res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blood_db`)
        let data = await res.json()
        setDonors(data.data)
    }

    const addFeild = async () => {
        let data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blood_db`, {
            method: "POST",
        })

        if (data.status == 200) {
            sucessMsg("feild added sucessfully")
            setRender(!render)
        } else {
            errorMsg("can not add feild")
        }

    }

    const removeFeild = async (id) => {
        let data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blood_db`, {
            method: "DELETE",
            body: JSON.stringify({ id })
        })

        if (data.status == 200) {
            sucessMsg("feild deleted sucessfully")
            setRender(!render)
        } else {
            errorMsg("can not delete feild")
        }

    }

    const updateName = (event, id) => {
        let data = [...Donors]

        let donorIndex = data.findIndex((item) => item._id == id)
        if (donorIndex != -1) {
            data[donorIndex].name = event.target.value
            setDonors(data)
        }

    }
    const updateRegion = (event, id) => {
        let data = [...Donors]

        let donorIndex = data.findIndex((item) => item._id == id)
        if (donorIndex != -1) {
            data[donorIndex].region = event.target.value
            setDonors(data)
        }

    }
    const updateAge = (event, id) => {
        let data = [...Donors]

        let donorIndex = data.findIndex((item) => item._id == id)
        if (donorIndex != -1) {
            data[donorIndex].age = event.target.value
            setDonors(data)
        }

    }
    const updateBloodType = (event, id) => {
        let data = [...Donors]

        let donorIndex = data.findIndex((item) => item._id == id)
        if (donorIndex != -1) {
            data[donorIndex].bloodType = event.target.value
            setDonors(data)
        }

    }
    const updateQuantity = (event, id) => {
        let data = [...Donors]

        let donorIndex = data.findIndex((item) => item._id == id)
        if (donorIndex != -1) {
            data[donorIndex].quantity = event.target.value
            setDonors(data)
        }

    }

    const updateRecords = async () => {
        let data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blood_db`, {
            method: "PUT",
            body: JSON.stringify({ AllRecords: Donors })
        })

        if (data.status == 200) {
            sucessMsg("Data updated sucessfully")
        } else {
            errorMsg("can not update data")
        }

    }

    const sucessMsg = (message) => {
        toast.success(message, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }

    const errorMsg = (message) => {
        toast.error(message, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }



    useEffect(() => {
        getAllDonors()
        console.log("i re rendered")
    }, [render])

    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
                theme="light"
            />

            <div className="md:mx-4">
                <div className="container m-auto px-4 md:px-0">
                    <div className="heading text-3xl font-semibold text-center my-4">Blood DB</div>
                    <div className="faqs flex flex-col gap-6">
                        {Donors?.map((item, index) => (
                            <details className="group border-b-[1px] py-4 border-neutral-300 w-full cursor-pointer" key={index} open>
                                <summary className="text-neutral-900 flex items-center justify-between gap-2">
                                    <div className="left font-semibold text-xl">{item.name}</div>
                                    <div className="right flex items-center gap-4">
                                        <button className="text-red-600"><MdDelete size={20} onClick={() => { removeFeild(item._id) }} /></button>
                                        <div className="group-open:rotate-180 flex gap-2"><HiOutlineChevronDown size={26} /> </div>
                                    </div>
                                </summary>
                                <div className="faq flex flex-col my-2">
                                    <label htmlFor={`name${index}`}>
                                        <div className="py-2 flex items-center justify-between">Name </div>
                                        <input type="text" name={`name${index}`} id={`name${index}`} className="px-2 rounded-sm outline-none ring-1 ring-zinc-400 w-full" value={item.name} onChange={(e) => {
                                            updateName(e, item._id)
                                        }} />
                                    </label>
                                    <label htmlFor={`region${index}`}>
                                        <div className="block py-2">Region</div>
                                        <input type="text" name={`region${index}`} id={`region${index}`} className="px-2 rounded-sm outline-none ring-1 ring-zinc-400 w-full" value={item.region} onChange={(e) => {
                                            updateRegion(e, item._id)
                                        }} />
                                    </label>
                                    <label htmlFor={`age${index}`}>
                                        <div className="block py-2">Age</div>
                                        <input type="number" name={`age${index}`} id={`age${index}`} className="px-2 rounded-sm outline-none ring-1 ring-zinc-400 w-full" value={item.age} onChange={(e) => {
                                            updateAge(e, item._id)
                                        }} />
                                    </label>
                                    <label htmlFor={`bloodType${index}`}>
                                        <div className="block py-2">Blood Type</div>
                                        <input type="text" name={`bloodType${index}`} id={`bloodType${index}`} className="px-2 rounded-sm outline-none ring-1 ring-zinc-400 w-full" value={item.bloodType} onChange={(e) => {
                                            updateBloodType(e, item._id)
                                        }} />
                                    </label>
                                    <label htmlFor={`qty${index}`}>
                                        <div className="block py-2">Quantity</div>
                                        <input type="number" name={`qty${index}`} id={`qty${index}`} className="px-2 rounded-sm outline-none ring-1 ring-zinc-400 w-full" value={item.quantity} onChange={(e) => {
                                            updateQuantity(e, item._id)
                                        }} />
                                    </label>
                                </div>
                            </details>

                        ))}

                    </div>
                    <div className="buttons my-4 flex flex-col gap-4">
                        <button className="outline-dashed outline-1 py-1 rounded-sm outline-zinc-400 flex items-center justify-center text-sm" onClick={() => {
                            addFeild()
                        }}> <span><IoIosAdd size={26} /></span>Add Column</button>
                        <button className="bg-zinc-800 text-white py-[2px] px-4 rounded-md w-fit self-end" onClick={() => { updateRecords() }}>Save</button>
                    </div>
                </div>
            </div>
        </>
    )
}
