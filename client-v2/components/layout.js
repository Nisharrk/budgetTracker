import Sidebar from "@/components/sidebar";
import React from "react";

export default function Layout(props) {
  return (
    <div className="flex flex-row">
      <div className="w-1/6 h-screen bg-zinc-900 text-gray-200">
        <Sidebar />
      </div>
      <div className="w-5/4 w-full bg-slate-200">{props.children}</div>
    </div>
  );
}
