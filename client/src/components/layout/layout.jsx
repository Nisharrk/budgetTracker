import React from "react";

import Navbar from "../navbar/navbar.jsx";
import Footer from "../footer/footer.jsx";

export default function Layout(props) {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
}
