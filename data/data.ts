import events from '../data/events.json';
import DateFilter from '../types/DateFilter';
import Event from '../types/Event';

export const getEvents = (): Event[] => {
  return events;
};

export const getEventById = (id: number): Event | null => {
  const filteredEvents = events.filter((event) => event.id === id);

  if (filteredEvents.length) {
    return filteredEvents[0];
  }

  return null;
};

export const getFeaturedEvents = (): Event[] => {
  return events.filter((event) => event.isFeatured);
};

export const getFilteredEvents = (dateFilter: DateFilter): Event[] => {
  const { year, month, day } = dateFilter;

  return events.filter((event) => {
    const eventDate = new Date(event.date);

    return (
      eventDate.getFullYear() === year &&
      eventDate.getMonth() === month &&
      eventDate.getDay() === day
    );
  });
};
