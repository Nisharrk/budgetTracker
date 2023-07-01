import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <div className="h-screen bg-zinc-900 text-gray-200 pt-10">
      <div className="flex flex-col mb-10 ml-7 mr-7 h-full align-center text-2xl">
        <div className="mb-3 mt-5">
          <Link href="/">Home</Link>
        </div>
        <div className="mb-2">
          <Link href="/transactions">Transactions</Link>
        </div>
      </div>
    </div>
  );
}
