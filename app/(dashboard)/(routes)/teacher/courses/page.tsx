import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const CoursesPage = () => {
  return (
    <div className="flex w-full p-5">
      <Link href="/teacher/create" className="mt-3 ml-auto">
        <Button>New course </Button>
      </Link>
    </div>
  );
};

export default CoursesPage;
