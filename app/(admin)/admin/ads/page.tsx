import { redirect } from "next/navigation";

import ClientWrapper from "@/components/wrappers/client-wrapper";

import { getAds } from "@/lib/ads";
import FormWrapper from "@/components/wrappers/form-wrapper";
import AdminNavbar from "@/components/navigation/admin-navbar";
import { AdChangeForm } from "@/components/auth/AdChangeForm";

const AdChangePage = async () => {
  const ads = await getAds();

  if (ads.error) {
    return redirect("/");
  }

  return (
    <section className="w-full min-h-screen">
      <AdminNavbar />
      <div className="global-container flex items-center justify-center w-full min-h-screen py-6">
        <FormWrapper
          title="Update Ads"
          label="This is form is for updating Ads!"
        >
          <ClientWrapper>
            <AdChangeForm data={ads.success as any} />
          </ClientWrapper>
        </FormWrapper>
      </div>
    </section>
  );
};

export default AdChangePage;
