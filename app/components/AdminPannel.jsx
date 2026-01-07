"use client";

import { HiBars3 } from "react-icons/hi2";
import { HiOutlineX } from "react-icons/hi";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminPannel() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const links = [
    {
      name: "Blood Database",
      href: "/admin/bloods",
    },
    {
      name: "Blogs",
      href: "/admin/blogs",
    },
    {
      name: "Donor Requests",
      href: "/admin/donor",
    },
    {
      name: "Requests",
      href: "/admin/requests",
    },
    {
      name: "FAQs",
      href: "/admin/faq",
    },
    {
      name: "About Us",
      href: "/admin/about",
    },
  ];

  function handleHamburger() {
    setIsOpen(!isOpen);
  }

  async function removeToken() {
    let res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/logout`, {
      method: "POST",
    });

    if (res.status === 200) {
      setTimeout(() => {
        router.push("/login");
      });
    } else {
      // will throw error
    }
  }

  return (
    <nav className="py-3 md:py-4 px-4 bg-red-500">
      <div className="container m-auto flex items-center justify-start md:justify-between gap-6">
        <button
          className="forMobi md:hidden"
          onClick={() => {
            handleHamburger();
          }}
        >
          <HiBars3 size={30} className="text-white" />
        </button>
        <Link
          href={"/admin"}
          className="logo font-semibold text-xl lg:text-2xl text-white"
        >
          Jeevan<span className="">Dhara</span>
        </Link>
        <div
          onClick={() => {
            handleHamburger();
          }}
          className={`${
            isOpen ? "flex" : "hidden"
          } overlay top-0 left-0 h-screen w-screen bg-black/40 z-[30] fixed`}
        ></div>
        <div
          className={`${
            isOpen ? "flex left-0" : "-left-[100%]"
          } flex-col sidebar fixed top-0 h-screen bg-white w-60 text-neutral-900 py-3 px-4 z-[40] transition-all duration-300 ease-in-out`}
        >
          <div className="header flex justify-start items-center">
            <button
              onClick={() => {
                handleHamburger();
              }}
            >
              {" "}
              <HiOutlineX size={30} />{" "}
            </button>
          </div>
          <ul className="flex flex-col space-y-4 font-medium px-2 mt-4">
            {links.map((link, key) => (
              <li
                key={key}
                onClick={() => {
                  handleHamburger();
                }}
              >
                <Link href={link.href} className="block">
                  {link.name}
                </Link>
              </li>
            ))}
            <button
              className="text-center rounded-sm bg-red-500 text-white px-4 py-1 "
              onClick={() => {
                removeToken();
              }}
            >
              logout
            </button>
          </ul>
        </div>
        <ul className="hidden md:flex items-center gap-7 md:text-sm lg:text-base">
          {links.map((link, key) => (
            <li key={key}>
              <Link
                href={link.href}
                className="text-zinc-100 hover:text-zinc-50"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <button
            className="text-white bg-white/15 rounded-sm ring-1 ring-white/40 hover:bg-white/20 px-4 py-1 "
            onClick={() => {
              removeToken();
            }}
          >
            logout
          </button>
        </ul>
      </div>
    </nav>
  );
}
