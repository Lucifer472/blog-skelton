import { Metadata } from "next";

import { Pagination } from "@/components/etc/pagination";
import { HeaderText } from "@/components/etc/header";
import NoArticleFound from "@/components/views/no-article";
import ArticleListView from "@/components/views/article-list-view";

import { Ad1, Ad2, Ad3 } from "@/components/ads/ads";

import { getBlogs } from "@/lib/blog";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "Home",
  robots: {
    index: true,
    follow: true,
  },
};

const ArticlePage = async ({ searchParams }: { searchParams: any }) => {
  const searchPage = parseInt(searchParams.page);
  const page = isNaN(searchPage) ? 1 : searchPage;

  const data = await getBlogs(page);
  if (!data) return;

  data.pop();

  return (
    <div className="min-w-[340px] w-[90%] max-w-[1024px] mx-auto flex flex-col items-start justify-start">
      <Ad1 />
      <HeaderText label="Articles" />
      <Ad2 />
      <div className="w-full flex flex-col items-start gap-y-4 my-2">
        {data.length > 0 ? (
          data.map((item, index) => <ArticleListView key={index} item={item} />)
        ) : (
          <NoArticleFound />
        )}
        {data.length > 0 && (
          <Pagination
            isBack={page > 1}
            isNext={data.length !== 11}
            page={page}
          />
        )}
        <Ad3 />
      </div>
    </div>
  );
};

export default ArticlePage;
