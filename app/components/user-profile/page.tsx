import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function UserProfilepage() {
  return (
    <Link href="/user">
      <Image
        src="/Filthii.png"
        width={100}
        alt="dp"
        height={100}
        className="object-center object-cover w-10 h-10 rounded-full bg-red-100 border border-red-300 shadow-xl cursor-pointer"
      />
    </Link>
  );
}
