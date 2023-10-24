import React from "react";
import Sidebar from "./_components/sidebar";
import Navbar from "./_components/navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="md:pl-56 h-[80px] fixed w-full z-50">
        <Navbar />
      </div>
      <div className="hidden md:flex h-full w-50 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <main className="pt-[80px] md:pl-56 h-full">{children}</main>
    </div>
  );
};

export default DashboardLayout;
