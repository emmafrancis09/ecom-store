import { Search } from "lucide-react";
import React from "react";

export default function Searchpage() {
  return (
    <div className="relative w-8 transition-all sm:w-48">
      <Search className="absolute top-1/2 left-2 -translate-y-1/2" />
      <input
        className="pl-10 pr-2 bg-red-100 h-10 w-full rounded-lg outline-red-500 focus:ring-2 focus:ring-red-500 shadow-md"
        type="text"
        placeholder="Search ..."
      />
    </div>
  );
}
