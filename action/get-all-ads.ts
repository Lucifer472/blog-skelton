"use server";

import db from "@/lib/db";

export const getAllAdsFromServer = async () => {
  return await db.ads.findMany({
    take: 10,
    orderBy: {
      id: "asc",
    },
  });
};
