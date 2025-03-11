import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

interface EventCardProps {
  title: string;
  subTitle: string;
  date: Date;
  imageBackground?: string;
  routeTo: string;
}

const EventCard = ({
  title,
  subTitle,
  date,
  routeTo,
  imageBackground,
}: EventCardProps) => {
  return (
    <Card className="flex flex-col w-full shadow-lg max-h-52 max-w-96 overflow-hidden">
      <Link href={routeTo}>
        <div className="relative h-32 w-full">
          <Image
            src={imageBackground || "/background-elementos.svg"}
            alt={`Imagem de fundo de ${title}`}
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
            <div className="p-6">
              <h1 className="text-2xl font-bold text-white mb-2">{title}</h1>
              <p className="text-lg text-white">{subTitle}</p>
            </div>
          </div>
        </div>

        <CardHeader>
          <CardTitle className="flex items-center">
            <CalendarIcon className="mr-2" />
            <p>
              <strong>Início:</strong> {format(date, "dd MMM yyyy HH:mm")}
            </p>
          </CardTitle>
        </CardHeader>
      </Link>
    </Card>
  );
};

export default EventCard;
