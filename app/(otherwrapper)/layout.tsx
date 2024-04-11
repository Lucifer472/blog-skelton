import ClientWrapper from "@/components/wrappers/client-wrapper";
import LoadingWrapper from "@/components/wrappers/loading-wrapper";
import Script from "next/script";
import AnchorAd from "@/components/ads/anchor-ad";
import InterstitialAd from "@/components/ads/interstitial-ad";

const OtherLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* <LoadingWrapper /> */}
      <Script
        strategy="beforeInteractive"
        async
        src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        id="google-ads"
      />
      {children}
      <ClientWrapper>
        <>
          <AnchorAd />
          <InterstitialAd />
        </>
      </ClientWrapper>
    </>
  );
};

export default OtherLayout;
