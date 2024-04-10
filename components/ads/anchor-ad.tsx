"use client";
import { useEffect } from "react";

const AnchorAd = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.text = `window.googletag = window.googletag || { cmd: [] };
      let anchorSlot;

      googletag.cmd.push(() => {
        anchorSlot = googletag.defineOutOfPageSlot(
          "/22725519965/TTS_OJASINFO_ANCHOR",googletag.enums.OutOfPageFormat.BOTTOM_ANCHOR,
        );

        // Anchor slots return null if the page or device does not support anchors.
        if (anchorSlot) {
          anchorSlot.setTargeting("test", "anchor").addService(googletag.pubads());
        }

        // Enable SRA and services.
        googletag.pubads().enableSingleRequest();
        googletag.enableServices();

        googletag.display(anchorSlot);
      });`;

    script.setAttribute("type", "module");

    document.head.appendChild(script);
  }, []);

  return <></>;
};

export default AnchorAd;
