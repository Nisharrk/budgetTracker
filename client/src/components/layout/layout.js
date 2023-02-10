import React from "react";

import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

export default function Layout(props) {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
}
