import { Ad1, Ad2, Ad3 } from "@/components/ads/ads";
import Footer from "@/components/navigation/footer";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "E-Cycle Scheme Apply the Online",
  description:
    "E-Cycle Scheme Apply Online platform, your gateway to eco-friendly transportation solutions. Our website serves as a central hub for information and application processes related to the government's E-Cycle Scheme. Discover how you can participate in this innovative initiative aimed at promoting sustainable mobility.",
  keywords:
    "E-Cycle Scheme,Electric Bicycle Program,Online Application Process,Apply for E-Cycle Scheme,Government Electric Bicycle Initiative,E-Cycle Subsidy Scheme,How to Register for E-Cycle Scheme",
};

const ECycleSchemePage = () => {
  return (
    <main>
      <div className="w-full flex flex-col gap-y-1">
        <div className="w-full h-20 flex items-center justify-center bg-[#0072aa]">
          <h2 className="text-white text-2xl font-medium max-w-7xl mx-auto px-2">
            E-Cycle Scheme Apply the Online
          </h2>
        </div>
        <div className="max-w-7xl mx-auto w-full flex items-start justify-start my-1 px-2">
          <p className="font-semibold">
            Get Rs 15000 from the Government by Buying an E-Cycle Scheme Apply
            the Online Link Given Below ⬇️
          </p>
        </div>
        <Ad1 />
        <div className="max-w-7xl mx-auto w-full flex items-start justify-start my-1">
          <p className="w-full text-justify px-2">
            E-Cycle Scheme: The government has become the first state government
            in the country to announce a subsidy for e-cycles. Recently, the
            Delhi government has announced to inclusion of both personal and
            cargo electric bicycles in its EV subsidy policy. Transport Minister
            Kailash Gehlot said the government will provide a subsidy of Rs
            5,500 for the first 10,000 buyers of e-cycles in the city.
          </p>
        </div>
        <Link
          href={
            "/get-rs-15000-from-the-government-by-buying-an-ecycle-scheme-apply-the-online-link-given-below"
          }
          className="max-w-7xl mx-auto w-full flex items-center justify-center my-1 px-2"
        >
          <Image src={"/e-cycle.png"} alt="pan card" width={500} height={500} />
        </Link>
        <Ad2 />
        <div className="max-w-7xl mx-auto w-full flex items-center justify-center flex-col my-4 px-2 gap-y-2">
          <Link
            href={
              "/get-rs-15000-from-the-government-by-buying-an-ecycle-scheme-apply-the-online-link-given-below"
            }
            className="w-full rounded-full bg-[#0072aa] text-2xl hover:bg-[#005eaa] text-white text-center py-4 md:py-6"
          >
            ई साइकिल आवेदन फॉर्म
          </Link>
          <Link
            href={
              "/get-rs-15000-from-the-government-by-buying-an-ecycle-scheme-apply-the-online-link-given-below"
            }
            className="w-full rounded-full bg-[#0072aa] text-2xl hover:bg-[#005eaa] text-white text-center py-4 md:py-6"
          >
            ज्यादा जानें
          </Link>
        </div>
        <Ad3 />
      </div>
      <Footer />
    </main>
  );
};

export default ECycleSchemePage;
