import React from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

export default function Layout(props) {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
}
