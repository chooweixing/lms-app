import React from "react";
import { db } from "../../../../../../lib/db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { IconBadge } from "@/components/icon-badge";
import { LayoutDashboard } from "lucide-react";
import TitleForm from "./_components/title-form";

const CourseIdPage = async ({ params }: { params: { courseId: string } }) => {
  const { userId } = auth();
  if (!userId) {
    return redirect("/");
  }
  const course = await db.course.findUnique({ where: { id: params.courseId } });
  if (!course) {
    return redirect("/");
  }
  const requiredFields = [
    course.title,
    course.description,
    course.imageUrl,
    course.price,
    course.categoryId,
  ];
  const completedFields = requiredFields.filter(Boolean).map.length;
  const completedText = `(${completedFields}/${requiredFields.length})`;
  return (
    <div className="p-6">
      <div className="flex flex-col gap-y-2">
        <h3 className="text-2xl font-medium">Course setup</h3>
        <p className="text-sm text-slate-700">
          Complete all fields {completedText}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
        <div>
          <div className="flex items-center gap-x-2">
            <IconBadge icon={LayoutDashboard} />
            <h2 className="text-xl">Customise your course</h2>
          </div>
          <TitleForm initialData={course} courseId={course.id}></TitleForm>
        </div>
      </div>
    </div>
  );
};

export default CourseIdPage;
