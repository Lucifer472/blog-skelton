import { CalendarFold, ChevronDownCircle, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Ad5, FeedAd } from "../ads/ads";

const ArticleListView = ({ item, number }: { item: any; number?: number }) => {
  return (
    <>
      <div className="w-full grid grid-cols-4 pb-4 border-b border-[var(--pallet-3)]">
        <Link
          href={"/" + encodeURIComponent(item.url)}
          className="w-full col-span-4 md:col-span-3 h-full flex flex-col items-start cursor-pointer gap-y-2"
        >
          <h2 className="text-base xs:text-lg md:text-xl font-semibold pb-2 hover:text-[var(--pallet-4)]">
            {item.title}
          </h2>
          <div className="flex items-center justify-start gap-x-2">
            <User className="w-4 h-4 xs:w-6 xs:h-6" />
            <span className="text-xs xx:text-sm xs:text-base sm:text-lg text-gray-700 font-medium">
              {item.Author?.user.name}
            </span>
            <CalendarFold className="w-4 h-4 xs:w-6 xs:h-6" />
            <span className="text-xs xx:text-sm xs:text-base sm:text-lg text-gray-700 font-medium">
              {item.createdAt.toLocaleDateString("en-us", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
          <p className="min-h-[80px] text-xs xs:text-base">
            {item.description}
          </p>
          <button className="flex items-center justify-center gap-x-2 px-4 py-2 xs:px-6 xs:py-4 bg-[var(--pallet-3)] rounded-md hover:bg-[var(--pallet-4)]">
            <span className="text-white text-sm xs:text-base">
              Continue to Read
            </span>
            <ChevronDownCircle className="text-white -rotate-90 w-6 h-6 xs:w-8 xs:h-8" />
          </button>
        </Link>
        <figure className="w-full col-span-1 h-full relative hidden md:block">
          <Image
            src={item.img}
            alt="Blog Image"
            fill
            className="object-cover"
          />
        </figure>
      </div>
      {number === 1 && <FeedAd />}
      {number === 3 && <Ad5 />}
    </>
  );
};

export default ArticleListView;
