"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const LoadingWrapper = () => {
  const [loading, setLoading] = useState(true);
  const [percentage, setPercentage] = useState(0);

  const pathname = usePathname();

  useEffect(() => {
    setPercentage(0);
    const interval = setInterval(() => {
      // Increment the percentage by 1 every 20 milliseconds
      setPercentage((prevPercentage) => {
        if (prevPercentage < 100) {
          return prevPercentage + 1;
        } else {
          clearInterval(interval);
          return 100;
        }
      });
    }, 50);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [pathname]);

  useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return (
    <>
      {loading && (
        <div className="w-full h-full min-h-screen bg-[url('/textured_stripes_brand_primary.png')] fixed flex items-center justify-center flex-col gap-y-4 z-[9999]">
          <span className="text-white text-xl">Loading {percentage}%</span>
          <div className="flex items-start justify-start w-full">
            <div className="bg-white h-2 loader"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoadingWrapper;
