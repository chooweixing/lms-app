"use client";
import React from "react";
import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormLabel,
  FormMessage,
  FormItem,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pencil } from "lucide-react";
import toast from "react-hot-toast";

type TitleFormProps = {
  initialData: {
    title: string;
  };
  courseId: string;
};
const formSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
});
const TitleForm = ({ initialData, courseId }: TitleFormProps) => {
  const [edit, setEdit] = React.useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData,
  });
  const { isSubmitting, isValid } = form.formState;
  const toggleEdit = () => {
    setEdit((e) => !e);
  };
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
  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Course Title
        <Button variant="ghost" onClick={toggleEdit}>
          {!edit ? (
            <>
              <Pencil className="h-4 w-4 mr-2" /> Edit title
            </>
          ) : (
            <>Cancel</>
          )}
        </Button>
      </div>
      {!edit ? (
        <p className="text-sm mt-2">{initialData.title}</p>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-4"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
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
  );
};

export default TitleForm;
