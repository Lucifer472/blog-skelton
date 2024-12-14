import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ojasinfo.in"),
  title: {
    default: "Ojasinfo",
    template: "%s | Government Jobs",
  },
  description:
    "Unlock Your Career Potential: Dive into the Latest Government Job Updates! Discover Your Path to Success with our Exclusive Government Job Updates Blog. Stay Ahead of the Curve with Timely Notifications, Expert Insights, and Insider Tips. Your Gateway to Thriving in the Public Sector Starts Here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script
          async
          strategy="afterInteractive"
          id="google-ads"
          crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2899879927145982"
        />
        <Toaster position="top-center" />
        {children}
      </body>
    </html>
  );
}
