"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export const AdsWrapper = ({
  id,
  layout = "auto",
}: {
  id: string;
  layout?: "auto" | "autorelaxed";
}) => {
  const pathname = usePathname();

  useEffect(() => {
    try {
      // @ts-ignore
      (adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.log(error);
    }
  }, [pathname]);

  return (
    <div
      className="text-center w-full space-y-1"
      style={{ minHeight: "250px" }}
    >
      <span className="text-[10px] text-center w-full">SPONSORED</span>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-2899879927145982"
        data-ad-slot={id}
        data-ad-format={layout}
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};
