import Footer from "@/components/navigation/footer";
import Navbar from "@/components/navigation/navbar";
import LoadingWrapper from "@/components/wrappers/loading-wrapper";

export const revalidate = 0;

const WebLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-white">
      <LoadingWrapper />
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default WebLayout;
