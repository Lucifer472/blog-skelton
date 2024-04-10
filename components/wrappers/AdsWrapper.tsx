"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const AdsWrapper = ({
  id,
  label,
  size,
}: {
  id: string;
  label: string;
  size: googletag.GeneralSize;
}) => {
  const pathname = usePathname();
  const [show, setShow] = useState(true);

  window.googletag = window.googletag || { cmd: [] };

  useEffect(() => {
    let sl: googletag.Slot | null;

    googletag.cmd.push(function () {
      sl = googletag.defineSlot(label, size, id);
      if (sl !== null) {
        sl.addService(googletag.pubads());
      }
      googletag.pubads().enableSingleRequest();
      googletag.enableServices();

      googletag.pubads().addEventListener("slotRenderEnded", (e) => {
        if (e.slot) {
          if (e.isEmpty) {
            setShow(false);
          }
        } else {
          setShow(false);
        }
      });
      googletag.display(id);
    });
    return () => {
      if (googletag && sl !== null) {
        googletag.cmd.push(function () {
          googletag.destroySlots([sl as googletag.Slot]);
        });
      }
    };
  }, [pathname, id, label, size]);

  return (
    <>
      {/* {show && ( */}
      <div className="text-center ">
        <span className="text-[10px]">SPONSORED</span>
        <div id={id} style={{ minWidth: "336px", minHeight: "280px" }}></div>
      </div>
      {/* )} */}
    </>
  );
};
