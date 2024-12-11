import Footer from "@/components/navigation/footer";
import Navbar from "@/components/navigation/navbar";
import LoadingWrapper from "@/components/wrappers/loading-wrapper";

import Script from "next/script";

export const revalidate = 0;

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
      <Script
        strategy="beforeInteractive"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-R9J2KRQV13"
        id="google-analytics"
      />
      <Script strategy="beforeInteractive" id="google-analytics-body">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-R9J2KRQV13');
        `}
      </Script>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default WebLayout;
