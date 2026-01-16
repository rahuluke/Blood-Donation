"use client"

import { useState, useEffect } from 'react'
import { Bounce, ToastContainer, toast } from "react-toastify";


export default function AdminFAQs() {

  const [FAQs, setFAQs] = useState([])

  const getAllFAQs = async () => {
    let res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/faq`)
    let data = await res.json()
    setFAQs(data.data)
  }

  const updateTitle = (event, index) => {
    let newData = [...FAQs]
    newData[index].title = event.target.value
    setFAQs(newData)
  }

  const updateParagraph = (event, index) => {
    let newData = [...FAQs]
    newData[index].paragraph = event.target.value
    setFAQs(newData)
  }

  const updateData = async () => {
    let res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/faq`, {
      method: "POST",
      body: JSON.stringify({ AllFAQs: FAQs })
    })

    if (res.status == 200) {
      sucessMsg("data updated sucessfully")
    } else {
      errorMsg("something went wrong")
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
    getAllFAQs()
  }, [])

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
          <div className="heading text-3xl font-semibold text-center my-4">FAQs</div>
          <div className="faqs flex flex-col gap-6">
            {console.log(FAQs)}
            {FAQs?.map((item, index) => (
              <div className="faq flex flex-col" key={index}>
                <label htmlFor={`name${index}`}>
                  <div className="block py-2">Title</div>
                  <input type="text" name={`name${index}`} id={`name${index}`} className="px-2 rounded-sm outline-none ring-1 ring-zinc-400 w-full" value={item.title} onChange={(e) => {
                    updateTitle(e, index)
                  }} />
                </label>
                <label htmlFor={`para${index}`}>
                  <div className="block py-2">Paragraph</div>
                  <textarea name={`para${index}`} id={`para${index}`} className="px-2 rounded-sm outline-none ring-1 ring-zinc-400 w-full" value={item.paragraph} onChange={(e) => {
                    updateParagraph(e, index)
                  }}></textarea>
                </label>
              </div>
            ))}
          </div>
          <div className="buttons my-4">
            <button className="bg-zinc-800 text-white py-[2px] px-4 rounded-md" onClick={() => {
              updateData()
            }}>Save</button>
          </div>
        </div>
      </div>
    </>
  )
}
