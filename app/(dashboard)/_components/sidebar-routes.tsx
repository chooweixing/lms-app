"use client";
import { BarChart, Compass, Layout, List } from "lucide-react";
import React from "react";
import SidebarItem from "./sidebar-item";
import { usePathname } from "next/navigation";

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
const teacherRoutes = [
  {
    icon: List,
    label: "Courses",
    href: "/teacher/courses",
  },
  {
    icon: BarChart,
    label: "Analytics",
    href: "/teacher/analytics",
  },
];
const SidebarRoutes = () => {
  const pathname = usePathname();
  const routes = pathname?.includes("/teacher") ? teacherRoutes : guestRoutes;
  return (
    <div className="flex flex-col w-full">
      {routes.map(({ icon, label, href }) => {
        return <SidebarItem key={href} icon={icon} label={label} href={href} />;
      })}
    </div>
  );
};

export default SidebarRoutes;
