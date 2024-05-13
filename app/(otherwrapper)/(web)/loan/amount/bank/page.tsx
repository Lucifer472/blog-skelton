import { Ad1, Ad2, Ad3 } from "@/components/ads/ads";
import { HeaderText } from "@/components/etc/header";
import { ReadMoreArticle } from "@/components/views/read-more-article";
import { getBlogFromUrl } from "@/lib/blog";

import ArticleView from "@/components/views/article-view";
import SelectBank from "@/components/views/select-bank";
import ClientWrapper from "@/components/wrappers/client-wrapper";

const BankPage = async () => {
  const data = await getBlogFromUrl(
    "emi-calculator-for-personal-loan-in-india"
  );
  return (
    <div className="w-full h-full">
      <div className="min-w-[320px] w-full sm:w-[90%] max-w-[1024px] px-2 mx-auto flex items-center justify-center flex-col">
        <ClientWrapper>
          <Ad1 />
        </ClientWrapper>
        <HeaderText label="Please Select Bank" />
        <ClientWrapper>
          <Ad2 />
        </ClientWrapper>
        <SelectBank />
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

export default BankPage;
