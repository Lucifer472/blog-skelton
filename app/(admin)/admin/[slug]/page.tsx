import { redirect } from "next/navigation";

import AdminNavbar from "@/components/navigation/admin-navbar";
import FormWrapper from "@/components/wrappers/form-wrapper";

import { getBlogFromUrl } from "@/lib/blog";
import BlogEditForm from "@/components/auth/blog-edit-form";

const BlogEditPage = async ({ params }: { params: { slug: string } }) => {
  const data = await getBlogFromUrl(params.slug);

  if (!data) {
    return redirect("/");
  }

  return (
    <section className="w-full min-h-screen">
      <AdminNavbar />
      <div className="global-container flex items-center justify-center w-full min-h-screen py-6">
        <FormWrapper
          title="This is Edit Form"
          label="This is form is for Editing New Blog!"
        >
          <BlogEditForm values={data} />
        </FormWrapper>
      </div>
    </section>
  );
};

export default BlogEditPage;
