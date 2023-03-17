import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <div className="flex flex-col m-10 h-vh">
      <div className="mb-2">
        <Link href="/">Home</Link>
      </div>
      <div className="mb-2">
        <Link href="/transactions">Transactions</Link>
      </div>
    </div>
  );
}
