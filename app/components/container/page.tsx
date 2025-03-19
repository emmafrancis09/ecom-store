import React from "react";
import Navbarpage from "../navbar/page";
interface ChildrenProps {
  children: React.ReactNode;
}
export default function Conatinerpage({ children }: ChildrenProps) {
  return (
    <div>
      <header>
        <Navbarpage />
      </header>
      <main>{children}</main>
    </div>
  );
}
