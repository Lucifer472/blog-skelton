import { Ad1, Ad2 } from "@/components/ads/ads";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["600", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Disclaimer",
  robots: {
    index: false,
    follow: true,
  },
};

const Terms = () => {
  return (
    <section className="w-full h-full flex flex-col items-start gap-y-4 py-6 basic-container px-2 sm:px-2 md:px-4 xl:px-0">
      <Ad1 />
      <h1
        className={cn(
          "md:text-6xl text-center w-full font-[800]",
          poppins.className
        )}
      >
        Copyright
      </h1>
      <span className="w-full text-center text-muted-foreground">
        Updated on January 24th, 2023
      </span>
      <div className="max-w-[750px] mx-auto flex flex-col items-start gap-y-4 w-full">
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Disclaimer - Copyrights of third parties on texts, images, video files
          and Music files
        </h2>
        <p className="w-full text-left">
          OJASINFO is a metadata-search engine, which mean that different search
          machines of OJASINFO search in more search engines on the internet.
          The results that are displayed by OJASINFO as result of a search
          command of a user, originate from other search engines. OJASINFO shows
          the source of each result in its result list. It is possible that
          OJASINFO shows in the search results direct links to files or web
          pages that contain material that is protected by copyright or other
          intellectual property rights. However this material can be found and
          accessed by using the Website, OJASINFO does not and cannot grant its
          users the permission to download, copy or use this material. The user
          alone is responsible and liable of the use, copy and / or download of
          this material. OJASINFO is never responsible or liable for sanctions
          based on law or regulations of law suits of any kind against the user
          as result of using search services provided by OJASINFO.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Trademarks / trade names in advertisement on OJASINFO - Sponsored
          links{" "}
        </h2>
        <p className="w-full text-left">
          OJASINFO displays several advertisements on different pages of its
          website. OJASINFO acknowledges the intellectual property rights of
          third parties. OJASINFO also displays sponsored links originating from
          the advertising network of Google (Google AdWords / Adsense), on the
          pages where the search results are displayed. In case you or your
          company is of the opinion that a sponsored link or result may not be
          displayed in the sponsored links of OJASINFO, OJASINFO kindly requests
          you to inform Google about this, by using this link.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Trademarks / trade names in advertisement on OJASINFO - Other
          advertisements{" "}
        </h2>
        <p className="w-full text-left">
          When you are of the opinion that advertisements – other than sponsored
          links originating from the advertisement network of Google (Google
          AdWords / AdSense) – infringe upon intellectual property rights that
          belong to you or your company or to which your company can claim
          rights to, OJASINFO kindly requests you to inform OJASINFO about this
          via this form. OJASINFO shall assess your complaint and – if necessary
          – adapt or remove the advertisement within 2 working days after
          receipt of the complaint.
        </p>
        <h2 className={cn("text-xl font-[600]", poppins.className)}>
          Trademarks / trade names in advertisement of OJASINFO on the internet
        </h2>
        <p className="w-full text-left">
          OJASINFO advertises in the internet at several advertisement networks
          (o.a. Google Adwords, Yahoo! Search Marketing). OJASINFO acknowledges
          the intellectual property rights of third parties. When you are of the
          opinion that advertisements of OJASINFO infringe upon intellectual
          property rights that belong to you or your company or to which your
          company can claim rights to, OJASINFO kindly requests you to inform
          OJASINFO about this via this form or in writing to Vinden.nl B.V.,
          Stationsdwarsweg 7, 7461 AR Rijssen. OJASINFO shall assess your
          complaint and – if necessary – adapt or remove the advertisement
          within 2 working days after receipt of the complaint.
        </p>
        <Ad2 />
      </div>
    </section>
  );
};

export default Terms;
