import React from "react";
type Props = {
  name: string;
  link: string;
  icon: string;
};
const Category = ({ category }: Props) => {
  const { name, link, icon } = category;
  return (
    <div className="border-solid border-2 border-slate-200 rounded-full p-2 text-xs font-semibold">
      {name}
    </div>
  );
};

export default Category;
