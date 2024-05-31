"use client";

import Script from "next/script";

// import { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";

export const AdsWrapper = ({
  id,
  label,
  size,
  divSize,
}: {
  id: string;
  label: string;
  size: googletag.GeneralSize;
  divSize?: { x: number; y: number };
}) => {
  // const pathname = usePathname();

  // window.googletag = window.googletag || { cmd: [] };

  // useEffect(() => {
  //   let sl: googletag.Slot | null;

  //   googletag.cmd.push(function () {
  //     sl = googletag.defineSlot(label, size, id);
  //     if (sl !== null) {
  //       sl.addService(googletag.pubads());
  //     }
  //     googletag.enableServices();

  //     googletag.pubads().addEventListener("slotOnload", (e) => {
  //       if (sl === e.slot) {
  //         console.log("Ads Loaded");
  //       } else {
  //         console.log(e.slot);
  //         console.log("Ad Was Not loaded :" + e.slot.getSlotId());
  //       }
  //     });
  //     googletag.display(id);
  //   });
  //   return () => {
  //     if (googletag && sl !== null) {
  //       googletag.cmd.push(function () {
  //         googletag.destroySlots([sl as googletag.Slot]);
  //       });
  //     }
  //   };
  // }, [pathname, id, label, size]);

  return (
    <div className="text-center flex w-full items-center justify-center flex-col">
      <span className="text-[10px]">SPONSORED</span>
      {/* <div
        id={id}
        style={{
          minWidth: divSize ? divSize.x : "336px",
          minHeight: divSize ? divSize.y : "280px",
        }}
      ></div> */}
      <ins
        className="adsbygoogle"
        style={{ display: "block", minWidth: "336px", minHeight: "280px" }}
        data-ad-client="ca-pub-3302857861058313"
        data-ad-slot={id}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <Script strategy="lazyOnload" id="ads">
        {`(adsbygoogle = window.adsbygoogle || []).push({});`}
      </Script>
    </div>
  );
};
