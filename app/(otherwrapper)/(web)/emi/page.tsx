import dynamic from "next/dynamic";
import ArticleView from "@/components/views/article-view";
import { getBlogFromUrl } from "@/lib/blog";
import PageTitle from "@/components/etc/title";
import { principleStopPoints3 } from "@/constant";
import { Metadata } from "next";
import ClientWrapper from "@/components/wrappers/client-wrapper";
import { Ad1, Ad2, Ad3 } from "@/components/ads/ads";
import { ReadMoreArticle } from "@/components/views/read-more-article";

export const metadata: Metadata = {
  title: "Personal Loan",
  robots: {
    index: true,
    follow: true,
  },
};

export default async function Personal() {
  const EmiCalculator = dynamic(
    () => import("@/components/views/emi-calculator"),
    {
      ssr: false,
    }
  );

  const EmiBreakdown = dynamic(() => import("@/components/views/breakdown"), {
    ssr: false,
  });

  const EmiYearWiseData = dynamic(
    () => import("@/components/views/emi-year-wise-table"),
    {
      ssr: false,
    }
  );

  const data = await getBlogFromUrl("new-car-loan-emi-calculator");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center pb-24">
      <ClientWrapper>
        <Ad1 />
      </ClientWrapper>
      <div className="min-w-[340px] w-[90%] max-w-[1024px] bg-background mx-auto border-border border p-2 sm:px-4 sm:py-6 rounded-md bg-gray-100 mb-6">
        <PageTitle title="EMI Calculator for Personal Loan in India" />
        <EmiCalculator marks={principleStopPoints3} maxPri={3000000} />
        <EmiBreakdown />
        <EmiYearWiseData />
      </div>
      <ClientWrapper>
        <Ad2 />
      </ClientWrapper>
      {data && (
        <ReadMoreArticle data={data.blog}>
          <ArticleView
            blogData={data.blog as string}
            faqData={data.faq as string}
          />
        </ReadMoreArticle>
      )}
      <ClientWrapper>
        <Ad3 />
      </ClientWrapper>
    </div>
  );
}
