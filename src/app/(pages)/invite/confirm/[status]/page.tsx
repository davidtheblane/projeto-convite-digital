"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { JSX, Usable, use, useEffect, useState } from "react";

const ConfirmQuest = ({
  params,
  searchParams,
}: {
  params: Usable<never>;
  searchParams: Usable<never>;
}) => {
  const { status } = use(params);
  const { linkGift = "Link" } = use(searchParams);

  const [text, setText] = useState<JSX.Element>();

  useEffect(() => {
    setText(
      status === "confirmed" ? (
        <div className="flex flex-col items-center justify-center w-full">
          <p>Uhuuul! 🥳🎉</p>
          <p>
            Estamos felizes em receber você e seus acompanhantes! Até breve!
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full">
          <p>Poxa! 😥😣</p>
          <p>
            Obrigado por nos deixar saber da sua ausência. Nos vemos numa
            proxima!
          </p>
        </div>
      )
    );
  }, [status]);
  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full">
      <span className="text-2xl">{text}</span>
      <span className="flex flex-col items-center justify-center w-full">
        Se você puder e quiser, aqui está uma lista de produtos que pode{" "}
        {status === "confirmed"
          ? "trazer para nossa festa!"
          : "nos presentear!"}
      </span>
      <Link href={linkGift} target="_blank">
        <Button variant="link">{linkGift}</Button>
      </Link>
    </div>
  );
};

export default ConfirmQuest;
