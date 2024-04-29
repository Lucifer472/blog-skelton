import Link from "next/link";
import { redirect } from "next/navigation";

import { getBlogFromUrl } from "@/lib/blog";
import { cn } from "@/lib/utils";

import { alphabet } from "@/constant";

import ArticleView from "@/components/views/article-view";
import { ReadMoreArticle } from "@/components/wrappers/read-more-article";
import { Ad1, Ad2, Ad3, Ad4, Ad5 } from "@/components/ads/ads";

const CustomAbcPage = async () => {
  const data = await getBlogFromUrl("mahila-samridhi-yojana-2024");

  if (!data) return redirect("/");

  return (
    <div className="w-full flex flex-col gap-y-8 pt-4 max-w-7xl mx-auto">
      <h2 className="text-center font-bold text-2xl sm:text-3xl md:text-5xl leading-[1.2]">
        👆🏻
        <span className="text-gradient">
          Click on the first letter of your name{" "}
        </span>
        😋 <br /> 🎷{" "}
        <span className="text-gradient">
          Let&apos;s see which song play for you
        </span>{" "}
        🥁
      </h2>
      <Ad2 />
      <div className="w-full flex flex-wrap gap-2 sm:gap-4 items-center justify-center">
        {alphabet.map((a, index) => (
          <>
            <Link
              key={a}
              href={"/pancard/" + a.toLowerCase()}
              className={cn(
                "w-[45%] xs:w-[160px] sm:w-[200px] md:w-[240px] py-3 text-center text-white text-lg xs:text-xl sm:text-2xl font-semibold rounded-md border-2 border-black shadow",
                index % 4 === 0 && "bg-red-700",
                index % 4 === 1 && "bg-blue-700",
                index % 4 === 2 && "bg-pink-500",
                index % 4 === 3 && "bg-yellow-500"
              )}
            >
              {a}
            </Link>
            {index === 14 && <Ad4 key={"asd"} />}
          </>
        ))}
      </div>
      <Ad3 />
      {data && (
        <ReadMoreArticle data={data.blog}>
          <ArticleView
            blogData={data.blog as string}
            faqData={data.faq as string}
          />
        </ReadMoreArticle>
      )}
      <Ad5 />
    </div>
  );
};

export default CustomAbcPage;
