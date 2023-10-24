"use client";
import { Compass, Layout } from "lucide-react";
import React from "react";
import SidebarItem from "./sidebar-item";

const guestRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: Compass,
    label: "Browse",
    href: "/search",
  },
];
const SidebarRoutes = () => {
  const routes = guestRoutes;
  return (
    <div className="flex flex-col w-full">
      {routes.map(({ icon, label, href }) => {
        return <SidebarItem key={href} icon={icon} label={label} href={href} />;
      })}
    </div>
  );
};

export default SidebarRoutes;
