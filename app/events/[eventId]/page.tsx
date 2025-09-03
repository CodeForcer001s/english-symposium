"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { eventsData, Event } from "@/app/data/events";
import EventHero from "@/components/events/EventHero";
import EventDetails from "@/components/events/EventDetails";
import EventRounds from "@/components/events/EventRounds";

import EventCoordinators from "@/components/events/EventCoordinators";
import { notFound } from "next/navigation";

export default function EventPage() {
  const params = useParams();
  const eventId = params.eventId as string;
  const [event, setEvent] = useState<Event | null>(null);

  useEffect(() => {
    const foundEvent = eventsData.find((e) => e.id === eventId);
    if (foundEvent) {
      setEvent(foundEvent);
    } else {
      // Handle case when event is not found
      notFound();
    }
  }, [eventId]);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <EventHero event={event} />
      <EventDetails event={event} />
      <EventRounds event={event} />
      <EventCoordinators event={event} />
    </div>
  );
}
