"use client";
import { link } from "fs";
import Link from "next/link";
import React from "react";
import UserProfilepage from "../user-profile/page";
import Searchpage from "../search/page";
import { usePathname } from "next/navigation";
const Navlinks = [
  {
    label: "Featured Products",
    href: "/featured-products",
  },
  {
    label: "New Arrivals",
    href: "/new-arrivals",
  },
  {
    label: "In Stock",
    href: "/in-stock",
  },
];
export default function Navbarpage() {
  const currentPath = usePathname();
  return (
    <div className="fixed top-0 right-0 z-50 w-full rounded-b-lg">
      <nav className="flex px-4 h-16 justify-between items-center shadow-md">
        <Link href="/">
          Filthi <span className="text-red-500">Store</span>
        </Link>
        <div className="flex space-x-4">
          {Navlinks.map((link) => (
            <ul
              key={link.href}
              className={
                currentPath === link.href ? "bg-red-200 rounded-lg" : ""
              }
            >
              <li
                key={link.href}
                className="hover:bg-red-200 transition-all cursor-pointer rounded-lg p-2"
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            </ul>
          ))}
        </div>
        <Searchpage />
        <UserProfilepage />
      </nav>
    </div>
  );
}
