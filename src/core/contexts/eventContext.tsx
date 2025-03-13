"use client";
import React, {
  createContext,
  useState,
  ReactNode,
  useMemo,
  useCallback,
} from "react";
import { IEvent } from "../interfaces/event.interface";
import useAPI from "../hooks/use-api";
import useUser from "../hooks/use-user";
import { typeEventFormSchema } from "@/utils/definitions";

interface EventContextData {
  event: IEvent | undefined;
  events: IEvent[];
  loading: boolean;
  error: string | undefined;

  createEvent: (data: typeEventFormSchema) => Promise<IEvent | undefined>;
  getEvents: () => Promise<void>;
  getEventByAlias: (alias: string) => Promise<IEvent>;
}

export const EventContext = createContext<EventContextData | undefined>(
  undefined
);

export const EventProvider = ({ children }: { children: ReactNode }) => {
  const { httpGet, httpPost, extrairDados } = useAPI();
  const { token } = useUser();

  const [event, setEvent] = useState<IEvent | undefined>(undefined);
  const [events, setEvents] = useState<IEvent[]>([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const createEvent = useCallback(
    async (data: typeEventFormSchema) => {
      setLoading(true);
      setError(undefined);
      try {
        const response = await httpPost("events", data, token);
        const responseData = (await extrairDados(response)) as IEvent;
        if (response) {
          setEvent(responseData);
        }

        return responseData;
      } catch (error) {
        console.log({ error });
        setError(error as string);
      } finally {
        setLoading(false);
      }
    },
    [extrairDados, httpPost, token]
  );

  const getEvents = useCallback(async () => {
    setLoading(true);
    setError(undefined);
    try {
      const response = await httpGet("events", token);

      setEvents(await extrairDados(response));
    } catch (error) {
      console.log({ error });
      setError(error as string);
    } finally {
      setLoading(false);
    }
  }, [httpGet, token, extrairDados]);

  const getEventByAlias = useCallback(
    async (alias: string) => {
      setLoading(true);
      setError(undefined);
      try {
        const response = await extrairDados(
          await httpGet("events/alias/" + alias)
        );

        setEvent(response);
        return response;
      } catch (error) {
        console.log({ error });
        setError(error as string);
      } finally {
        setLoading(false);
      }
    },
    [httpGet, extrairDados]
  );

  const contextValue = useMemo(
    () => ({
      event,
      events,
      loading,
      error,

      createEvent,
      getEvents,
      getEventByAlias,
    }),
    [event, events, loading, error, createEvent, getEvents, getEventByAlias]
  );

  return (
    <EventContext.Provider value={contextValue}>
      {children}
    </EventContext.Provider>
  );
};

export default EventProvider;
