import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="
        h-screen flex flex-col justify-center items-center gap-10
        bg-[url('/background-inicio.svg')] bg-cover
      "
    >
      <Image src="/logo-white.svg" width={200} height={200} alt="Logo1" />
      <Button size={"lg"} className="text-3xl px-10 py-7" asChild>
        <Link href={"/login"}>Login</Link>
      </Button>
    </div>
  );
}
