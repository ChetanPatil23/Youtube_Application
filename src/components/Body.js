import React from "react";
import Sidebar from "./sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";

const Body = () => {
  return (
    <>
      <Header />
      <div className="grid grid-flow-col mt-16">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Body;
