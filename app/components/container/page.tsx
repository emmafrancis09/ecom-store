import React from "react";
import Navbarpage from "../navbar/page";
import Sidebarpage from "@/app/sidebar/page";
interface ChildrenProps {
  children: React.ReactNode;
}
export default function Conatinerpage({ children }: ChildrenProps) {
  return (
    <div className="flex items-center justify-center flex-col mt-20">
      <header>
        <Navbarpage />
      </header>
      <main>
        <Sidebarpage />
        {children}
      </main>
    </div>
  );
}
