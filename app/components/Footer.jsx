import Link from 'next/link'
import React from 'react'

export default function Footer() {
    const links = [{
        name: "Home",
        href: "/"
    }, {
        name: "Blood Database",
        href: "/bloods"
    }, {
        name: "Donate Blood",
        href: "/donate"
    }, {
        name: "Request Donation",
        href: "/request"
    }, {
        name: "FAQs",
        href: "/faq"
    }, {
        name: "About Us",
        href: "/about"
    }
    ]
    return (
        <div className="bg-gray-100">
            <div className="container m-auto">
                <div className="px-4 flex flex-col items-center gap-8 lg:flex-row py-6 justify-between">
                    <div className="left flex flex-col items-center justify-center lg:flex-row gap-8">
                        <div className="heading">
                            <Link href={"/"} className="logo font-semibold text-xl lg:text-2xl text-black">Jeevan<span className="text-red-600">Dhara</span></Link>

                        </div>
                        <div className="copy"> &copy; 2024 jeevandhara </div>
                    </div>
                    <ul className="text-sm lg:text-base flex flex-wrap  items-center justify-center gap-4">
                        {links.map((link, key) => (
                            <li key={key}>
                                <Link href={link.href} className="text-zinc-600 hover:text-zinc-900" >{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
