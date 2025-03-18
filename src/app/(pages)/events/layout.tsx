import EventProvider from "@/core/contexts/eventContext";

const LayoutPages = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <EventProvider>
      <div className="container px-2">{children}</div>
    </EventProvider>
  );
};

export default LayoutPages;
