"use client";

import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { XIcon } from "lucide-react";

const CardCustomForm = ({
  image,
  bgImage,
  title,
  preTitle,
  subTitle,
  content,
}: {
  image: string;
  bgImage: string;
  title: string;
  preTitle?: string;
  subTitle?: string;
  content: React.ReactNode;
}) => {
  return (
    <Card className="max-w-5xl w-full mx-auto flex flex-col gap-5 overflow-hidden">
      <CardHeader className="relative h-44 ">
        <Image
          src={bgImage}
          alt={`Imagem de fundo`}
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="flex gap-7 p-4 items-center z-10">
          <div className="w-28 h-28 relative">
            <Image
              src={image}
              alt="Imagem do evento"
              className="rounded-full object-cover"
              fill
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-zinc-300">{preTitle}</span>
            <span className="text-4xl font-bold truncate w-full max-w-[700px]">
              {title}
            </span>
            <span className="text-xs font-bold">{subTitle}</span>
          </div>
        </div>
        <Button
          className="absolute top-3 right-3 bg-white/20  hover:bg-white z-20"
          onClick={() => window.history.back()}
        >
          <XIcon />
        </Button>
      </CardHeader>
      <CardContent>{content}</CardContent>
    </Card>
  );
};

export default CardCustomForm;
