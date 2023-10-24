import React from "react";
import MobileSidebar from "./mobile-sidebar";

const Navbar = () => {
  return (
    <div className="p-4 border-b bg-white flex items-center h-full shadow-sm">
      <MobileSidebar />
    </div>
  );
};

export default Navbar;
