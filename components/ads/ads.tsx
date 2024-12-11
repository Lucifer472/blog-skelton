"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { AdsWrapper } from "@/components/wrappers/ad-wrapper";

export const Ad1 = () => {
  return <AdsWrapper id={"7041655490"} />;
};

export const Ad2 = () => {
  return <AdsWrapper id={"3386876009"} />;
};

export const Ad3 = () => {
  return <AdsWrapper id={"4585413194"} />;
};

export const Ad4 = () => {
  return <AdsWrapper id={"7020004840"} />;
};

export const Ad5 = () => {
  return <AdsWrapper id={"6777857498"} layout="autorelaxed" />;
};

export const FeedAd = () => {
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
    <div className="w-full">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-format="fluid"
        data-ad-layout-key="-6i+ep+q-6d+ap"
        data-ad-client="ca-pub-2899879927145982"
        data-ad-slot="4670568903"
      ></ins>
    </div>
  );
};
