import { useEffect, useState } from 'react';

import { getEvents } from '../../data/data';
import Event from '../../types/Event';

const EventsPage = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    setEvents(getEvents());
  }, [getEvents]);

  return <div></div>;
};

export default EventsPage;
