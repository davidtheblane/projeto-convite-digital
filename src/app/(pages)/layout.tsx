import React from "react";

const LayoutPages = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="min-h-screen flex flex-col items-center gap-5 bg-[url('/background.png')] bg-cover py-5 pt-24">
      <main className="flex flex-col max-w-6xl container">{children}</main>
    </div>
  );
};

export default LayoutPages;
