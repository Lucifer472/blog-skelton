import Footer from "@/components/navigation/footer";

const WebLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      {children}
      <Footer />
    </main>
  );
};

export default WebLayout;
