import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";

const Body = () => {
  return (
    <div className="grid grid-flow-col">
      <Sidebar />
      <Main />
    </div>
  );
};

export default Body;
