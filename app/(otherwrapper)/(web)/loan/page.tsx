import ArticleView from "@/components/views/article-view";

import { getBlogFromUrl } from "@/lib/blog";
import SelectLoanType from "@/components/views/select-loan";
import { Ad1, Ad2, Ad3 } from "@/components/ads/ads";
import ClientWrapper from "@/components/wrappers/client-wrapper";
import { ReadMoreArticle } from "@/components/views/read-more-article";
import { HeaderText } from "@/components/etc/header";

const LoanPage = async () => {
  const data = await getBlogFromUrl("hdfc-personal-loan-step-by-step-process-");

  return (
    <div className="w-full h-full pb-4">
      <ClientWrapper>
        <Ad1 />
      </ClientWrapper>
      <div className="min-w-[320px] w-full sm:w-[90%] max-w-[1024px] mx-auto flex items-center justify-center flex-col px-2">
        <HeaderText label="Please Select Loan Type" />
        <ClientWrapper>
          <Ad2 />
        </ClientWrapper>
        <SelectLoanType />
        <ClientWrapper>
          <Ad3 />
        </ClientWrapper>
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

export default LoanPage;
