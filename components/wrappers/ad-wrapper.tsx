"use client";

import { AdUnit } from "next-google-adsense";

export const AdsWrapper = ({
  id,
  layout = "auto",
}: {
  id: string;
  layout?: "auto" | "autorelaxed";
}) => {
  return (
    <div className="text-center w-full space-y-1">
      <span className="text-[10px] text-center w-full">SPONSORED</span>
      <div style={{ minWidth: "336px", minHeight: "280px" }}>
        <AdUnit
          publisherId="pub-2899879927145982"
          slotId={id}
          layout={"display"}
        />
      </div>
    </div>
  );
};
