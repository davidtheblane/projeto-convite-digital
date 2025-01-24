import Image from "next/image";
import React from "react";

const LayoutPages = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-10 bg-[url('/background.png')] bg-cover py-5">
      <Image src="/logo-white.svg" width={200} height={200} alt="Logo1" />
      <main className="flex flex-col max-w-6xl container">{children}</main>
    </div>
  );
};

export default LayoutPages;
