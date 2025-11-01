"use client"

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function LoginPage() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const router = useRouter()

    const getName = (e) => {
        setName(e.target.value)
    }
    const getPassword = (e) => {
        setPassword(e.target.value)
    }

    // --------------------- CHANGED fetch URL & headers ---------------------
    async function sendRequest() {
        try {
            // Use relative URL instead of localhost
            // This works both locally and when deployed
            let res = await fetch("/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" }, // must include JSON header
                body: JSON.stringify({ name, password }),
                credentials: "include" // optional if you are using cookies
            })

            const data = await res.json()

            if (res.status === 200) {
                setTimeout(() => {
                    router.push('/admin')
                }, 2000);
            } else {
                console.log("Login failed:", data.messege) // Added logging for errors
            }
        } catch (err) {
            console.log("Error connecting to backend:", err) // Added try/catch to debug fetch errors
        }
    }
    // -----------------------------------------------------------------------

    return (
        <div className="">
            <div className="flex flex-col justify-start w-full lg:flex-row min-h-screen">
                <div className="left hidden lg:flex flex-col gap-6 lg:w-[50%]">
                    <img src="/login.png" alt="" className='h-full object-cover'/>
                </div>
                <div className="right flex flex-col gap-6 lg:w-[50%] justify-center px-16 py-20">
                    <div className="text-2xl md:text-3xl">login</div>

                    <div className="name">
                        <label htmlFor="name" className="block mb-2">Name</label>
                        <input type="name" id="name" className="w-full px-2 py-1 outline-zinc-600 outline-1 ring-1 rounded-sm ring-neutral-400" value={name} onChange={getName} />
                    </div>
                    <div className="password">
                        <label htmlFor="password" className="block mb-2">Password</label>
                        <input type="password" id="password" className="w-full px-2 py-1 outline-zinc-600 outline-1 ring-1 rounded-sm ring-neutral-400" value={password} onChange={getPassword} />
                    </div>

                    <button className="text-white px-4 py-2 rounded-md bg-red-500 hover:bg-red-500/90 w-full font-semibold" onClick={sendRequest}>Login</button>

                </div>
            </div>
        </div>
    )
}
//-------------------------------------------------------------roginal one---------------------------------------------------------
// "use client"
// import { useRouter } from 'next/navigation'
// import { useState } from 'react'

// export default function LoginPage() {
//     const [name, setName] = useState("")
//     const [password, setPassword] = useState("")

//     const router = useRouter()

//     const getName = (e) => {
//         setName(e.target.value)
//     }
//     const getPassword = (e) => {
//         setPassword(e.target.value)
//     }
// ////--------------------- http://localhost:3000/api/login ------change made here-----------------
//     async function sendRequest() {
//         let res = await fetch("app/api/login", {
//             method: "POST",
//             body: JSON.stringify({ name, password })
//         })

//         const data = await res.json()

//         if (res.status === 200) {
//             setTimeout(() => {
//                 router.push('/admin')
//             }, 2000);
//         } else {
//             // will throw error
//         }
//     }

//     return (
//         <div className="">
//             <div className="flex flex-col justify-start w-full lg:flex-row min-h-screen">
//                 <div className="left hidden lg:flex flex-col gap-6 lg:w-[50%]">
//                     <img src="/login.png" alt="" className='h-full object-cover'/>
//                 </div>
//                 <div className="right flex flex-col gap-6 lg:w-[50%] justify-center px-16 py-20">
//                     <div className="text-2xl md:text-3xl">login</div>

//                     <div className="name">
//                         <label htmlFor="name" className="block mb-2">Name</label>
//                         <input type="name" name="" id="name" className="w-full px-2 py-1 outline-zinc-600 outline-1 ring-1 rounded-sm ring-neutral-400" value={name} onChange={getName} />
//                     </div>
//                     <div className="password">
//                         <label htmlFor="password" className="block mb-2">Password</label>
//                         <input type="password" name="" id="password" className="w-full px-2 py-1 outline-zinc-600 outline-1 ring-1 rounded-sm ring-neutral-400" value={password} onChange={getPassword} />
//                     </div>

//                     <button className="text-white px-4 py-2 rounded-md bg-red-500 hover:bg-red-500/90 w-full font-semibold" onClick={sendRequest}>Login</button>

//                 </div>
//             </div>
//         </div>
//     )
// }
