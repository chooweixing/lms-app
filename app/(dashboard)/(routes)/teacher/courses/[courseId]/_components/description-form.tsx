"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import { cn } from "../../../../../../../lib/utils";

type DescriptionFormProps = {
  initialData: {
    description: string;
  };
  courseId: string;
};
const formSchema = z.object({
  description: z.string().min(1, { message: "Required" }),
});
const DescriptionForm = ({ initialData, courseId }: DescriptionFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData,
  });
  const [edit, setEdit] = React.useState(false);
  const { isValid, isSubmitting } = form.formState;
  const router = useRouter();
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.patch(`/api/courses/${courseId}`, values);
      router.refresh();
      toast.success("Course updated");
    } catch {
      toast.error("Something went wrong");
    }
  };
  const toggleEdit = () => setEdit((e) => !e);
  return (
    <div>
      <div className="border bg-slate-100 rounded-md p-4 mt-5 space-y-4">
        <div className="flex w-full items-center justify-between font-medium">
          <p>Course Description</p>
          <Button variant="ghost" onClick={toggleEdit}>
            {!edit ? (
              <>
                <Pencil className="h-4 w-4 mr-2" /> Edit description
              </>
            ) : (
              <>Cancel</>
            )}
          </Button>
        </div>
        {!edit ? (
          <p
            className={cn(
              "text-sm mt-2",
              !initialData.description && "italic text-slate-500"
            )}
          >
            {initialData.description || "No description"}
          </p>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        disabled={isSubmitting}
                        placeholder="e.g. 'Advanced web development'"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center gap-x-2">
                <Button type="submit" disabled={!isValid || isSubmitting}>
                  {" "}
                  Save
                </Button>
              </div>
            </form>
          </Form>
        )}
      </div>
    </div>
  );
};

export default DescriptionForm;
