"use client";
import useAPI from "@/core/hooks/use-api";
import useUser from "@/core/hooks/use-user";
import { IEvent } from "@/core/interfaces/event.interface";
import React, { useEffect } from "react";
import EventCard from "./_components/EventCard";
import { Card } from "@/components/ui/card";
import { PlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Dashboard = () => {
  const router = useRouter();
  const { user, token, isAuthenticated } = useUser();
  const { httpGet, extrairDados } = useAPI();
  const [events, setEventsList] = React.useState<IEvent[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      await isAuthenticated();

      if (token)
        await httpGet("events", token).then(async (response) => {
          setEventsList((await extrairDados(response)) as IEvent[]);
        });
    };

    fetchEvents();
  }, [httpGet, token, router, isAuthenticated, extrairDados]);

  return (
    <div className="flex grow justify-center min-h-[300px] flex-col items-center">
      <h1 className="text-2xl">Bem vindo, {user?.name}</h1>
      <span>Esses são os eventos que você criou</span>

      <div className="scroll-smooth w-full flex flex-wrap justify-center gap-4 py-4 rounded-sm overflow-y-auto">
        {events && events.length > 0 && (
          <>
            {events.map((event) => (
              <EventCard
                routeTo={`/events/${event.alias}`}
                key={event.id}
                title={event.name || ""}
                subTitle={event.alias || ""}
                date={event.startDate}
                imageBackground={event.imageBackground}
              />
            ))}
          </>
        )}
        <Link
          href={"/events/create"}
          className="flex justify-center items-center w-full max-h-52 min-h-52 max-w-96 "
        >
          <Card
            onClick={() => router.push("")}
            className="flex justify-center items-center w-full h-full"
          >
            <PlusIcon size={32} />
            <div>Criar Evento</div>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
