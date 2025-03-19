import { link } from "fs";
import Link from "next/link";
import React from "react";
import UserProfilepage from "../user-profile/page";
import Searchpage from "../search/page";
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
  return (
    <nav className="flex px-4 h-16 justify-between items-center shadow-md">
      <Link href="/">
        Filthi <span className="text-red-500">Store</span>
      </Link>
      <div className="flex space-x-4">
        {Navlinks.map((link) => (
          <ul key={link.href}>
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          </ul>
        ))}
      </div>
      <Searchpage />
      <UserProfilepage />
    </nav>
  );
}
