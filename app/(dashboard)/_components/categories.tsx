import React from "react";
import Category from "./category";

const Categories = () => {
  const categories: { name: string; link: string; icon: string }[] = [
    {
      name: "Accounting",
      link: "/accounting",
      icon: "graph",
    },
    {
      name: "Computer Science",
      link: "/accounting",
      icon: "graph",
    },
    {
      name: "Engineering",
      link: "/accounting",
      icon: "graph",
    },
    {
      name: "Filming",
      link: "/accounting",
      icon: "graph",
    },
    {
      name: "Fitness",
      link: "/accounting",
      icon: "graph",
    },
    {
      name: "Music",
      link: "/accounting",
      icon: "graph",
    },
    {
      name: "Photography",
      link: "/accounting",
      icon: "graph",
    },
  ];
  return (
    <div className="flex gap-x-5 mt-5">
      {categories.map((cat) => (
        <Category key={cat.name} category={cat} />
      ))}
    </div>
  );
};

export default Categories;
