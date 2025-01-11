import Footer from "@/components/home/footer";
import Header from "@/components/home/header";
import React from "react";

const Template = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Template;
