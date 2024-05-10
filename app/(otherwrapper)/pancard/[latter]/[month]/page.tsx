import { redirect } from "next/navigation";

import { getBlogFromUrl } from "@/lib/blog";

import ArticleView from "@/components/views/article-view";
import { ReadMoreArticle } from "@/components/wrappers/read-more-article";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { Ad1, Ad2, Ad3 } from "@/components/ads/ads";
import { AudioDelayed } from "@/components/etc/audio";

const SongPage = async () => {
  const data = await getBlogFromUrl(
    "download-epan-card-get-epan-complete-information"
  );

  if (!data) return redirect("/");

  const randomNumber = Math.floor(Math.random() * 5) + 1;

  return (
    <div className="w-full flex flex-col gap-y-8 pt-4 max-w-7xl mx-auto">
      <Ad2 />
      <div className="px-6 w-full">
        <div className="w-full flex flex-col gap-y-4 bg-gray-100 rounded-md border-2 border-black py-4 max-w-3xl mx-auto items-center justify-center px-4">
          <h2 className="text-center font-bold text-3xl md:text-5xl leading-[1.6]">
            👆🏻
            <span className="text-gradient">आपके लिए चुना गया है</span>
            😋 <br /> 🎷{" "}
            <span className="text-gradient">
              कृपया अपने सभी दोस्तों को शेयर करें।{" "}
            </span>{" "}
            🥁
          </h2>
          <AudioDelayed randomNumber={randomNumber} />
          <h2 className="text-center font-bold text-3xl md:text-5xl leading-[1.6]">
            😍
            <span className="text-gradient">इसे सभी ग्रुप में फैला दो|</span> 😍
          </h2>
          <Link
            href={
              "https://api.whatsapp.com/send?text=" +
              `अपने नाम के पहले अक्षर पे क्लिक करे 😋%0Aदेखते हे आपके लिए कोनसा गाना बजता हे 🎷🎷🎷%0A%0Aपसंद आये तो आपने सभी दोस्तों को भेजे 😍😍%0A%0A https://bit.ly/play-4-you 😍 नया हे, फैला दो सभी ग्रुप्स में 😍`
            }
            className="w-1/2 sm:w-1/3 flex items-center justify-center gap-x-2 rounded-md hover:bg-green-500 text-white bg-green-600 py-2 text-center mx-auto"
            target="_blank"
          >
            <FaWhatsapp className="text-xl" />
            <span>Share with Friend</span>
          </Link>
        </div>
      </div>
      <Ad1 />

      {data && (
        <ReadMoreArticle data={data.blog}>
          <ArticleView
            blogData={data.blog as string}
            faqData={data.faq as string}
          />
        </ReadMoreArticle>
      )}
      <Ad3 />
    </div>
  );
};

export default SongPage;
