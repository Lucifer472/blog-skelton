import AnchorAd from "@/components/ads/anchor-ad";
import InterstitialAd from "@/components/ads/interstitial-ad";
import Footer from "@/components/navigation/footer";
import Navbar from "@/components/navigation/navbar";
import ClientWrapper from "@/components/wrappers/client-wrapper";
import LoadingWrapper from "@/components/wrappers/loading-wrapper";
import Script from "next/script";

const WebLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <LoadingWrapper />
      <Script
        strategy="beforeInteractive"
        async
        src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        id="google-ads"
      />
      {children}
      <Footer />
      <ClientWrapper>
        <>
          <AnchorAd />
          <InterstitialAd />
        </>
      </ClientWrapper>
    </main>
  );
};

export default WebLayout;
