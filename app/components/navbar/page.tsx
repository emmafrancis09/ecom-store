"use client";
import Link from "next/link";
import React, { useState } from "react";
import UserProfilepage from "../user-profile/page";
import Searchpage from "../search/page";
import { usePathname } from "next/navigation";
import { FaBars, FaX } from "react-icons/fa6";

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
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 right-0 z-50 w-full rounded-b-lg bg-white shadow-md">
      <nav className="flex px-4 h-16 justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold">
          Filthi <span className="text-red-500">Store</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-4">
          {Navlinks.map((link) => (
            <ul
              key={link.href}
              className={
                currentPath === link.href ? "bg-red-200 rounded-lg" : ""
              }
            >
              <li className="hover:bg-red-200 transition-all cursor-pointer rounded-lg p-2">
                <Link href={link.href}>{link.label}</Link>
              </li>
            </ul>
          ))}
        </div>

        {/* Right Section: Search & Profile (Profile only on medium & large screens) */}
        <div className="flex items-center space-x-4">
          <Searchpage />
          <div className="hidden md:flex">
            <UserProfilepage />
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={toggleMenu}
            className="md:hidden p-2 cursor-pointer transition-all"
          >
            {isOpen ? <FaX size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="absolute top-16 right-0 w-full bg-white shadow-md md:hidden p-4">
          <ul className="flex flex-col items-center space-y-4">
            {Navlinks.map((link) => (
              <li
                key={link.href}
                className="hover:bg-red-200 transition-all cursor-pointer rounded-lg p-2"
              >
                <Link href={link.href} onClick={() => setIsOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* User Profile inside Mobile Menu (only on small screens) */}
          <div className="mt-4 flex justify-center">
            <UserProfilepage />
          </div>
        </div>
      )}
    </div>
  );
}
