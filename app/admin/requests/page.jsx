"use client"

import { useState, useEffect } from "react"
import { MdDelete } from "react-icons/md";
import { Bounce, ToastContainer, toast } from "react-toastify";

export default function RequestsPage() {

  const [Requests, setRequests] = useState([])
  const [render, setRender] = useState(false)

  const getAllRequests = async () => {
    let res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/requests`)
    let data = await res.json()
    setRequests(data.data)
  }

  const deleteItem = async (index) => {
    let newData = [...Requests]
    // newData.splice(index, 1)

    let data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/requests`, {
      method: "DELETE",
      body: JSON.stringify({ id: newData[index]._id })
    })

    if (data.status == 200) {
      sucessMsg("feild deleted sucessfully")
      setRender(!render)
    } else {
      errorMsg("can not delete feild")
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
    getAllRequests()
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
      <div className="md:px-4">
        <div className="container m-auto my-2 px-4 md:px-0">
          <div className="heading font-semibold text-3xl text-center mb-8">Blood Requests</div>
          <div className="data my-4 text-zinc-800 flex flex-col gap-4">
            {Requests.length >= 0 && Requests.map((item, index) => (
              <div className="box flex flex-col ring-1 py-2 px-2 sm:px-4 md:py-4 ring-zinc-300 rounded-lg">
                <div className="top flex flex-col mb-4">
                  <div className="localty text-xl font-semibold flex items-center justify-between">Name: {item.firstName} <button className="text-red-600" onClick={() => {
                    deleteItem(index)
                  }}><MdDelete size={25} /></button></div>
                </div>
                <div className="mid flex flex-col"><div className="name text-zinc-600">Email: <span className="text-zinc-600 font-bold">{item.email}</span></div> <div className="age text-zinc-600">Phone Number: {item.phone}</div> </div>
                <div className="bottom mt-2 flex flex-col gap-1">
                  <div className="blood-type text-zinc-600 ">Blood Type: <span className="text-zinc-600 font-bold">{item.bloodType}</span> </div>
                  <div className="available-blood text-zinc-600 ">Message: <span className="text-zinc-600 font-bold">{item.message}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
