import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex w-screen bg-black py-6 text-white p-3 border-b border-teal-500">
      <div className="w-1/2 text-3xl font-semibold">
        <Link href={"/"}>Budget Tracker 💵</Link>
      </div>
      <div className="w-1/2 text-right pr-7 text-lg font-semibold">
        <Link href={"/login"}>Log in</Link>
      </div>
    </div>
  );
};

export default Navbar;
