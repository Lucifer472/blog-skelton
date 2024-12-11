"use client";
import { useEffect, useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { Blog } from "@prisma/client";
import toast from "react-hot-toast";
import dynamic from "next/dynamic";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { FaqEditor } from "@/components/etc/faq-editor";

import { updateBlog } from "@/action/update-blog";
import { BlogSchema } from "@/schema";

import { Category } from "@/constant";

const Editor = dynamic(() => import("@/components/etc/editor"), { ssr: false });

const BlogEditForm = ({ values }: { values: Blog }) => {
  const [data, setData] = useState<any>(JSON.parse(values.blog as string));

  const form = useForm<z.infer<typeof BlogSchema>>({
    resolver: zodResolver(BlogSchema),
    defaultValues: {
      category: values.category ? values.category : "",
      desc: values.description,
      keywords: values.keywords,
      title: values.title,
      faq: JSON.parse(values.faq as string),
    },
  });

  useEffect(() => {
    form.setValue("blog", JSON.stringify(data));
  }, [data, form]);

  const onSubmit = (v: z.infer<typeof BlogSchema>) => {
    updateBlog(v, values.id).then((res) => {
      if (res.error) {
        toast.error(res.error);
      }

      if (res.success) {
        toast.success(res.success);
      }
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 w-full min-w-[320px] xx:min-w-[400px] xs:min-w-[500px] sm:min-w-[600px] lg:min-w-[750px]"
      >
        <div className="space-y-4 w-full">
          <FormField
            name="title"
            control={form.control}
            render={({ field }) => (
              <FormItem className="w-full flex flex-col items-start justify-start gap-y-1">
                <Label className="text-lg">Title</Label>
                <FormControl className="w-full">
                  <Input
                    className="w-full"
                    type="text"
                    placeholder="Your Title Here..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />{" "}
          <FormField
            name="keywords"
            control={form.control}
            render={({ field }) => (
              <FormItem className="w-full flex flex-col items-start justify-start gap-y-1">
                <Label className="text-lg">Keywords</Label>
                <FormControl className="w-full">
                  <Input
                    className="w-full"
                    type="text"
                    placeholder="keyword1, keyword2, keyword3..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="desc"
            control={form.control}
            render={({ field }) => (
              <FormItem className="w-full flex flex-col items-start justify-start gap-y-1">
                <Label className="text-lg">Description</Label>
                <FormControl className="w-full">
                  <Input
                    className="w-full"
                    type="text"
                    placeholder="Blog Description..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />{" "}
          <FormField
            name="category"
            control={form.control}
            render={({ field }) => (
              <FormItem className="w-full flex flex-col items-start justify-start gap-y-1">
                <Label className="text-lg">Category</Label>
                <FormControl className="w-full">
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Category of the Blog..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Category.map((c) => (
                        <SelectItem key={c.value} value={c.value}>
                          {c.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="w-full space-y-1">
            <h2 className="text-lg">Blog:</h2>
            <Editor
              setData={setData}
              initialData={JSON.parse(values.blog as string)}
            />
          </div>
          <FaqEditor setValue={form.setValue} />
        </div>
        <Button size={"lg"} type="submit">
          Add Blog
        </Button>
      </form>
    </Form>
  );
};

export default BlogEditForm;
