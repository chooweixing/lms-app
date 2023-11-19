"use client";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import React from "react";

const ChapterForm = () => {
  const [add, setAdd] = React.useState(false);
  const toggleAdd = () => setAdd((a) => !a);
  return (
    <div className="mt-6 bg-slate-100 border p-4 rounded-md">
      <div className="font-medium flex justify-between items-center">
        Course chapters{" "}
        <Button variant="ghost" onClick={toggleAdd}>
          {!add ? (
            <>
              <PlusCircle className="h-4 w-4 mr-2" /> Add a chapter
            </>
          ) : (
            <>Cancel</>
          )}
        </Button>
      </div>
    </div>
  );
};

export default ChapterForm;
