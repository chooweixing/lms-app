"use client";
import { SearchIcon } from "lucide-react";
import React from "react";

const SearchBar = () => {
  return (
    <div className="flex items-center gap-x-3 px-4 py-2 rounded-full bg-slate-100 w-[300px]">
      <SearchIcon className="w-4 h-4" />
      <input
        type="text"
        className="bg-transparent outline-none"
        placeholder="Search for a course"
      />
    </div>
  );
};

export default SearchBar;
