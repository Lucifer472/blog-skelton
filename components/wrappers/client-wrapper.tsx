import dynamic from "next/dynamic";

const ClientWrapper = ({ children }: { children: JSX.Element }) => (
  <div className="my-2">{children}</div>
);

export default dynamic(() => Promise.resolve(ClientWrapper), { ssr: false });
