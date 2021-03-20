import { useEffect, useState } from 'react';

import { EventsService } from '../../services/events.service';
import { Event } from '../../types/event.type';

const EventsPage = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const eventsService = new EventsService();
    setEvents(eventsService.getEvents());
  }, [EventsService]);

  return <div></div>;
};

export default EventsPage;
