import Link from "next/link";
import dynamic from "next/dynamic";

import ArticleView from "@/components/views/article-view";
import EmiBreakdown from "@/components/views/breakdown";
import { getBlogFromUrl } from "@/lib/blog";

import { Button } from "@/components/ui/button";
import ClientWrapper from "@/components/wrappers/client-wrapper";
import { Ad1, Ad2, Ad3 } from "@/components/ads/ads";
import { ReadMoreArticle } from "@/components/views/read-more-article";
import { Header2Text } from "@/components/etc/header-2";

const EmploymentSelectPage = async () => {
  const data = await getBlogFromUrl(
    "phonepe-personal-loan-phonepe-is-offering-a-personal-loan-of-rs-50000"
  );

  const EmiYearWiseData = dynamic(
    () => import("@/components/views/emi-year-wise-table"),
    {
      ssr: false,
    }
  );

  return (
    <div className="w-full h-full">
      <div className="min-w-[320px] w-full sm:w-[90%] max-w-[1024px] px-2 mx-auto flex items-center justify-center flex-col">
        <ClientWrapper>
          <Ad1 />
        </ClientWrapper>
        <Header2Text />
        <EmiBreakdown />
        <ClientWrapper>
          <Ad2 />
        </ClientWrapper>
        <Button className="w-full mt-2 bg-[#0088FF] hover:bg-[#0088FF]" asChild>
          <Link href={"/loan/amount/bank"}>Confirm Loan info</Link>
        </Button>
        <ClientWrapper>
          <Ad3 />
        </ClientWrapper>
        <EmiYearWiseData isOpen />
        {data && (
          <ReadMoreArticle data={data.blog}>
            <ArticleView
              blogData={data.blog as string}
              faqData={data.faq as string}
            />
          </ReadMoreArticle>
        )}
      </div>
    </div>
  );
};
export default EmploymentSelectPage;
