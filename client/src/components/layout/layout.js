import React from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

export default function Layout({ children }) {
  return (
    <div className="font-sans">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
