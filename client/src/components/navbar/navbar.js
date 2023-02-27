import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex w-screen bg-black py-6 text-white p-3 border-b">
      <div className="w-1/2 text-3xl font-semibold">
        <Link href={"/"}>Budget Tracker 💵</Link>
      </div>
    </div>
  );
};

export default Navbar;
