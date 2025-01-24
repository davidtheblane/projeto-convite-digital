import EventProvider from "@/core/contexts/eventContext";

const LayoutPages = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <EventProvider>{children}</EventProvider>;
};

export default LayoutPages;
