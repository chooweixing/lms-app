"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Pencil } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

type ImageFormProps = {
  initialData: { imageUrl: string };
  courseId: string;
};
const formSchema = z.object({
  imageUrl: z.string().min(1, { message: "Required" }),
});
const ImageForm = ({ initialData, courseId }: ImageFormProps) => {
  const [edit, setEdit] = React.useState(false);
  const toggleEdit = () => setEdit((e) => !e);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData,
  });
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
  return (
    <div className="border bg-slate-100 mt-5 p-4 rounded-md space-y-2">
      <div className="flex justify-between items-center font-medium">
        Course Image
        <Button variant="ghost" onClick={toggleEdit}>
          {!edit ? (
            <>
              <Pencil className="h-4 w-4 mr-2" /> Edit Image
            </>
          ) : (
            <>Cancel</>
          )}
        </Button>
      </div>
      {!edit ? (
        <div>
          {initialData.imageUrl ? (
            <p>{initialData.imageUrl}</p>
          ) : (
            <p className="italic text-slate-500">No image</p>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ImageForm;
