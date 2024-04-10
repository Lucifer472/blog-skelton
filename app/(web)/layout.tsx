import Footer from "@/components/navigation/footer";
import Navbar from "@/components/navigation/navbar";
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
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default WebLayout;
