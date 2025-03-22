import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <Link href="/featured-products">
      <h1 className="text-4xl">Featured Products</h1>
    </Link>
  );
}
